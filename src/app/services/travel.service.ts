import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private http:HttpClient) { }

  registerUser(data:any): Observable<any> {
    return this.http.post('http://localhost:9200/adduser',data);
  }

  getUserByEmail(email:string) {
    return this.http.get(`http://localhost:9200/userbyemail/${email}`);
  }

  forgotPassword(email:string) {
    console.log(`http://localhost:9200/forgotpass/${email}`);
    
    return this.http.get(`http://localhost:9200/forgotpass/${email}`);
  }

  createTicket(data:any, email:string) {
    console.log(email);
    return this.http.post(`http://localhost:9200/addticket/${email}`,data);
  }

  getTicket(email:string) {
    return this.http.get<any[]>(`http://localhost:9200/ticketbyemail/${email}`);
  }

  getTicketDetails(id:number) {
    return this.http.get(`http://localhost:9200/ticketbyid/${id}`);
  }

  getAdminByEmail(email:string) {
    return this.http.get(`http://localhost:9200/getadmin/${email}`);
  }

  getAllTickets() {
    return this.http.get<any[]>('http://localhost:9200/alltickets');
  }

  updateTicket(data:any, id:number) {
    return this.http.put(`http://localhost:9200/updateticket/${id}`,data);
  }

  getCovidGlobalData() {
    return this.http.get('https://api.covid19api.com/summary');
  }

  updateStatus(data:any, id:number) {
    return this.http.put(`http://localhost:9200/admin/updatestatus/${id}`,data);
  }

}
