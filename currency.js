function op12() {

    var a= parseFloat( document.getElementById('amt').value);
    console.log(a);

    var b = document.getElementById('opt1').value;
    console.log(b);

    var c = document.getElementById('opt2').value;
    console.log(c);
    
    

    switch (b) {
        case "EURO": {
            if (c=="EURO") {
               var d = a;  
               var e = " EURO (1:1)";          
            }
            else if (c=="USD") {
               var d= a*1.04;
               var e = " USD (1.04:1)";
            }
            else if (c=="CAD") {
               var d = a*1.34;
               var e = " CAD (1.34:1)";
            }
            else if (c == "BTC") {
                var  d = a*.000054;
                var e = " BTC (0.000054:1)";
            }
            else {
                var d = a*.00100;
                var e = " ETH (0.00100:1)";
            }
        }
            
            break;
        
        case "USD": {
            if (c=="EURO") {
                var d = a*.96;          
                var e = " EURO (0.96:1)";  
             }
             else if (c=="USD") {
                var d= a;
                var e = " USD (1:1)";
             }
             else if (c=="CAD") {
                var d = a*1.29;
                var e = " CAD (1.29:1)";
             }
             else if (c == "BTC") {
                 var  d = a *.000052;
                 var e = " BTC (0.000052:1)";
             }
             else {
                 var d = a*.00096;
                 var e = " ETH (0.00096:1)";
             }
        }
            
            break;
    
        case "CAD":{
            if (c=="EURO") {
                var d = a*.74;           
                var e = " EURO (0.74:1)"; 
             }
             else if (c=="USD") {
                var d= a*.78;
                var e = " USD (0.78:1)";
             }
             else if (c=="CAD") {
                var d = a;
                var e = " CAD (1:1)";
             }
             else if (c == "BTC") {
                 var  d = a*.000040;
                 var e = " BTC (0.000040:1)";
             }
             else {
                 var d = a*.00074;
                 var e = " ETH (0.00074:1)";
             }
        }
            
            break;
        
        case "BTC": {
            if (c=="EURO") {
                var d = a*18370;         
                var e = " EURO (18370:1)";   
             }
             else if (c=="USD") {
                var d= a*19157.35;
                var e = " USD (19157.35:1)";
             }
             else if (c=="CAD") {
                var d = a*24694.61;
                var e = " CAD (24694.61:1)";
             }
             else if (c == "BTC") {
                 var  d = a;
                 var e = " BTC (1:1)";
             }
             else {
                 var d = 18.34*a;
                 var e = " ETH (18.34:1)";
             }
        }
            
            break;        
    
        case "ETH": {
            if (c=="EURO") {
                var d = a*1000.53;     
                var e = " EURO (1000.53:1)";       
             }
             else if (c=="USD") {
                var d= a*1043.26;
                var e = " USD (1043.26:1)";
             }
             else if (c=="CAD") {
                var d = a*1344.80;
                var e = " CAD (1344.80:1)";
             }
             else if (c == "BTC") {
                 var  d = a*.0545;
                 var e = " BTC (0.0545:1)";
             }
             else {
                 var d = a;
                 var e = " ETH (1:1)";
             }
        }
            
            break;    
   
         default:
            break;
    }

   
        document.getElementById("result").value = d.toFixed(2) + e;

}