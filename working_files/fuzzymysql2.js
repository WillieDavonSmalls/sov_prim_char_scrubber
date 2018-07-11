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

var descriptionArray = [['Wall World',1,'barber'],['Wall World',2,'nursing home'],['Wall World',3,'warehouse']];
var sqlQuery = "select occtype, occ_array_cleansed FROM data_cleansing.data_cleansed";


connection.query(sqlQuery, function (error, rows){

    if(error) throw error;

    var chosenOcc = 0; var dist = 0;
    var accountNum;
    var locNum;
    var description;

    for (var j = 0; j < descriptionArray.length; j++){

        accountNum = descriptionArray[j][0];
        locNum = descriptionArray[j][1]; 
        description = descriptionArray[j][2];

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
        console.log(accountNum, locNum, chosenOcc, description, dist);
        var sqlInsert = `insert into location(accountNum, locnum, chosenOcc, description, ranking) 
        VALUES('${accountNum}', ${locNum}, '${chosenOcc}', '${description}', ${dist});`
        console.log(sqlInsert);

        connection.query(sqlInsert, function (error, rows){

            if(error) throw error;
        
        });
    }

    //close the connection
    connection.end();

});