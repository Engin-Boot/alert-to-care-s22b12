import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'patient-comp',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
  patientData(){
    this.route.navigate(['patientdata']);
  }

  onDischarge(){
    this.route.navigate(['dischargepatient']);
  }

  onStatus(){
    this.route.navigate(['alertstatus']);
  }

  onReset(){
    this.route.navigate(['resetalert']);
  }

}
