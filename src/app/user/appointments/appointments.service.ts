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
    confirmReschedule(obj:any,id:any){
      return this.http.put("http://localhost:3333/booking/"+id,obj);
    }
    cancelSchedule(id:any){
      return this.http.delete("http://localhost:3333/booking/"+id);
    }
}
