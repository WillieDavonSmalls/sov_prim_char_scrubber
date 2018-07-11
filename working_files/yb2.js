

    

    function getYearBuilt(yearBuilt){
        var d = new Date; 
        var currentYr = d.getFullYear(); 
        var yearBuilt;

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
        console.log(yearBuilt);
    }
    
    getYearBuilt("1970, 1998, 2001, 2011");