import { Component, OnInit } from '@angular/core';
import { CoachhomeService } from './coachhome.service';

@Component({
  selector: 'app-coachhome',
  templateUrl: './coachhome.component.html',
  styleUrls: ['./coachhome.component.css']
})
export class CoachhomeComponent implements OnInit {
  id!:number;
  schedulesDetail!:any[]
  constructor(private coachhomeService:CoachhomeService){}
  ngOnInit() {
    this.id=parseInt(sessionStorage.getItem("loggedUser") || '0');
    this.schedules();
  }
  schedules(){
    this.schedulesDetail=[]
    this.coachhomeService.schedules(this.id).subscribe(res=>{
      this.schedulesDetail=res;
      console.log(this.schedulesDetail);
    }
    );
  }

}
