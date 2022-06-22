import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { User } from '../users/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AppServiceService ) { }

  ngOnInit(): void {
    
  }


  users: User[] = [];
  uLogin:string="";
  role:string="";

  

  


  add1(){
   
    this.uLogin=(<HTMLInputElement>document.getElementById('login1')).value;
    
    this.service.getUsesr()
    .subscribe(users => {this.users = users;
      
      for( let i=0; i<this.users.length; i++){
        if (this.users[i].login==this.uLogin ){
          this.role=this.users[i].role;
          //console.log(this.users[i].login)
           break;
         }
      }
      location.reload();
      console.log("role "+this.role)
    const jsonData5 = JSON.stringify(this.role)
    localStorage.setItem('roleForE', jsonData5)
    
     });

  }

}
