
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
import { DialogForFormsComponent } from '../dialog-for-forms/dialog-for-forms.component';



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
  lenU=0;

  id2=0
  name2=""
  plan2:string[]=[]
  user2:string[]=[]
  test2=""

  showU:Cours[] | any= [] ;


  role:string=""
  auth:string=""
  roleForUsers:string=""
  authForUsers:string=""
  uCours:string="";

  strsearch="";

  


  dialog: any;

  now:Date=new Date();

  edited=0;
  buttonEdit=0;
  buttonAdd=0;
  roundtn=1;


 

  constructor(public service:AppServiceService,  public dialog1: MatDialog , private someSrv: SomeDataService) { }
  

 

 

  OnPageChange(event: PageEvent){
    console.log(event);
    const startIndex = event.pageIndex*event.pageSize;
    let endIndex=startIndex+event.pageSize;
    if(endIndex>this.courses.length){
        endIndex=this.courses.length;
    }
    this.pageSlice=this.courses.slice(startIndex, endIndex);
    this.showU=this.courses.filter(item => item.user.find(item2 => item2 == this.auth) ).slice(startIndex, endIndex);
  }


  
 

  ngOnInit(): void {
    this.someSrv.data = 0

    this.auth=String(localStorage.getItem('logForE')).split('"').join('');
    this.uCours=String(localStorage.getItem('uCours')).split('"').join('');

    this.role=this.someSrv.role;

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

    this.someSrv.inv=cours.id;
    this.someSrv.users2=cours.user;
    this.someSrv.plan=cours.plan;
    this.someSrv.test=cours.test;
    this.someSrv.auth=cours.auth;
    this.someSrv.name=cours.name;
  
    dr.afterClosed().subscribe((result: any) => {
     })
    }
       
     m1=0
    

 
  getCourses(): void {
    this.auth=String(localStorage.getItem('logForE')).split('"').join(''); 
    this.now= new Date();
    this.service.getCourses()
    .subscribe(courses => {
      this.courses= courses;
      console.log("c ", courses)
      this.len=this.courses.length; 
    for( let i=0; i<this.courses.length; i++){
        if (Math.ceil( ((new Date(this.courses[i].test).getTime())-this.now.getTime())/ (1000 * 3600 * 24))<5 && Math.ceil( ((new Date(this.courses[i].test).getTime())-this.now.getTime())/ (1000 * 3600 * 24))>0){
        break;      
      }
      }
    });
    this.service.getCourses()
   .subscribe(courses => {this.pageSlice=courses.slice(0,3) 
    for( let i=0; i<this.pageSlice.length; i++){

      if (Math.ceil( ((new Date(this.pageSlice[i].test).getTime())-this.now.getTime())/ (1000 * 3600 * 24))<5 && Math.ceil( ((new Date(this.pageSlice[i].test).getTime())-this.now.getTime())/ (1000 * 3600 * 24))>0){
   this.m1=1
      break;      
    }
    }
  });

   this.service.getCourses()
   .subscribe(courses => {this.showU=courses.filter(item => item.user.find(item2 => item2 == this.auth) ).slice(0,3)
    for( let i=0; i<this.showU.length; i++){

      if (Math.ceil( ((new Date(this.showU[i].test).getTime())-this.now.getTime())/ (1000 * 3600 * 24))<5 && Math.ceil( ((new Date(this.showU[i].test).getTime())-this.now.getTime())/ (1000 * 3600 * 24))>0){
   this.m1=1
      break;      
      }
    }
    this.lenU=this.showU.length;
  });
  }


  delete(cours: Cours): void {
    let dr=this.dialog1.open(DialogDeleteComponent);
    dr.afterClosed().subscribe((result: any) => {
 if(result){
    this.courses = this.courses.filter(c => c !== cours);
   
    this.service.deleteCours(cours._id).subscribe();
    this.someSrv.data = 1

   } })
  }

  
  add(): void {
   let dr=this.dialog1.open(DialogForFormsComponent);
    dr.afterClosed().subscribe((result: any) => {
     })
     this.someSrv.buttonAdd=1
  }


  edit(cours: Cours):Cours{
    this.someSrv.buttonEdit=1
    let dr=this.dialog1.open(DialogForFormsComponent);
    dr.afterClosed().subscribe((result: any) => {
     })
    this.someSrv.id2=cours._id;
    this.someSrv.name2=cours.name;
    this.someSrv.plan2=cours.plan;
    this.someSrv.user2=cours.user;
    this.someSrv.test2=cours.test;
    return cours;
  }

    displayedColumns: string[] = [ 'name', 'plan', 'test', 'menu'];


}


