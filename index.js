
function Add() {
        var bill = document.getElementById("inpu1").value;
        var option1 = document.getElementById("exp").value;
        var totalp  = document.getElementById("inpu2").value;
        if(bill == "" || option1 == "" || totalp == "")
        {
            window.alert("Please fill all fields");
        }
        else{
                var text = "<section style='display:flex; flex-direction:column;align-items:center;'> <h4 style='padding:0%; margin:0%;'>TIP AMOUNT</h4>";
                if(option1 == "Good")
                {
                    var am = ((bill/100)*10)/totalp;
                text +="<label><sup>$</sup>"+am.toFixed(2)+" each</label>";
                }
                if(option1 == "Poor")
                {
                    var am = ((bill/100)*0)/totalp;
                text +="<label><sup>$</sup>"+am.toFixed(2)+" each</label>";
                }

                if(option1 == "Outstanding")
                {
                    var amt = ((bill/100)*30)/totalp;
                text +="<label><sup>$</sup>"+amt.toFixed(2)+" each</label>";

                }
                text +="</section>";
                console.log(text,option1);
                document.getElementById("output").innerHTML = text ;
            }
}
