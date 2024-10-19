import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketStatus } from './enum';
import { SupportTicket } from './model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = 'http://localhost:8081/api/v1/customer_support';

  constructor(private http: HttpClient) {}

  createTicket(ticket: SupportTicket): Observable<SupportTicket> {
    return this.http.post<SupportTicket>(`${this.apiUrl}/saveTicket`, ticket);
  }

  getAllTickets(): Observable<SupportTicket[]> {
    return this.http.get<SupportTicket[]>(`${this.apiUrl}/getAllTickets`);
  }

  updateTicket(id: number, ticket: SupportTicket): Observable<SupportTicket> {
    return this.http.put<SupportTicket>(`${this.apiUrl}/update/${id}`, ticket);
  }

  updateTicketStatus(id: number, status: TicketStatus): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/updateTicketStatus/${id}?status=${status}`,
      {}
    );
  }
}
