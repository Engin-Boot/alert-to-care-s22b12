import flask

from patients import Patient
from patientrepository import patientrepositry
from flask import request

app = flask.Flask(__name__)

app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"

@app.route('/newpatientdetails',methods=['POST'])
def patiententry():
    name=request.json['name']
    age=request.json['age']
    bedid=request.json['bedid']
    spo2=request.json['spo2']
    bp=request.json['bp']
    heartbeat=request.json['heartbeat']
    patientdetails=Patient(name,age,bedid,spo2,bp,heartbeat);
    patientrepositry.addPatient(patientdetails);

    return "Patient is added"

@app.route('/checkallpatientvitals',methods=['GET'])
def checkvitals():
    patientrepositry.patientCheckVitals()

    return "Nothing for now"

@app.route('/dischargePatient',methods=['GET'])
def dischargePatient():
    patientrepositry.dischargePatient("1");

    return "Dischargin patient"



app.run()
