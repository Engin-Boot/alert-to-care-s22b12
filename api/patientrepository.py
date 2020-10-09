from beds import Beds
from bedsrepository import BedsRepositry
class patientrepositry:
	PatientList=[];

	def addPatient(patient):
		bedID=BedsRepositry.checkVacantBed();

		if bedID==-1:
			print("No Vacant Bed");
			return;

		else:
			print(bedID+"is now occupied by"+ patient.name);
			#BedsRepositry.fillBed(bedID)
			patient.bedid=bedID;
			patientrepositry.PatientList.append(patient);
			return;

	def checkSPO(spo2):
		spo2value=int(spo2);
		if spo2value>95 :
			return True;
		elif spo2value<95:
			return False;
		else:
			return False

	def checkheartbeat(heartbeat):
		heartbeatvalue=int(heartbeat);
		if heartbeatvalue>100:
			return False
		elif heartbeatvalue<60:
			return False
		else:
			return True

	def checkBP(bloodpressure):
		bloodpressurevalue=int(bloodpressure);
		if bloodpressurevalue<80:
			return False
		elif bloodpressurevalue>120:
			return False
		else:
			return True

	def patientCheckVitals():

		for patient in patientrepositry.PatientList:
			if patientrepositry.checkheartbeat(patient.heartbeat) and patientrepositry.checkBP(patient.bp) and patientrepositry.checkSPO(patient.spo2):
				print("Patient is OK on bed number"+patient.bedid);
			else:
				print("Check patient on bed number"+patient.bedid);

	def removePatient(i,status,id):
		List=patientrepositry.PatientList;
		if status==True:

			List.remove(List[i])
			patientrepositry.PatientList=List;
			BedsRepositry.emptyBed(id)
			print("Patient is discharged");
		else:
			print("Bed is not occupied by any patient");

	def dischargePatient(id):
		i=0
		status=False;
		for patient in patientrepositry.PatientList:
			if patient.bedid==id:
				status=True;
				break;
			else:
				i+=1;
		patientrepositry.removePatient(i,status,id);
