import { Cours } from './courses/cours';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  public isLoading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(true);

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

  updateCours(cours: Cours): Observable<any> {
    const url = '/api/cours';

    return this.http.put(url, cours)
  }


  
  
















  getUsesr(): Observable<User[]> {
    return this.http.get<User[]>('/api/users')
      
  }

  deleteUsesr(id: number): Observable<User> {
    const url = `/api/users/${id}`;

    return this.http.delete<User>(url);
  }


  addUsesr(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put('/api/users', user)
  }

}
