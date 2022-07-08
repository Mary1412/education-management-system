import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SomeDataService {
  data: number = 0
  role: string = ""
}