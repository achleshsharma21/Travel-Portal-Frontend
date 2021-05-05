import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  covidGlobalData:any;

  constructor( private route: ActivatedRoute,
    private router: Router, private travelService: TravelService) { }

  ngOnInit(): void {
    if(localStorage.length===0)
    {
      this.router.navigate([`/login`]);
    }
    this.travelService.getCovidGlobalData()
    .subscribe(data=> {
     console.log(data);
      this.covidGlobalData=data;
    })
  }

  userLogout():void {
    localStorage.clear();
    this.router.navigate([`/login`]);
  }

}
