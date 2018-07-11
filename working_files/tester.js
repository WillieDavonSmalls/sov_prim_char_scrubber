var rake = require('node-rake');

var occupancy = "Animals ; Athletics ; Auditorium ; Auditorium Arena ; Auditorium Convention Center ; Auto Service Center ; Bath House  Pool ; Bird Blind ; Branch Library ; City Hall ; City Service Ctr ; Classroom ; Community Center ; Control Tower ; Court House ; Display Cabin ; Display Offices ; Education Facility ; Educationl Staff ; Equipment  Personnel ; Equipment Enclosure ; Equipment Enclosure  Offices ; Equipment Storage ; Fire fighters ; Fire Services ; Fire Station ; Firemen  Truck ; Fish Hatchery ; food court ; Fuel Island ; Fuel Station island ; General Offices ; Guard Shack ; H2O Pump Station ; Hangar ; Hangar  Classroom ; Heliport ; keypad ; Lab offices ; Leased Office Space ; Library ; Museum ; Museum  theater ; NonDwelling ; None  Display Cabin ; None  Park Shelter ; None  Shelter only ; None Park Shelter ; Nonhazardous Waste Collection site ; NPO ; Office ; Office  Equipment ; Office  metal Shop ; Office Space ; Offices ; Offices  rec facility ; Offices  Equipment ; Offices  Snack Bar ; Outdoor Structure ; Outdoor Water Park ; Park  Bath House ; Park Shelter ; Parrots ; Pavillion ; Performance studio ; Playground ; Police Administration Offices ; Police Station ; Police Storefront ; Police substation ; Power Plant ; Public Library ; Pump Equipment Enclosure ; Pump Station ; Recreational Activities ; Residence ; Response Supplies ; Restroom ; Restrooms ; Riding Arena ; Shelter ; Solid waste dropoff ; Spalsh Pad ; Special events ; Storage ; Storage Bldg ; Storage Shed  Equipment ; Storage Tanks ; Theater ; Theater arts ; Unoccupied ; Wash Site ; Waste Water Trx Ops ; Wate Water Trx Ops ; Water Treatment Plant ; Water Trx Ops ; Water Trx Pumping Op ; zoo ; zoo animals";

var array = [];


// occupancy = rake.generate(occupancy);

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

