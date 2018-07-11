// const sql = require("msnodesqlv8");

// const connectionString = "server=CULTRMSSQ01;Database=Master;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
// const query = "SELECT TOP (1000) [stories_desc],[rms_numstories] FROM [data_cleansing].[dbo].[numstories] where stories_desc is not null";

// const rmvParen = /\([^()]*\)/g; 
// const extVal = /([0-9]*\.[0-9]+|[0-9]+)/gm; 



// sql.query(connectionString, query, (err, rows) => {
//     for(var i = 0; i < rows.length; i++){
//         var desc2 = rows[i].stories_desc.replace(rmvParen,'').match(extVal) ;
//         var coded = rows[i].rms_numstories;
        
        
//         if (desc2 === null){
//             desc2 = 0;
//         } else{
//             desc2 = Math.round(Math.max(...desc2),0);

//             if(desc2>160){
//                 desc2 = 0; 
//             }
//         }

//         console.log(desc2, ' ', coded);

//     }
// });

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

console.log(getNumstories('35 - 34 +45B (2234) (100)'));

// var rmvParen = /\([^()]*\)/g; 
// var extVal = /([0-9]*\.[0-9]+|[0-9]+)/gm;
// var a = '3b'.replace(rmvParen,'').match(extVal); 
// console.log(Math.round(Math.max(...a)));

