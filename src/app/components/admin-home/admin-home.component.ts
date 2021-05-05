import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  tickets:any[]=[];

  constructor(private travelService: TravelService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(localStorage.length===0)
    {
      this.router.navigate([`/adminlogin`]);
    }
    this.travelService.getAllTickets()
    .subscribe(data => {
      console.log(data);
      this.tickets=data;
    },
    error => console.log(error))
  }

  adminLogout():void {
    localStorage.clear();
    this.router.navigate([`/adminlogin`]);
  }

}
