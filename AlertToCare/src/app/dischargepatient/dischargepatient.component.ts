import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'dischargepatient-comp',
  templateUrl: './dischargepatient.component.html',
  styleUrls: ['./dischargepatient.component.css']
})
export class DischargepatientComponent  {

  constructor(private http:HttpClient) { }
  onSubmit(data){
    this.http.post('http://127.0.0.1:5000/dischargePatient',data)
    .subscribe((result)=>{
      alert(result);
    })
    console.warn(data);
    alert("Patient discharged")
  }

}
