import { Routes } from '@angular/router';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { ListComponent as VehiclesListComponent } from './vehicles/list/list.component';
import { AddComponent as VehiclesAddComponent } from './vehicles/add/add.component';
import { ListComponent as ParkingSpacesListComponent } from './parking-spaces/list/list.component';
import { AddComponent as ParkingSpacesAddComponent } from './parking-spaces/add/add.component';
import { ListComponent as ReservationsListComponent } from './reservations/list/list.component';
import { AddComponent as ReservationsAddComponent } from './reservations/add/add.component';
export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'vehicles', component: VehiclesListComponent },
    { path: 'vehicles/add', component: VehiclesAddComponent },
    { path: 'parking-spaces', component: ParkingSpacesListComponent },
    { path: 'parking-spaces/add', component: ParkingSpacesAddComponent },
    { path: 'reservations', component: ReservationsListComponent },
    { path: 'reservations/add', component: ReservationsAddComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ];
