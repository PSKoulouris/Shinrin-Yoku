import { Routes } from '@angular/router';
import { Details } from './details/details';
import { ApiPlants } from './api-plants/api-plants';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'plants', component: ApiPlants },
    { path: 'detail/:id', component: Details }
];
