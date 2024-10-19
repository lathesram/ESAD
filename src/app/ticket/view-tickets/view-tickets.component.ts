import { TicketService } from './../ticket.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SupportTicket } from 'src/app/ticket/model';
import { AddEditTicketComponent } from '../add-edit-ticket/add-edit-ticket.component';
import { UpdateStatusDialogComponent } from '../update-status-dialog/update-status-dialog.component';
import { finalize } from 'rxjs';
import { TicketStatus } from '../enum';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.scss'],
})
export class ViewTicketsComponent {
  isLoading = false;
  tickets: SupportTicket[] = [];

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.isLoading = true;
    this.ticketService
      .getAllTickets()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (tickets) => {
          this.tickets = tickets;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  openAddTicketDialog(): void {
    const dialogRef = this.dialog.open(AddEditTicketComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadTickets();
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

  openUpdateStatusDialog(ticket: SupportTicket): void {
    const dialogRef = this.dialog.open(UpdateStatusDialogComponent, {
      width: '300px',
      data: ticket,
    });

    dialogRef.afterClosed().subscribe((result: TicketStatus) => {
      if (result) {
        this.ticketService
          .updateTicketStatus(ticket.id!, result)
          .subscribe(() => {
            ticket.status = result;
          });
      }
    });
  }
}
