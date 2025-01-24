let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function convertAmt(price) {
  return USDollar.format(price)
}
setInterval(function() {
  var outputTax = document.getElementById("outputTax")
  var taxPercent = document.getElementById("taxPercent")
  var outputTotal = document.getElementById("outputTotal")
  var amount = document.getElementById("amountIn")
  var amountVal = amount.value
  amountVal = Number(amountVal)
  var tax = document.getElementById("tax")
  taxAmt = tax.value
  var taxVal = taxAmt / 100 * amountVal
  outputTax.innerHTML = convertAmt(taxVal)
  var total = convertAmt(amountVal + taxVal)
  outputTotal.innerText = total
  taxPercent.innerText = taxAmt + "%"
  var taxValOut = document.getElementById("taxValue")
  taxValOut.innerText=tax.value+"%"
}, 1)
