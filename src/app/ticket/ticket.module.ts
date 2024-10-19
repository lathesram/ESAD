import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditTicketComponent } from './add-edit-ticket/add-edit-ticket.component';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { TicketRoutingModule } from './ticket-routing.module';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AddEditTicketComponent, ViewTicketsComponent],
  imports: [
    MaterialModule,
    TicketRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
})
export class TicketModule {}
