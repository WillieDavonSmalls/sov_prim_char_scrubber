const sql = require("msnodesqlv8");
var FuzzyMatching = require('fuzzy-matching');

const connectionString = "server=CULTRMSSQ01;Database=Master;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT [occtype], [occ_desc], [occ_array], [occ_array_cleansed] FROM [data_cleansing].[dbo].[rms_occ_codes_1]";

var description = 'retirement nursing';

sql.query(connectionString, query, (err, rows) => {
    var chosenOcc = 0; var dist = 0;
    for(var i = 0; i < rows.length; i++){
        
        //extract the occupancy type
        var occType = rows[i].occtype;

        //split the descriptions into an array 
        var occArray = rows[i].occ_array_cleansed.split(',');
        
        //select a match from each occupancy time
        var fm = new FuzzyMatching(occArray);
        fmOutput = fm.get(description);
        distance = fmOutput.distance;

        // console.log(fmOutput.distance, fmOutput.value);
        // console.log(occType, distance);
        
        //select the match with the greatest 
        if(distance > dist){
            dist = distance;
            chosenOcc = occType;
        }
    }
    console.log(chosenOcc, description, dist);
});