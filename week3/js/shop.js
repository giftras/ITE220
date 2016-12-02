var customerName = "Raviporn";
var price = 10;
var quantity = 2;
var totalPrice = price * quantity;

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;
var customerPrice = document.getElementById("total");
customerPrice.textContent = totalPrice;