import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminData= {
    adminEmail:'',
    errorMessage:'',
    adminPassword:''
};

  constructor(private travelService: TravelService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onAdminLogin(){
    this.getAdmin(this.adminData.adminEmail);
  }

  private getAdmin(email:string) {
    this.travelService.getAdminByEmail(email)
    .subscribe((data : any) => {
      if(data!=null){
        if(this.adminData.adminPassword===data.adminPassword)
       {
          localStorage.setItem("data",email);
          this.adminData.errorMessage="Success";
         this.router.navigate([`/adminhome`]);
        }
        else{
          this.adminData.errorMessage="Password not correct";
          console.log(this.adminData.errorMessage);
        }
      }
      else {
        this.adminData.errorMessage="Username not Correct";
        console.log(this.adminData.errorMessage);
      }
    });
  }

}
