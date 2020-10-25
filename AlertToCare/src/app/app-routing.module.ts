import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import {HomeComponent} from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import {PatientdataComponent} from './patientdata/patientdata.component';
import {AlertstatusComponent} from './alertstatus/alertstatus.component';
import {ResetalertComponent} from './resetalert/resetalert.component';
import {DischargepatientComponent} from './dischargepatient/dischargepatient.component';

const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent , children:[
    {path:'configuration', component:ConfigurationComponent},
    {path:'patient', component:PatientComponent}
  ]},
  {path:'patientdata',component:PatientdataComponent},
  {path:'alertstatus',component:AlertstatusComponent},
  {path:'resetalert',component:ResetalertComponent},
  {path:'dischargepatient',component:DischargepatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
