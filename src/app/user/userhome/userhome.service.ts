import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserhomeService {

  constructor(private http:HttpClient) { }

  allcoaches():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3333/coaches/all");
  }
  confirmAppointment(obj:any,id:any,cId:any):Observable<any>{
    return this.http.post("http://localhost:3333/booking/users/"+id+'/booking/'+cId,obj)
  }
}
