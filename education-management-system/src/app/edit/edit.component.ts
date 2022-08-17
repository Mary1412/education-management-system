import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SomeDataService } from '../some-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: Router,private someSrv: SomeDataService,) { }

  ngOnInit(): void {
    location.reload() 
    this.someSrv.data = 1
    this.router.navigate(['/courses']);

  }

}
