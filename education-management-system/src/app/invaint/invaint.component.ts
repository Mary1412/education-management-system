import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { User } from '../users/user';

@Component({
  selector: 'app-invaint',
  templateUrl: './invaint.component.html',
  styleUrls: ['./invaint.component.css']
})
export class InvaintComponent implements OnInit {

  constructor(private service:AppServiceService ) { }

  ngOnInit(): void {
    
  }


  users: User[] = [];
  uLogin:string="";
  role:string="";
  uCours:string="";
  
  logControl=new FormGroup({
    loginFormControl : new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')]),
    pas1FormControl : new FormControl('', [Validators.required])
  })
  

  


  add1(){
   
    this.uLogin=(<HTMLInputElement>document.getElementById('login1')).value;
    
    this.service.getUsesr()
    .subscribe(users => {this.users = users;
      
      for( let i=0; i<this.users.length; i++){
        if (this.users[i].login==this.uLogin ){
          this.role=this.users[i].role;
//this.uCours=this.users[i].courses;
          //console.log(this.users[i].login)
           break;
         }
      }
      location.reload();
      console.log("role "+this.role)

    const jsonData5 = JSON.stringify(this.role)
    localStorage.setItem('roleForE', jsonData5)

    const jsonData1 = JSON.stringify(this.uLogin)
    localStorage.setItem('logForE', jsonData1)
    
    const jsonData22 = JSON.stringify(this.uCours)
    localStorage.setItem('uCours', jsonData22)
     });

  }

}
