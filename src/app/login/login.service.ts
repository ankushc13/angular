import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private http:HttpClient) { }

  login(data:any,url:string):Observable<any>{
    return this.http.post<any>(url,data).pipe(map(res=>{
      if(!res){
        throw new Error('Invalid');
      }
      else{
        return res;
      }
    }));
  }

}
