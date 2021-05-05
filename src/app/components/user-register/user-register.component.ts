import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service'
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user= {
    fName:'',
    lName:'',
    businessUnit:'',
    userTitle:'',
    userEmail:'',
    userTelephone:'',
    userAddress:'',
    userCity:'',
    userState:'',
    userZip:'',
    userCountry:''
};
 // email:any;

  constructor(private travelService: TravelService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser():void {
    this.travelService.registerUser(this.user)
    .subscribe(
      data =>
      {
        console.log('Success!',data)
        localStorage.setItem("data",data);
        this.router.navigate([`/userconfirm`]);
      },
      error => console.error('Error!',error)
    )
    //console.log(this.user)
  }

}
