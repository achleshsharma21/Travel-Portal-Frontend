import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userdata= {
    userEmail:'',
    errorMessage:'',
    password:''
};
  
  constructor(private travelService: TravelService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    console.log(localStorage.getItem('user'));
  }

  onUserLogin(){
    this.getUser(this.userdata.userEmail);
  }

  private getUser(email:string) {
    this.travelService.getUserByEmail(email)
    .subscribe((user : any) => {
      if(user!=null){
        if(this.userdata.password===user.password)
       {
          localStorage.setItem("user",email);
          this.userdata.errorMessage="Success";
         this.router.navigate([`/home`]);
        }
        else{
          this.userdata.errorMessage="Password not correct";
          console.log(this.userdata.errorMessage);
        }
      }
      else {
        this.userdata.errorMessage="Username not Correct";
        console.log(this.userdata.errorMessage);
      }
    });
  }

}
