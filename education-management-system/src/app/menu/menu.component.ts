import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SomeDataService } from '../some-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  strsearch=""

  @Output() valueChanged = new EventEmitter<string>();

  setnewstrsearch(newstrsearch: string) {
    this.valueChanged.emit(this.strsearch);
  }

  constructor(private someSrv: SomeDataService) { }

  role:string="";
  login="";

  ngOnInit(): void {
    this.role=this.someSrv.role;
    this.login=String(localStorage.getItem('logForE')).split('"').join('');


   

    
  }

}
