import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-admin-update-ticket',
  templateUrl: './admin-update-ticket.component.html',
  styleUrls: ['./admin-update-ticket.component.css']
})
export class AdminUpdateTicketComponent implements OnInit {

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
      this.travelService.updateStatus(this.ticket,parseInt(this.id!))
      .subscribe(data=>{
        console.log('Success!',data)
        this.router.navigate([`/adminhome`]);
      },
      error => console.error('Error!',error)
      )
    }

    adminLogout():void {
      localStorage.clear();
      this.router.navigate([`/adminlogin`]);
    }

}
