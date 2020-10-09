import flask

from patients import Patient
from patientrepository import patientrepositry
from bedsrepository import BedsRepositry

from flask import jsonify

from flask import request

app = flask.Flask(__name__)

app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"

@app.route('/addBeds',methods=['POST'])
def addBedsRepository():
    numberofbeds=request.json['numberofbeds'];
    message=BedsRepositry.addBeds(numberofbeds)
    return jsonify(message);


@app.route('/patient',methods=['POST'])
def patiententry():
    name=request.json['name']
    age=request.json['age']
    patientdetails=Patient(name,age);
    message=patientrepositry.addPatient(patientdetails);
    return jsonify(message)

@app.route('/alertonpatientstatus',methods=['GET'])
def alertonpatientstatus():
    message=patientrepositry.patientCheckVitals()
    return jsonify(message)

@app.route('/dischargePatient',methods=['POST'])
def dischargePatient():
    bedid=request.json['bedid']
    message=patientrepositry.dischargePatient(bedid);
    return jsonify(message);

app.run()
