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

var description = 'pre-cast';
var sqlQuery = "SELECT bldgscheme, bldgclass, bldgdesc FROM data_cleansing.construction";

connection.query(sqlQuery, function (error, rows){

    if(error) throw error;

    var chosenBldg = 0; var distBldg = 0;
    for(var i = 0; i < rows.length; i++){
        
        //construction scheme
        var bldgscheme = rows[i].bldgscheme;
        //construction class
        var bldgclass = rows[i].bldgclass;
        //split the descriptions into an array 
        var bldgArray = rows[i].bldgdesc.split(',');
        
        //select a match from each occupancy time
        var fmBldg = new FuzzyMatching(bldgArray);
        fmOutputBldg = fmBldg.get(description);
        distanceBldg = fmOutputBldg.distance;
        
        //select the match with the greatest 
        if(distanceBldg > distBldg){
            distBldg = distanceBldg;
            chosenBldgScheme = bldgscheme; 
            chosenBldg = bldgclass;
        }
    }
    console.log(chosenBldgScheme, chosenBldg, description, distanceBldg);

    //close the connection
    connection.end();

});