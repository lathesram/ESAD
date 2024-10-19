import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRegistrationsComponent } from './view-registrations/view-registrations.component';
import { RegisterComponent } from '../auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    title: 'View Registration',
    component: ViewRegistrationsComponent,
  },
  {
    path: 'register',
    title: 'Add Edit Registration',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterVehicleRoutingModule {}
