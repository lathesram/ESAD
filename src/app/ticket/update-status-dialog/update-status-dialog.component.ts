import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SupportTicket } from 'src/app/ticket/model';

@Component({
  selector: 'app-update-status-dialog',
  templateUrl: './update-status-dialog.component.html',
  styleUrls: ['./update-status-dialog.component.scss'],
})
export class UpdateStatusDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SupportTicket
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
