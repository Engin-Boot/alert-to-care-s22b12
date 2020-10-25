import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'patientdata-comp',
  templateUrl: './patientdata.component.html',
  styleUrls: ['./patientdata.component.css']
})
export class PatientdataComponent {
  constructor(private http:HttpClient){

  }
  onSubmit(data){
    this.http.post('http://127.0.0.1:5000/patient',data)
    .subscribe((result)=>{
      alert(result);
    })
    console.warn(data);
    alert("patient data saved")
  }

}
