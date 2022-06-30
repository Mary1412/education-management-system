import { Component, OnInit } from '@angular/core';
import { emitDistinctChangesOnlyDefaultValue, ThisReceiver } from '@angular/compiler';
import { AppServiceService } from '../app-service.service';
import { User } from './user';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  role:string=""
 

  uControl=new FormGroup({
    name : new FormControl('', [Validators.required]),
    surname : new FormControl('', [Validators.required]),
    login : new FormControl('', [Validators.required]),
    role : new FormControl('', [Validators.required]),
    
    email : new FormControl('', [Validators.email]),
    tel : new FormControl('', [Validators.required])
  })

  constructor(private service:AppServiceService ) { }

  ngOnInit(): void {/*
    this.role=String(localStorage.getItem('roleForE')).split('"').join('');
    if (this.role=="admin"){
      (<HTMLInputElement>document.getElementById('v22')).style.display="inline";
    }
    if (this.role=="user"){
      (<HTMLInputElement>document.getElementById('v22')).style.display="none";
    }
    if (this.role=="manager"){
      (<HTMLInputElement>document.getElementById('v22')).style.display="none";
    }*/

    this.role=String(localStorage.getItem('roleForE')).split('"').join('');
    console.log(this.role+'aaa')

    


this.getDataFromAPI();
this.getUsers();
  }

  getDataFromAPI(){
      this.service.getData().subscribe((response)=>{
        console.log('Response from API is ',response)
      },(error)=>{
        console.log('Error',error);
       } ) 
  }

  getUsers(): void {
    this.service.getUsesr()
    .subscribe(users => this.users = users);
  }

  delete(user: User): void {
    this.users = this.users.filter(c => c !== user);
    this.service.deleteUsesr(user.id).subscribe();
  }

  
  add(): void {
   let v1=(<HTMLInputElement>document.getElementById('v1')).style.display="block"
   let v2=(<HTMLInputElement>document.getElementById('v2')).style.display="none"
   let v4=(<HTMLInputElement>document.getElementById('v4')).style.display="block"
  
  }


  save(id1:string, name: string, surname: string, login :string, role: string, courses:string, email:string, tel:string): void {
    
    let v1=(<HTMLInputElement>document.getElementById('v1')).style.display="none"
    let v3=(<HTMLInputElement>document.getElementById('v3')).style.display="none"
    let v5=(<HTMLInputElement>document.getElementById('v5')).style.display="block"
    const id=Number(id1);
    this.service.updateUser({ id, name, surname, login, role, courses, email, tel }  as User)
    .subscribe();
    this.getUsers();
  }


  savea(name: string, surname: string, login :string, role: string, courses:string, email:string, tel:string): void {
    let v1=(<HTMLInputElement>document.getElementById('v1')).style.display="none"
    let v2=(<HTMLInputElement>document.getElementById('v2')).style.display="block"
    let v4=(<HTMLInputElement>document.getElementById('v4')).style.display="none"
    let v5=(<HTMLInputElement>document.getElementById('v5')).style.display="block"

    name = name.trim();
    surname = surname.trim();
    login = login.trim();
    role = role.trim();
    courses = courses.trim();
    email = email.trim();
    tel = tel.trim();
    if (!surname || !name || !login || !role || !courses || !email || !tel) { return; }
    this.service.addUsesr({ name, surname, login, role, courses, email, tel } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }
  
  

  edit(user: User):User{
    (<HTMLInputElement>document.getElementById('name')).value=user.name;
    (<HTMLInputElement>document.getElementById('surname')).value=user.surname;
    (<HTMLInputElement>document.getElementById('login')).value=user.login;
    (<HTMLInputElement>document.getElementById('role')).value=user.role;
    (<HTMLInputElement>document.getElementById('courses')).value=user.courses;
    (<HTMLInputElement>document.getElementById('email')).value=user.email;
    (<HTMLInputElement>document.getElementById('tel')).value=user.tel;

    ((<HTMLInputElement>document.getElementById('id1')).value)=String(user.id);
    let v1=(<HTMLInputElement>document.getElementById('v1')).style.display="block"
    let v4=(<HTMLInputElement>document.getElementById('v3')).style.display="block"
    let v5=(<HTMLInputElement>document.getElementById('v5')).style.display="none"
    
    console.log(user);
    return user;
   // console.log((<HTMLInputElement>document.getElementById('name')).value)

  }



}
