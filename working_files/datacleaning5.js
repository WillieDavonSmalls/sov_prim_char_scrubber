var rake = require('node-rake');
var occupancy;
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
//2,

const sql = require("msnodesqlv8");
 
const connectionString = "server=CULTRMSSQ01;Database=Master;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "select rms_occscheme, rms_occtype, rms_desc from [data_cleansing].[dbo].[raw_data_occ_desc] where rms_desc is not null and rms_occtype is not null";


sql.query(connectionString, query, (err, rows) => {
    for(var r = 0; r <rows.length; r++){
        var occscheme;
        var occtype;
        var desc; 
        
        array = [];
        occscheme = rows[r].rms_occscheme;
        occtype = rows[r].rms_occtype;

        console.log(occscheme);
        console.log(occtype);
        var occ = rows[r].rms_desc; 
        rake.generate(occ);
        cleanData(occ);
        console.log(array);
        console.log("insert into [data_cleansing].[dbo].[raw_data_atc_desc_clean]([rms_occscheme], [rms_occtype], [rms_desc]) VALUES('" + occscheme + "','" + occtype + "','" + array + "')");

        var query2 = "insert into [data_cleansing].[dbo].[raw_data_atc_desc_clean]([rms_occscheme], [rms_occtype], [rms_desc]) VALUES('" + occscheme + "','" + occtype + "','" + array + "')";
        sql.query(connectionString, query2, (err, rows) => {
        });

    }

});

