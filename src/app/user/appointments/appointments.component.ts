import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppointmentsService } from './appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  id!:number;
  appoints!:any[]
  constructor(private appointmentsService:AppointmentsService) {  }
  ngOnInit(){
    this.id=parseInt(sessionStorage.getItem("loggedUser") || '0');
    this.appointMents();
 }
 appointMents(){
  this.appoints=[];
  this.appointmentsService.appointMents(this.id).subscribe(res=>{
    this.appoints=res;
    console.log(this.appoints);
  }
  );

 }
}

function dateCalculator(fc: FormControl) {

}
