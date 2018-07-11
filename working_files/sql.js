const sql = require("msnodesqlv8");
 
const connectionString = "server=CULTRMSSQ01;Database=Master;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT [occtype], [occ_desc], [occ_array], [occ_array_cleansed] FROM [data_cleansing].[dbo].[rms_occ_codes_1]";


sql.query(connectionString, query, (err, rows) => {
    for(var i = 0; i < rows.length; i++){
        console.log(rows[i].occtype);
        console.log(rows[i].occ_desc);
        console.log(rows[i].occ_array_cleansed.split(','));
    }
});