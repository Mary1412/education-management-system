import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SomeDataService {
  data: number = 0
  role: string = ""
  inv:number=1;
  users:string[]=[];


  name: string = ""
  plan: string[] = []
  auth: string = ""
  test:  string = ""
  users2:string[]=[];
}