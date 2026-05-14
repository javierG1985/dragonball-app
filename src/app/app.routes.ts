import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main/main.component'),

    children: [
      {
        path: 'dragonball',
        loadComponent: () =>
          import('./features/dragonball/ui/pages/dragonball-page/dragonball-page.component'),
      },
      {
        path: '**',
        redirectTo: 'dragonball',
      },
    ],
  },
];
