import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service'

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  userdata= {
    userEmail:''
};

  constructor(private travelService: TravelService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onEmailSubmit() {
    console.log(this.userdata.userEmail);
    this.travelService.forgotPassword(this.userdata.userEmail)
    .subscribe(data=>{
      if(data == false){
        alert("Username not found")
      }
      else {
        alert("Password sent on requested email.")
      }
      this.router.navigate([`/login`]);
    },err => console.log(err));
    
  }

}
