import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Home } from './feature/home/home';

export const routes: Routes = [
   {
    path: '',
    component: Home
  },
  {
    path: 'room',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'mfRoom',
        exposedModule: './ComponentRoom',
      }).then((m) => m.App),
  },
];