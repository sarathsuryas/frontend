import { Routes } from '@angular/router';

import { HomeService } from './services/home.service';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    providers: [HomeService],
    loadComponent: () => import('./home-page/home-page').then((m) => m.HomePage),
  },
];
