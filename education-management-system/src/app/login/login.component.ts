import { TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Cours } from '../courses/cours';
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
  cours2: Cours[] = [];
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
  

  /*
         name=""
         plan:string[]=[]
         user2:string[]=[]
         auth=""
         test=""*/

  add1(){
   
  
    
    
    this.service.getUsesr()
    .subscribe(users => {this.users = users;
      
      for( let i=0; i<this.users.length; i++){
        if (this.users[i].login==this.uLogin ){
          //this.role=this.users[i].role;
          this.someSrv.role = this.users[i].role;
        // this.uCours=this.users[i].courses;
          this.password=this.users[i].password;
           break;
         }
      }

    
      if(this.password==this.uPassword){
        this.someSrv.data = 1
        const id=this.someSrv.inv;
       
     /*   
        this.service.getCourses()
    .subscribe(cours2 => {this.cours2 = cours2;
      
      for( let i=0; i<this.cours2.length; i++){
        if (this.cours2[i].id==id ){
        this.name=this.cours2[i].name;
         this.plan=this.cours2[i].plan;
         this.auth=this.cours2[i].auth;
         this.test=this.cours2[i].test;
         this.user2=this.cours2[i].user;
         
           break;
         }
      }})*/

        let stud ;
        stud=this.someSrv.users;
        stud.concat(this.someSrv.users2);

        const user=stud;
        const name=this.someSrv.name;
        const plan=this.someSrv.plan;
        const auth=this.someSrv.auth;
        const test=this.someSrv.test;

      alert(id)
      alert(name)
     
       this.service.updateCours({  id, name, plan, auth, test, user }  as Cours)
       .subscribe();
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
