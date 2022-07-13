import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { SomeDataService } from '../some-data.service';
import { User } from '../users/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AppServiceService, private someSrv: SomeDataService, private router: Router) { }

  ngOnInit(): void {
    this.someSrv.data = 0
    this.someSrv.role = ""
    this.errL=0
  }

  errL=0;

  users: User[] = [];
  uLogin:string="";
  uPassword=""
  password=""
  role:string="";
  uCours:string[] | undefined;
  checkEnter=0;
  
  logControl=new FormGroup({
    loginFormControl : new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')]),
    pas1FormControl : new FormControl('', [Validators.required])
  })
  

  


  add1(){
   
    
    
    this.service.getUsesr()
    .subscribe(users => {this.users = users;
      
      for( let i=0; i<this.users.length; i++){
        if (this.users[i].login==this.uLogin ){
          //this.role=this.users[i].role;
          this.someSrv.role = this.users[i].role;
         this.uCours=this.users[i].courses;
          this.password=this.users[i].password;
           break;
         }
      }

    
      if(this.password==this.uPassword){
        this.someSrv.data = 1
        this.router.navigate(['/courses']);
      }
      else{
        this.errL=1
      }
        
  
      




    
      

    const jsonData5 = JSON.stringify(this.role)
    localStorage.setItem('roleForE', jsonData5)

    const jsonData1 = JSON.stringify(this.uLogin)
    localStorage.setItem('logForE', jsonData1)
  /*  
    const jsonData22 = JSON.stringify(this.uCours)
    localStorage.setItem('uCours', jsonData22)**/
     });

  }

}
