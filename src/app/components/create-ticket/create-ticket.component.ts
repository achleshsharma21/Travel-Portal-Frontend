import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  ticket= {
    reqType:'',
    ticketPriority:'',
    travelCity:'',
    fromCity:'',
    fromDate:'',
    toDate:'',
    passportNumber:'',
    projectName:'',
    expenseBorne:'',
    travelApproveBy:'',
    travelDuration:'',
    upperBoundExpense:'',
    additionalDetails:'',
};

  user:any;

constructor(private travelService: TravelService, private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit(): void {
   this.user=localStorage.getItem('user');
  }
  
  saveTicket():void {
    this.travelService.createTicket(this.ticket,this.user)
    .subscribe(data=>{
      console.log('Success!',data)
    },
    error => console.error('Error!',error)
    )
  }

  userLogout():void {
    localStorage.clear();
    this.router.navigate([`/login`]);
  }

}
