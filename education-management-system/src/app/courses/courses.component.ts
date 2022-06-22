import { emitDistinctChangesOnlyDefaultValue, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Cours } from './cours';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Cours[] = [];
  role1:string=""
 

  constructor(private service:AppServiceService ) { }

  ngOnInit(): void {
    this.role1=String(localStorage.getItem('roleForE')).split('"').join('');
    console.log(this.role1+" 4")
   
/*
    if (this.role=="admin"){
      (<HTMLInputElement>document.getElementById('v22')).style.display="inline";
    }
    if (this.role=="user"){
      (<HTMLInputElement>document.getElementById('v22')).style.display="none";
    }
    if (this.role=="manager"){
      (<HTMLInputElement>document.getElementById('v22')).style.display="none";
    }*/

    



this.getDataFromAPI();
this.getCourses();
  }

  getDataFromAPI(){
      this.service.getData().subscribe((response)=>{
        console.log('Response from API is ',response)
      },(error)=>{
        console.log('Error',error);
       } ) 
  }

  getCourses(): void {
    this.service.getCourses()
    .subscribe(courses => this.courses = courses);
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

    name = name.trim();
    plan = plan.trim();
    test = test.trim();
    if (!plan || !name || !test) { return; }
    this.service.addCours({ name, plan, test } as Cours)
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
    
    console.log(cours);
    return cours;
   // console.log((<HTMLInputElement>document.getElementById('name')).value)

  }



}
