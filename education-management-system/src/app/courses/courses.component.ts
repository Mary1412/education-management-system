
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { DialogInvComponent } from '../dialog-inv/dialog-inv.component';
import { Cours } from './cours';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SomeDataService } from '../some-data.service';
import { BehaviorSubject, Observable } from 'rxjs';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


    courses: Cours[] = [];
    pageSlice: Cours[] = [];
  pageSlice2$!: Observable<Cours[]>;
  len=0;


  role:string=""
  auth:string=""
  roleForUsers:string=""
  authForUsers:string=""
  uCours:string="";

  strsearch="";

  


  dialog: any;

  now:Date=new Date();

  cControl=new FormGroup({
    name : new FormControl('', [Validators.required]),
    plan : new FormControl('', [Validators.required]),
    test : new FormControl('', [Validators.required])
  })
 

  constructor(public service:AppServiceService,  public dialog1: MatDialog , private someSrv: SomeDataService) { }
  

 

 

  OnPageChange(event: PageEvent){
    console.log(event);
    const startIndex = event.pageIndex*event.pageSize;
    let endIndex=startIndex+event.pageSize;
    if(endIndex>this.courses.length){
        endIndex=this.courses.length;
    }
    this.pageSlice=this.courses.slice(startIndex, endIndex);
  }


  
 

  ngOnInit(): void {

 //setTimeout(loading, 1000);

    this.auth=String(localStorage.getItem('logForE')).split('"').join('');
    this.uCours=String(localStorage.getItem('uCours')).split('"').join('');

    this.role=this.someSrv.role;

   
    

    this.service.getCourses()
   .subscribe(courses => this.pageSlice=courses.slice(0,3) );
   

    
   

    if (this.role=="admin" || this.role=="rootadmin"){

      this.uCours="";
      
    }
    if (this.role=="user"){

      this.uCours=String(localStorage.getItem('uCours')).split('"').join('');
      
      
    }
    if (this.role=="manager"){

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

      this.len=this.courses.length;
    for( let i=0; i<this.courses.length; i++){

        if (Math.ceil( ((new Date(this.courses[i].test).getTime())-this.now.getTime())/ (1000 * 3600 * 24))<5 && Math.ceil( ((new Date(this.courses[i].test).getTime())-this.now.getTime())/ (1000 * 3600 * 24))>0){
      //  alert("You have a test" ) ;
        break;      
      }
      }

    });


    this.service.getCourses()
   .subscribe(courses => this.pageSlice=courses.slice(0,3) );

   

  }


  delete(cours: Cours): void {
    let dr=this.dialog1.open(DialogDeleteComponent);
    dr.afterClosed().subscribe((result: any) => {
 if(result){
    this.courses = this.courses.filter(c => c !== cours);
    this.service.deleteCours(cours.id).subscribe();
this.getCourses();

   } })
   
   

  }

  
  add(): void {


   this.edited=1;
   this.buttonAdd=1;
   this.roundtn=0;
  
  }
  save(id1:string, name: string, plan: string, test:string): void {
    
 
    const id=Number(id1);
    this.service.updateHero({ id, name, plan, test }  as Cours)
    .subscribe();
    this.getCourses();
    this.edited=0;
    this.buttonEdit=0;
    this.roundtn=1;
    
this.getCourses();


  }

  edited=0;
  buttonEdit=0;
  buttonAdd=0;
  roundtn=1;

  savea(name: string, plan: string, test: string): void {


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
      this.edited=0;
      this.buttonAdd=0;
      this.roundtn=1;
      
this.getCourses();
  }
  
  

  edit(cours: Cours):Cours{
  /* (<HTMLInputElement>document.getElementById('name')).value=cours.name;
    (<HTMLInputElement>document.getElementById('plan')).value=cours.plan;
    (<HTMLInputElement>document.getElementById('test')).value=cours.test;
    ((<HTMLInputElement>document.getElementById('id1')).value)=String(cours.id);*/
  
    this.edited=1;
    this.buttonEdit=1;
    this.roundtn=0;
    
    return cours;
  

  }

    displayedColumns: string[] = [ 'name', 'plan', 'test', 'menu'];


}


