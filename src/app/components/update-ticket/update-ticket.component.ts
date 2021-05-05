import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

  ticket:any;
  id:any;

  constructor(private travelService: TravelService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.travelService.getTicketDetails(parseInt(this.id!))
    .subscribe(
      data=>{
        console.log(data);
        this.ticket=data;
      },
      error => console.log(error)
      )
  }

  updateTicket():void {
    this.travelService.updateTicket(this.ticket,parseInt(this.id!))
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
