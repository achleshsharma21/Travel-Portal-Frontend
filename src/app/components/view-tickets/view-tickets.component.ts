import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit {

  tickets:any[]=[];
  user  = localStorage.getItem('user');

  constructor(private travelService: TravelService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(localStorage.length===0)
    {
      this.router.navigate([`/login`]);
    }
    this.travelService.getTicket(this.user!)
  .subscribe(data => {
    console.log(data);
    this.tickets = data
  },
    error => console.log(error))
  }

  userLogout():void {
    localStorage.clear();
    this.router.navigate([`/login`]);
  }

}
