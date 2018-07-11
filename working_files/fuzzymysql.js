var FuzzyMatching = require('fuzzy-matching');

//npm packages
var mysql = require("mysql");

//connection string
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:  "root",
    password: "password",
    database: "data_cleansing"
});

//create connection
connection.connect(function(error){
    if (error) throw error;
    // console.log("connected as id "+ connection.threadId + "\n");

});

var description = 'retirement nursing';
var sqlQuery = "select occtype, occ_array_cleansed FROM data_cleansing.data_cleansed";

connection.query(sqlQuery, function (error, rows){

    if(error) throw error;

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
        
        //select the match with the greatest 
        if(distance > dist){
            dist = distance;
            chosenOcc = occType;
        }
    }
    console.log(chosenOcc, description, dist);

    //close the connection
    connection.end();

});