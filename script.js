let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
var tax = document.getElementById("tax")
var outputTax = document.getElementById("outputTax")
var taxPercent = document.getElementById("taxPercent")
var outputTotal = document.getElementById("outputTotal")
var amount = document.getElementById("amountIn")
var taxValOut = document.getElementById("taxValue")
var ltdk = document.getElementById('ltdk')
var textColor
// function getScreenMode() {
//   if (ltdk.value=="dark") {
//     textColor="white"
//     document.body.style.backgroundColor="black"
    
//   } else {
//     document.body.style.backgroundColor="white"
//     textColor="black"
//   }
//   taxValOut.style.color = textColor
// taxPercent.style.color = textColor
// tax.style.color = textColor
// taxValOut.style.color = textColor
// taxPercent.style.color = textColor
// tax.style.color = textColor
// }
function convertAmt(price) {
  return USDollar.format(price)
}
setInterval(function() {
  // getScreenMode()
  
  var amountVal = amount.value
  amountVal = Number(amountVal)
  
  taxAmt = tax.value
  var taxVal = taxAmt / 100 * amountVal
  outputTax.innerHTML = convertAmt(taxVal)
  var total = convertAmt(amountVal + taxVal)
  outputTotal.innerText = total
  taxPercent.innerText = taxAmt + "%"
  var taxValOut = document.getElementById("taxValue")
  taxValOut.innerText=tax.value+"%"
}, 1)
