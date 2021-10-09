import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachhomeService {

  constructor(private http:HttpClient) {}

  schedules(id:any):Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3333/coaches/booking/"+id);
  }
}

