var defjson = {"#mvcvmac": 1, "#NRLSouthsStorm": 2, "#QandA": 3, "Josh Addo": 4, "#MasterChefAU": 5, "The Fox": 6, "Benji": 7, "Munster": 8, "Bunnies": 9, "joon": 10};

var jsonText = JSON.stringify(defjson);

function gtabel(json){
    for(var i = 0; i < json.length ; i++){
        var td_id = document.createElement("td");
        var text_id = document.createTextNode(i+1);
        td_id.appendChild(text_id);
        //create tr
        var tr = document.createElement("tr");
        tr.appendChild(td_id);
        tr.appendChild(td_a);
        //get table
        var table = document.getElementsByTagName("table")[0];
        table.appendChild(tr);
    }
    
}