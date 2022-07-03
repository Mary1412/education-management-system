
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { DialogInvComponent } from '../dialog-inv/dialog-inv.component';
import { Cours } from './cours';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Cours[] = [];


  role:string=""
  auth:string=""
  roleForUsers:string=""
  authForUsers:string=""
  uCours:string="";

  dialog: any;

  now:Date=new Date();

  cControl=new FormGroup({
    name : new FormControl('', [Validators.required]),
    plan : new FormControl('', [Validators.required]),
    test : new FormControl('', [Validators.required])
  })
 

  constructor(private service:AppServiceService,  public dialog1: MatDialog ) { }

  ngOnInit(): void {
    this.role=String(localStorage.getItem('roleForE')).split('"').join('');
    this.auth=String(localStorage.getItem('logForE')).split('"').join('');
    this.uCours=String(localStorage.getItem('uCours')).split('"').join('');

    let v11=(<HTMLInputElement>document.getElementById('test')).value;
    

   

    
   

    if (this.role=="admin" || this.role=="rootadmin"){
      (<HTMLInputElement>document.getElementById('vv33')).style.display="block";
      (<HTMLInputElement>document.getElementById('v2')).style.display="block";
      this.uCours="";
      
    }
    if (this.role=="user"){
      (<HTMLInputElement>document.getElementById('v2')).style.display="none";
      (<HTMLInputElement>document.getElementById('vv33')).style.display="none";
      this.uCours=String(localStorage.getItem('uCours')).split('"').join('');
      
      
    }
    if (this.role=="manager"){
      (<HTMLInputElement>document.getElementById('v2')).style.display="block";
      (<HTMLInputElement>document.getElementById('vv33')).style.display="block";
      this.uCours="";
      
      this.roleForUsers=String(localStorage.getItem('roleForE')).split('"').join('');
      this.authForUsers=String(localStorage.getItem('logForE')).split('"').join('');
    }

    




this.getCourses();
  }



  invite(cours: Cours):void{
    let dr=this.dialog1.open(DialogInvComponent);
    const idc = JSON.stringify(cours.id)
    localStorage.setItem('idc', idc)

    dr.afterClosed().subscribe((result: any) => {
     })
    }
       
      

 
  getCourses(): void {
 
    this.auth=String(localStorage.getItem('logForE')).split('"').join('');
    
    this.now= new Date();
    this.service.getCourses()
    .subscribe(courses => {

      this.courses= courses;
    for( let i=0; i<this.courses.length; i++){

        if (Math.ceil( ((new Date(this.courses[i].test).getTime())-this.now.getTime())/ (1000 * 3600 * 24))<5 && Math.ceil( ((new Date(this.courses[i].test).getTime())-this.now.getTime())/ (1000 * 3600 * 24))>0){
        alert("You have a test" ) ;
        break;      
      }
      }

    });



  }

  delete(cours: Cours): void {
    this.courses = this.courses.filter(c => c !== cours);
    this.service.deleteCours(cours.id).subscribe();
  }

  
  add(): void {
   let v1=(<HTMLInputElement>document.getElementById('v1')).style.display="block"
   let v2=(<HTMLInputElement>document.getElementById('v2')).style.display="none"
   let v4=(<HTMLInputElement>document.getElementById('v4')).style.display="block"
  
  }


  save(id1:string, name: string, plan: string, test:string): void {
    
    let v1=(<HTMLInputElement>document.getElementById('v1')).style.display="none"
    let v3=(<HTMLInputElement>document.getElementById('v3')).style.display="none"
    let v5=(<HTMLInputElement>document.getElementById('v5')).style.display="block"
    const id=Number(id1);
    this.service.updateHero({ id, name, plan, test }  as Cours)
    .subscribe();
    this.getCourses();
  }


  savea(name: string, plan: string, test: string): void {
    let v1=(<HTMLInputElement>document.getElementById('v1')).style.display="none"
    let v2=(<HTMLInputElement>document.getElementById('v2')).style.display="block"
    let v4=(<HTMLInputElement>document.getElementById('v4')).style.display="none"
    let v5=(<HTMLInputElement>document.getElementById('v5')).style.display="block"

    this.auth=String(localStorage.getItem('logForE')).split('"').join('');

    name = name.trim();
    plan = plan.trim();
    let auth = this.auth.trim();
    test = test.trim();
    if (!plan || !name || !test) { return; }
    this.service.addCours({ name, plan, auth, test } as Cours)
      .subscribe(cours => {
        this.courses.push(cours);
      });
  }
  
  

  edit(cours: Cours):Cours{
    (<HTMLInputElement>document.getElementById('name')).value=cours.name;
    (<HTMLInputElement>document.getElementById('plan')).value=cours.plan;
    (<HTMLInputElement>document.getElementById('test')).value=cours.test;
    ((<HTMLInputElement>document.getElementById('id1')).value)=String(cours.id);
    let v1=(<HTMLInputElement>document.getElementById('v1')).style.display="block"
    let v4=(<HTMLInputElement>document.getElementById('v3')).style.display="block"
    let v5=(<HTMLInputElement>document.getElementById('v5')).style.display="none"
    
    
    return cours;
  

  }



}
