import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'alertstatus-comp',
  templateUrl: './alertstatus.component.html',
  styleUrls: ['./alertstatus.component.css']
})
export class AlertstatusComponent {
  constructor(private http:HttpClient) { }
  
  getAlert(){
    this.http.get('http://127.0.0.1:5000/alertonpatientstatus')
    .subscribe(
      (data:any[]) => {
        alert(data);
      }
    )
  }  
}
