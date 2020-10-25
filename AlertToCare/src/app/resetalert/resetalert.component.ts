import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'resetalert-comp',
  templateUrl: './resetalert.component.html',
  styleUrls: ['./resetalert.component.css']
})
export class ResetalertComponent {

  constructor(private http:HttpClient) { }
  onSubmit(data){
    this.http.post('http://127.0.0.1:5000/resetPatientStatus',data)
    .subscribe((result)=>{
      alert(result);
    })
    console.warn(data);
    alert("alert reset")
  }
}
