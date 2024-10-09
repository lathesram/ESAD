import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditTicketComponent } from './add-edit-ticket/add-edit-ticket.component';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';



@NgModule({
  declarations: [
    AddEditTicketComponent,
    ViewTicketsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TicketModule { }
