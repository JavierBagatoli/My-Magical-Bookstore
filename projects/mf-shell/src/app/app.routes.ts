import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('mfRoom/Component').then((m) => m.App),
  },
];