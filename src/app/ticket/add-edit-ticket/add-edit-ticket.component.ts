import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SupportTicket } from 'src/app/ticket/model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-add-edit-ticket',
  templateUrl: './add-edit-ticket.component.html',
  styleUrls: ['./add-edit-ticket.component.scss'],
})
export class AddEditTicketComponent {
  ticketForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private dialogRef: MatDialogRef<AddEditTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SupportTicket
  ) {}

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      userBy: [this.data?.userBy || null, Validators.required],
      customerId: [this.data?.customerId || null, Validators.required],
      issueType: [this.data?.issueType || '', Validators.required],
      comment: [this.data?.comment || '', Validators.required],
      issueResolved: [this.data?.issueResolved || false],
      submittedDate: [
        this.data?.submittedDate || new Date().toISOString().substring(0, 10),
      ],
      priority: [this.data?.priority || 'Medium', Validators.required],
      status: [this.data?.status || 'Open', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      const ticketData: SupportTicket = this.ticketForm.value;
      if (this.data) {
        this.updateTicket();
      } else {
        this.createTicket();
      }
    }
    this.dialogRef.close(true);
  }

  createTicket(): void {
    const ticketData = this.ticketForm.value;
    this.ticketService.createTicket(ticketData).subscribe();
  }

  updateTicket(): void {
    const ticketData = this.ticketForm.value;
    this.ticketService.createTicket(ticketData).subscribe();
  }
}
