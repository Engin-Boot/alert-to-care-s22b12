import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { PatientComponent } from './patient/patient.component';
import { FormsModule } from '@angular/forms';
import { PatientdataComponent } from './patientdata/patientdata.component';
import { AlertstatusComponent } from './alertstatus/alertstatus.component';
import { ResetalertComponent } from './resetalert/resetalert.component';
import { DischargepatientComponent } from './dischargepatient/dischargepatient.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigurationComponent,
    PatientComponent,
    PatientdataComponent,
    AlertstatusComponent,
    ResetalertComponent,
    DischargepatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
