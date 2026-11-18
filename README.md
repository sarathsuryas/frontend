# Frontend

## Architecture

The app uses a feature-based layout under `src/app`:

```
src/app/
├── core/       # app-wide singletons: API client, config tokens, guards, interceptors
├── shared/     # reusable, feature-agnostic components, directives, pipes, utils
├── layout/     # route layouts / app shell (header, footer, router outlet)
├── features/   # business domains, each lazy-loaded through its own *.routes.ts
└── app.*       # root component, config and route table
```

The `home` feature is a working example of the pattern.

### Dependency rules

- `features/*` may import from `core` and `shared`, but never from another feature.
- `core` and `shared` never import from `features`.
- App-wide singletons belong in `core` with `providedIn: 'root'`; feature state belongs in the
  feature's `services/` folder and is provided on the feature route so it lives only while the
  feature is active.

### Adding a feature

1. Create `src/app/features/<name>/<name>.routes.ts` exporting a `Routes` array (e.g. `NAME_ROUTES`).
2. Add the page under `<name>/<name>-page/` and load it with `loadComponent` from those routes.
3. Register the feature in `app.routes.ts` with
   `loadChildren: () => import('./features/<name>/<name>.routes').then((m) => m.NAME_ROUTES)`.
4. Put feature models in `models/`, feature services in `services/`, and provide them on the route.

### Conventions

- Standalone components, `OnPush` change detection and `inject()` for dependencies (CLI schematic
  defaults are set in `angular.json`).
- Signals (`signal`, `computed`) for state; no external state-management library.
- File naming: `thing.ts` / `thing.html` / `thing.css`, `thing.routes.ts`, `thing.service.ts`,
  `thing.model.ts`.
- TypeScript path aliases: `@app/*`, `@core/*`, `@shared/*`, `@layout/*`, `@features/*`.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.39.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
