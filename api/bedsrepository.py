from beds import Beds

class BedsRepositry:
    BedsList=[];
    for i in range(1,13):
        bed =Beds(True,str(i));
        BedsList.append(bed);

    def checkVacantBed():

        for beds in BedsRepositry.BedsList:
            if beds.vacant==True:
                beds.vacant=False;
                return beds.id
        return -1

    def emptyBed(id):
        for beds in BedsRepositry.BedsList:
            if beds.id==id:
                beds.vacant=False;
