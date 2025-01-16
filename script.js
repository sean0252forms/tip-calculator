setInterval(function(){
var output = document.getElementById("output")
var amount = document.getElementById("amountIn")
var amountVal = amount.value
amountVal=Number(amountVal)
var tax = document.getElementById("tax")
taxAmt = tax.value
output.innerHTML=taxAmt/100*amountVal

},1)