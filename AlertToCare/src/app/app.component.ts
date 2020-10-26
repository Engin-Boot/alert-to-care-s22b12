import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AlertToCare';
  constructor(private router:Router) { }
  
  navigateToHome()
  {
  this.router.navigate(['/home'])
  }
  navigateToPatientData(){
    this.router.navigate(['/patientdata'])
  }
  navigateToDischarge(){
    this.router.navigate(['/dischargepatient'])
  }
  navigateToAlert(){
    this.router.navigate(['/alertstatus'])
  }
  navigateToResetAlert(){
    this.router.navigate(['/resetalert'])
  }
}
