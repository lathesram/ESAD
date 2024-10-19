import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    title: 'Authentication',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'marketing',
    title: 'Marketing',
    loadChildren: () =>
      import('./marketing/marketing.module').then((m) => m.MarketingModule),
  },
  {
    path: 'reporting',
    title: 'Reporting',
    loadChildren: () =>
      import('./reporting/reporting.module').then((m) => m.ReportingModule),
  },
  {
    path: 'ticket',
    title: 'Ticket',
    loadChildren: () =>
      import('./ticket/ticket.module').then((m) => m.TicketModule),
  },
  {
    path: 'registration',
    title: 'Vehicle Registration',
    loadChildren: () =>
      import('./vehcile-registration/vehicle-registration.module').then(
        (m) => m.VehicleRegistrationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
