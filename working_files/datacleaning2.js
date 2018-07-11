var rake = require('node-rake');

var occupancy = " ; 1120 Cherry St. ; 19300 Hamilton Ave. ; 2 Shircliff Way ; 3940 Fourth Ave. 140  150 ; 400 N. Beach St. Ft. Worth Tx ; 4071 18Th St. ; 45 Melville Park Rd, ; 515 Bellport Ave. Healthcare Center ; 5417 Whittier Blvd ; 6735 Yucca St. 411 ; 766A Lakeland Dr. ; 8281 Goodwood Blvd. ; Building ; Case Mgmt, Public Health, Admin. ; Clinic ; Clinic And Pharmacy ; Clinic And Pharmacy Drop Off Site ; Clinic Pharmacy ; Dental Clinic ; Disease Mgmt Office ; Healthcare Center ; Healthcare Center And Pharmacy ; LRO -- Eye Doctor  Primary Care Medical Office  ; Medical Clinic-B122  Office B125 ; Medical Office ; Medical Office  Research ; Medical Research And Admin Offoce ; OTC ; Outpatient Clinic ; Outpatient Medical Care ; Outpatient Medical Clinic ; Pharmacy  Clinic ; Primary Care Clinic ; Research ; Thrift Store  Healthcare Center ; Thrift Store/Hiv Testing Site";

var array = [];


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function cleanData(occupancy){
    var a;
    var b; 
    var address = /^[0-9].*$/i;
    var newOcc = [];

    occupancy = rake.generate(occupancy);
    for (var i = 0; i < occupancy.length; i++){
        //split up array based on the ; 
        newOcc = occupancy[i].split(';');
        
        for(var j = 0; j < newOcc.length; j++){
    
                //remove addresses
                a = newOcc[j].trim().match(address);
                b = newOcc[j].trim();       
                if(!a && b.length > 2){
                    array.push(b);
                }   
        }   
    }
    
    array = array.filter(onlyUnique);

}

cleanData(occupancy);

console.log(array);

