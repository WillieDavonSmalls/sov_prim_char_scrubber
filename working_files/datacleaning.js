var occupancy = " ; 1120 Cherry St. ; 19300 Hamilton Ave. ; 2 Shircliff Way ; 3940 Fourth Ave. 140  150 ; 400 N. Beach St. Ft. Worth Tx ; 4071 18Th St. ; 45 Melville Park Rd, ; 515 Bellport Ave. Healthcare Center ; 5417 Whittier Blvd ; 6735 Yucca St. 411 ; 766A Lakeland Dr. ; 8281 Goodwood Blvd. ; Building ; Case Mgmt, Public Health, Admin. ; Clinic ; Clinic And Pharmacy ; Clinic And Pharmacy Drop Off Site ; Clinic Pharmacy ; Dental Clinic ; Disease Mgmt Office ; Healthcare Center ; Healthcare Center And Pharmacy ; LRO -- Eye Doctor  Primary Care Medical Office  ; Medical Clinic-B122  Office B125 ; Medical Office ; Medical Office  Research ; Medical Research And Admin Offoce ; OTC ; Outpatient Clinic ; Outpatient Medical Care ; Outpatient Medical Clinic ; Pharmacy  Clinic ; Primary Care Clinic ; Research ; Thrift Store  Healthcare Center ; Thrift Store/Hiv Testing Site";
// var occupancy; 
var rake = require('node-rake');
var occupancy = rake.generate(occupancy);

console.log(occupancy);



var newOccupancy = [];
var array = [];
var a;
var b; 
var address = '/^[0-9].*$/';


// function onlyUnique(value, index, self) { 
//     return self.indexOf(value) === index;
// }

// function cleanseDescription(occupancy){

    for (var i = 0; i < occupancy.length; i++){
        //split up array based on the ; 
        newOccupancy = occupancy[i].split(';');//switch between comma and ; 
        
        for(var j = 0; j < newOccupancy.length; j++){
    
                //remove addresses
                a = newOccupancy[j].trim().match(address);
                console.log(a);
                b = newOccupancy[j].trim();      
                if(!a && b.length > 3){
                    array.push(b);
                }   
        }   
    }
// }
// cleanseDescription(occupancy);
// console.log(array);
 

 
// const sql = require("msnodesqlv8");
 
// const connectionString = "server=CULTRMSSQ01;Database=Master;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
// const query = "select rms_occscheme, rms_occtype, rms_desc from [data_cleansing].[dbo].[raw_data_occ_desc] where rms_desc is not null and rms_occtype is not null ";
    
// sql.query(connectionString, query, (err, rows) => {
//     console.log(rows[0].rms_occscheme);
//     console.log(rows[0].rms_occtype);
//     var occ = rows[0].rms_desc; 
//     rake.generate(occ);
//     console.log(occ);
//     cleanseDescription(occupancy);
//     // console.log(newOccupancy);
// });

