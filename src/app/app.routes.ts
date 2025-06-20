import { Routes } from '@angular/router';
import { Details } from './details/details';
import { ApiPlants } from './api-plants/api-plants';

export const routes: Routes = [
    { path: '', component: ApiPlants },
    { path: 'detail/:id', component: Details }
];
