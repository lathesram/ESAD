import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { AddEditTicketComponent } from './add-edit-ticket/add-edit-ticket.component';

const routes: Routes = [
  {
    path: '',
    title: 'View Tickets',
    component: ViewTicketsComponent,
  },
  {
    path: 'add-edit',
    title: 'Add Edit Tickets',
    component: AddEditTicketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
