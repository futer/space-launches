import { Routes } from '@angular/router';
import { SpaceLaunchesPageComponent } from './pages/space-launches-page/space-launches-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/space-launch', pathMatch: 'full' },
    {
        path: 'space-launch',
        component: SpaceLaunchesPageComponent,
    }
];
