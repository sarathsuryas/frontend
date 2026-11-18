import { computed, Injectable, signal } from '@angular/core';

/** Feature-scoped state: provided on the home route, not at the root. */
@Injectable()
export class HomeService {
  private readonly _visits = signal(0);

  readonly visits = this._visits.asReadonly();
  readonly summary = computed(() => `Registered visits: ${this.visits()}`);

  registerVisit(): void {
    this._visits.update((count) => count + 1);
  }
}
