import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { Cours } from '../courses/cours';
import { SomeDataService } from '../some-data.service';
import { User } from '../users/user';





@Component({
  selector: 'app-dialog-inv',
  templateUrl: './dialog-inv.component.html',
  styleUrls: ['./dialog-inv.component.css']
})
export class DialogInvComponent implements OnInit {

  title = 'nodeMailerApp';
  nodeMailerForm!: FormGroup; 

  constructor(private service:AppServiceService, private someSrv: SomeDataService, private formBuilder:FormBuilder) { }

  users: User[] = [];
  url:string="";

  ngOnInit(): void {
    this.getUsers();
    this.nodeMailerForm = this.formBuilder.group({
      email:[null,[Validators.required]]
   });
  
    }


  getUsers(): void {
    this.service.getUsesr()
    .subscribe(users => this.users = users);
  }


 url1() {
    this.url=""
    console.log(this.url+" after");
    const url = JSON.stringify(this.url)
    localStorage.setItem('urlInv', url)
  }
  

time:number=0

  invaint(user: User):void{
 
    this.url="http://localhost:4200/invaint";
    console.log(this.url);
    setTimeout(this.url1, 1000*this.time*60*60*24);
    const url = JSON.stringify("invaint")
    localStorage.setItem('urlInv', url)

    const id=Number(user.id);
    const name=user.name;
    const surname=user.surname;
    const login=user.login;
    const role=user.role;
    const password=user.password;
    const email=user.email;
    const tel=user.tel;
    const courses=(String(localStorage.getItem('idc')).split('"').join('')).split(",");
    this.service.updateUser({ id, name, surname, login, role, password,  email, tel }  as User)
    .subscribe();


    
  }










  

  allComplete: boolean = false;
  ch:boolean=false;
  inv:string[]=[]
  invEmail:string[]=[]

  updateAllComplete() {
    
   this.inv=[]
   this.invEmail=[]
   this.ch = this.users != null && this.users.every(t => t.courses);

    this.users.forEach((item, index) =>{ 
      if(item.courses==true){
        this.inv.push(item.login)
      }
    })

    this.users.forEach((item, index) =>{ 
      if(item.courses==true){
        this.invEmail.push(item.email)
      }
    })

 this.someSrv.users=this.inv
this.sendMail(this.invEmail)


    }
  

  
 

    sendMail(inv:string[]){
     
      let reqObj = {
        email:inv
      }
      console.log(reqObj)
      this.service.sendMessage(reqObj).subscribe(data=>{
        console.log(data);
      })
    }

}
