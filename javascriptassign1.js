
    function CreateTable() {
        //Build an array containing Customer records.
        var personalinfo = new Array();
        personalinfo.push(["Name", "Age", "DOB", "Email", "Company"]);
        personalinfo.push(["Sonal", 21, "01-10-1999", "sonal.verma@geminisolutions.com", "Gemini Solutions"]);
        personalinfo.push(["Satish", 21 ,"13-05-19999", "satish.satish","GLA University"]);
        personalinfo.push(["Shivang", 13, "26-08-2008", "none","GNNPS"]);
        personalinfo.push(["Sonal", 21, "01-10-1999", "sonal.verma@geminisolutions.com", "Gemini Solutions"]);
        personalinfo.push(["Satish", 21 ,"13-05-19999", "satish.satish","GLA University"]);
 
        //Create a HTML Table element.
        var table = document.createElement("TABLE");
        table.border = "1";
 
        //Get the count of columns.
        var columnCount = personalinfo[0].length;
 
        //Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = personalinfo[0][i];
            row.appendChild(headerCell);
        }
 
        //Add the data rows.
        for (var i = 1; i < personalinfo.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = personalinfo[i][j];
            }
        }
 
        var Table = document.getElementById("Table");
        Table.innerHTML = "";
        Table.appendChild(table);
    }
