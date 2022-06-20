var number_1=Number(document.getElementById("input1id").value);
function calculate(){
    number_1= Number(document.getElementById("input1id").value);
    var area= number_1 * number_1;
    var perimeter= 4* number_1;
    document.getElementById("label_area").innerHTML=area
 document.getElementById("label_perimeter").innerHTML=perimeter
}
