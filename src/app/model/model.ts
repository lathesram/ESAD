import { TicketPriority, TicketStatus } from "../enums/enum";

export interface SupportTicket {
    id?: number;
    userBy?: number;
    customerId: number;
    issueType: string;
    comment: string;
    issueResolved: boolean;
    submittedDate: string;
    priority: TicketPriority;
    status: TicketStatus;
  }