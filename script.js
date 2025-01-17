let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
function convertAmt(price){
return USDollar.format(price)
}
setInterval(function(){
var outputTax = document.getElementById("outputTax")
var outputTotal = document.getElementById("outputTotal")
var amount = document.getElementById("amountIn")
var amountVal = amount.value
amountVal=Number(amountVal)
var tax = document.getElementById("tax")
taxAmt = tax.value
var taxVal=convertAmt(taxAmt/100*amountVal)
outputTax.innerHTML=taxVal
outputTotal.innerText=amountVal+taxVal
},1)