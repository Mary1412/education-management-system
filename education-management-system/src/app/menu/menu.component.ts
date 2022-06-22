import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  role:string="";

  ngOnInit(): void {
    this.role=String(localStorage.getItem('roleForE')).split('"').join('');
    if (this.role=="admin"){
      (<HTMLInputElement>document.getElementById('v22')).style.display="inline";
    }
    if (this.role=="user"){
      (<HTMLInputElement>document.getElementById('v22')).style.display="none";
    }
    if (this.role=="manager"){
      (<HTMLInputElement>document.getElementById('v22')).style.display="none";
    }

   

    
  }

}
