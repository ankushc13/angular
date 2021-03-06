import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http:HttpClient) { }
  viewDetail(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:3333/users/"+id);
  }
}
