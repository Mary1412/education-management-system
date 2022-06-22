import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { User } from './users/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'education-management-system';

  users: User[] = [];
  uLogin:string="";
  role:string="";


  constructor(private service:AppServiceService ) { }

  ngOnInit(): void {
    this.role=String(localStorage.getItem('roleForE')).split('"').join('');
    console.log(this.role+" appp")
  }



 

  login(){
    (<HTMLInputElement>document.getElementById('v1')).style.display="none";
    (<HTMLInputElement>document.getElementById('v2')).style.display="block";
    location.reload();

    this.service.getUsesr()
    .subscribe(users => {this.users = users;
      this.uLogin=(<HTMLInputElement>document.getElementById('login1')).value;
      for( let i=0; i<this.users.length; i++){
        if (this.users[i].login==this.uLogin ){
          this.role=this.users[i].role;
          //console.log(this.users[i].login)
           break;
         }
      }
      console.log("role "+this.role)
    const jsonData5 = JSON.stringify(this.role)
    localStorage.setItem('roleForE', jsonData5)
     });
     
  }
}
