import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-admin-view-ticket',
  templateUrl: './admin-view-ticket.component.html',
  styleUrls: ['./admin-view-ticket.component.css']
})
export class AdminViewTicketComponent implements OnInit {

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

    adminLogout():void {
      localStorage.clear();
      this.router.navigate([`/adminlogin`]);
    }
}
