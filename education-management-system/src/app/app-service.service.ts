import { Cours } from './courses/cours';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor( private http:HttpClient) { }

  getData(){
    return this.http.get('/api/cours')
  }

  getCourses(): Observable<Cours[]> {
    return this.http.get<Cours[]>('/api/cours')
      
  }

  deleteCours(id: number): Observable<Cours> {
    const url = `/api/cours/${id}`;

    return this.http.delete<Cours>(url);
  }


  addCours(cours: Cours): Observable<Cours> {
    return this.http.post<Cours>('/api/cours', cours);
  }

  updateHero(cours: Cours): Observable<any> {
    return this.http.put('/api/cours', cours)
  }

}
