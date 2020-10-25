import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'config-comp',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {
  constructor(private http:HttpClient){

  }
  onSubmit(data){
    this.http.post('http://127.0.0.1:5000/addBeds',data)
    .subscribe((result)=>{
      alert(result);
    })
    alert("Bed Added")
    console.warn(data);
  }

}
