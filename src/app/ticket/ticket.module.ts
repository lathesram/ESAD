import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditTicketComponent } from './add-edit-ticket/add-edit-ticket.component';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { TicketRoutingModule } from './ticket-routing.module';



@NgModule({
  declarations: [
    AddEditTicketComponent,
    ViewTicketsComponent
  ],
  imports: [
    TicketRoutingModule,
    CommonModule
  ]
})
export class TicketModule { }
