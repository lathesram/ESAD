import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SupportTicket } from 'src/app/model/model';
import { AddEditTicketComponent } from '../add-edit-ticket/add-edit-ticket.component';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.scss'],
})
export class ViewTicketsComponent {
  tickets: SupportTicket[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    // Fetch and assign values to tickets
  }

  openAddTicketDialog(): void {
    const dialogRef = this.dialog.open(AddEditTicketComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadTickets(); // Refresh ticket list after adding
      }
    });
  }

  openEditTicketDialog(ticket: SupportTicket): void {
    const dialogRef = this.dialog.open(AddEditTicketComponent, {
      width: '500px',
      data: ticket,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadTickets();
      }
    });
  }
}
