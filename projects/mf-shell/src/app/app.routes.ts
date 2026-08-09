import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'room',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'mfRoom',
        exposedModule: './ComponentRoom',
      }).then((m) => m.App),
  },
];