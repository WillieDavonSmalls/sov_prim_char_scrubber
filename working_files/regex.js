
//var regex = /\d+/g;

var regex = /[-+]?\d*\.\d+|\d+/g; 
//console.log("3 + 3B".match(regex));

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

var sqlQuery = "SELECT stories_desc, rms_numstories  FROM data_cleansing.numstories";

connection.query(sqlQuery, function (error, rows){

    if(error) throw error;

    for(var i = 0; i<rows.length; i++){
        var desc = rows[i].stories_desc;
        var coding = rows[i].rms_numstories;
        console.log(desc,);
        console.log(desc.match(regex));
        console.log(coding);
    }



    //close the connection
    connection.end();

});