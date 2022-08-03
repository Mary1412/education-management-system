import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AppServiceService } from '../app-service.service';
import { Cours } from '../courses/cours';
import { SomeDataService } from '../some-data.service';

@Component({
  selector: 'app-dialog-for-forms',
  templateUrl: './dialog-for-forms.component.html',
  styleUrls: ['./dialog-for-forms.component.css']
})
export class DialogForFormsComponent implements OnInit {

  constructor(public service:AppServiceService,  public dialog1: MatDialog , private someSrv: SomeDataService) { }

  ngOnInit(): void {

    this.buttonAdd=this.someSrv.buttonAdd
    this.buttonEdit=this.someSrv.buttonEdit

   this.id2= this.someSrv.id2
   this.name2= this.someSrv.name2
    this.plan2=this.someSrv.plan2
  this.user2=  this.someSrv.user2
  this.test2=this.someSrv.test2
  }

  courses: Cours[] = [];
  id2=0
  name2=""
  plan2:string[]=[]
  user2:string[]=[]
  test2=""

  

  getCourses(){
    this.service.getCourses()
   .subscribe(courses => {this.courses=courses})
  }

  cControl=new FormGroup({
    nameFormControl : new FormControl('', [Validators.required]),
    planFormControl : new FormControl('', [Validators.required]),
    testFormControl : new FormControl('', [Validators.required])
  })

  
  save( name: string, plan1: string, test:string, user1:string): void {
    
    this.auth=String(localStorage.getItem('logForE')).split('"').join('');
    const id=this.someSrv.id2
    let plan = plan1.split(",");
    let user = user1.split(",");
    let auth = this.auth.trim();
    this.service.updateCours({ id, name, plan, auth, test, user}   as Cours)
    .subscribe();
   
    this.edited=0;
    this.someSrv.buttonEdit=0;
    this.roundtn=1;
    
this.getCourses();


  }

  edited=0;
  buttonEdit=0;
  buttonAdd=0;
  roundtn=1;

  auth=""

  savea(name: string, plan1: string, test: string, user1:string): void {


    this.auth=String(localStorage.getItem('logForE')).split('"').join('');

    name = name.trim();
    let plan = plan1.split(",");
    let user = user1.split(",");
    let auth = this.auth.trim();
    test = test.trim();
    if (!plan || !name || !test) { return; }
    this.service.addCours({ name, plan, auth, test, user } as Cours)
      .subscribe(cours => {
        this.courses.push(cours);
        this.getCourses();
      });
      this.edited=0;
      this.someSrv.buttonAdd=0;
      this.roundtn=1;
      
this.getCourses();
  }
}
