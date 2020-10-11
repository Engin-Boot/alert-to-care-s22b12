from beds import Beds

class BedsRepositry:
    BedsList=[]

    message=""



    def addBeds(self,numberofbeds):
        if int(numberofbeds)<100:
            message=numberofbeds +" "+"beds are added"
            for i in range(1,int(numberofbeds)):
                bed =Beds(True,str(i))
                BedsRepositry.BedsList.append(bed)
        else:
            message="Total Capacity is less as compared to need of beds"

        return message

    def checkVacantBed(self):
        for beds in BedsRepositry.BedsList:
            if beds.vacant==True:
                beds.vacant=False
                return beds.id
        return -1

    def emptyBed(self,id):
        for beds in BedsRepositry.BedsList:
            if beds.id==id:
                beds.vacant=True
