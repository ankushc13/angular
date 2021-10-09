import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http:HttpClient) { }
    appointMents(id:any):Observable<any[]>{
      return this.http.get<any[]>("http://localhost:3333/users/booking/"+id);

    }

}
