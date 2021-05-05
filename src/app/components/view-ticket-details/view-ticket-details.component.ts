import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-view-ticket-details',
  templateUrl: './view-ticket-details.component.html',
  styleUrls: ['./view-ticket-details.component.css']
})
export class ViewTicketDetailsComponent implements OnInit {

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

    userLogout():void {
      localStorage.clear();
      this.router.navigate([`/login`]);
    }

}
