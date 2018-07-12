//npm packages
const FuzzyMatching = require('fuzzy-matching');
const mysql = require("mysql");
const config = require('config')

const sqlQuery = "select occtype, occ_array_cleansed FROM occupancy";

const sqlQueryBldg = "SELECT bldgscheme, bldgclass, bldgdesc FROM construction;";

//yearbuit function 
var yearBuilt; 

function getYearBuilt(yearBuilt){
    var d = new Date; 
    var currentYr = d.getFullYear(); 

    var rmvParen = /\([^()]*\)/g; 
    var extVal = /([0-9]*\.[0-9]+|[0-9]+)/gm;
    
    
    if (yearBuilt == null || yearBuilt == ''){
        yearBuilt = 9999; 
    } 
    else{
    
        yearBuilt = yearBuilt.replace(rmvParen,'').match(extVal);
        yearBuilt = Math.round(Math.min(...yearBuilt),0);

        if (yearBuilt > currentYr + 10){
            yearBuilt = 9999;
        } else if (yearBuilt > currentYr && yearBuilt <= currentYr + 10){
            yearBuilt = currentYr;
        } else if (yearBuilt >= 1740 && yearBuilt <= 1753){
            yearBuilt = 1753;
        } else if (yearBuilt < 1740){
            yearBuilt = 9999;
        } else {
            yearBuilt = yearBuilt;
        }

    }

    yearBuilt = '01/01/' + yearBuilt;
    return (yearBuilt); 
}

//numstories function
var numstories;

function getNumstories(numstories){
    var rmvParen = /\([^()]*\)/g; 
    var extVal = /([0-9]*\.[0-9]+|[0-9]+)/gm;

    numstories = numstories.replace(rmvParen,'').match(extVal);

    if (numstories === null){
        numstories = 0;
    } 
    
    else if (numstories.isInteger){
        if(numstories>110){
            numstories = 0; 
        }
    }

    else{
        numstories = Math.round(Math.max(...numstories),0);

        if(numstories>110){
            numstories = 0; 
        }
    }
    
    return(numstories);
}



function search(locations, callback) {
    //connection string
    var connection;
    
    if (process.env.JAWSDB_URL){
        connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else{
        connection = mysql.createConnection(config.mysql);
    }
        

    // console.log(locations);

    //create connection
    connection.connect(function(error) {
        if (error) callback(error, null); // Callback with error and no results

        //execution of occupancy query
        connection.query(sqlQuery, function (error, rows) {
            if(error) callback(error, null);

            //execution of construction query
            connection.query(sqlQueryBldg, function (error, rowsBldg){
                if(error) callback(error, null);

                connection.end();
            
        
                var chosenOcc = 0;
                var distance = 0;
                var rankedLocations = [];
        
                for (var j = 0; j < locations.length; j++) {
                    var accountNum = locations[j][0];
                    var locNum = locations[j][1]; 
                    var description = locations[j][2];
                    var con_desc = locations[j][3];
                    var numstories_desc = locations[j][4];
                    var yearbuilt_desc = locations[j][5];

                    // console.log(j, accountNum, locNum, description, con_desc, numstories_desc, yearbuilt_desc);

        
                    //occupancy mapping
                    for (var i = 0; i < rows.length; i++) {
                        //extract the occupancy type
                        var occType = rows[i].occtype;
                        //split the descriptions into an array 
                        var occArray = rows[i].occ_array_cleansed.split(',');
                        
                        //select a match from each occupancy time
                        const fm = new FuzzyMatching(occArray);
                        const fmOutput = fm.get(description);
                        const actualDistance = fmOutput.distance;
                        
                        //select the match with the greatest 
                        if (actualDistance > distance) {
                            distance = actualDistance;
                            chosenOcc = occType;
                        }

                        var chosenBldg = 0; var distBldg = 0;
                        for(var k = 0; k < rowsBldg.length; k++){
                            
                            //construction scheme
                            var bldgscheme = rowsBldg[k].bldgscheme;
                            //construction class
                            var bldgclass = rowsBldg[k].bldgclass;
                            //split the descriptions into an array 
                            var bldgArray = rowsBldg[k].bldgdesc.split(',');
                            
                            //select a match from each occupancy time
                            var fmBldg = new FuzzyMatching(bldgArray);
                            fmOutputBldg = fmBldg.get(con_desc);
                            distanceBldg = fmOutputBldg.distance;
                            
                            //select the match with the greatest 
                            if(distanceBldg > distBldg){
                                distBldg = distanceBldg;
                                chosenBldgScheme = bldgscheme; 
                                chosenBldg = bldgclass;
                            }

                        }

                    
                        //yearbuilt mapping
                        yearBuilt = getYearBuilt(yearbuilt_desc);

                        //numstories mapping
                        numstories = getNumstories(numstories_desc);
                    
                    }

                    distance = distance.toFixed(4);
                    distBldg = distBldg.toFixed(4);
                    
                    rankedLocations.push({
                        accountNum,
                        locNum,
                        chosenOcc,
                        description,
                        distance,
                        yearBuilt, 
                        numstories,
                        chosenBldgScheme,
                        chosenBldg,
                        distBldg

                    });
                // console.log(rankedLocations);
                }

                callback(null, rankedLocations);
            });
        })
    });
}

module.exports = {
    search
};