import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'play',
    loadComponent: () => import('./tab1/play/play.page').then( m => m.PlayPage)
  },
];
