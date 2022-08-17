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

  buttonAdd=0
  buttonEdit=0

id2: any
 name2: string = "";
 plan2: string[] = [];
user2: string[] = [];
test2:string=""

  search:string=""
}