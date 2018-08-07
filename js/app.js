'use strict';

console.log('linked');

//Constructor method for Cookie Shop
function CookieShop(location, averageCookieSale, minCustomerHourly,maxCustomerHourly){
  this.location = location;
  this.averageCookieSale = averageCookieSale;
  this.minCustomerHourly = minCustomerHourly;
  this.maxCustomerHourly = maxCustomerHourly;
}

//Generates random customer visited by the hour.
function randomCustomer(){
  return Math.floor(Math.random() * (this.maxCustomerHourly - this.minCustomerHourly)) + this.minCustomerHourly;
}

CookieShop.prototype.averageCustomerHourly = randomCustomer;

//Cookie sale generation by the hour.
function generateSale(){
  var total = 0;
  var salesSheet = [];
  var hour = 6;
  for (var i = 0; i < 15;i++){
    var cookiesSold = Math.ceil(this.averageCustomerHourly() * this.averageCookieSale);
    if (hour < 12){
      salesSheet.push(`${hour}am: ${cookiesSold}`);
    } else{
      if (hour === 12){
        salesSheet.push(`${hour}pm: ${cookiesSold}`);
      } else{
        salesSheet.push(`${hour - 12}pm: ${cookiesSold}`);
      }
    }
    total += cookiesSold;
    hour++;
  }
  salesSheet.push(`Total: ${total}`);
  return salesSheet;
}

CookieShop.prototype.generateSale = generateSale;

//Displays a list of sales by the hour
function displaySale(){
  var content = document.getElementById('main');
  var ul = document.createElement('ul');
  var header = document.createElement('h2');
  var headerText = document.createTextNode(this.location);
  header.append(headerText);
  content.append(header);
  for(var i = 0;i < this.generateSale().length;i++){
    var hourlySale = document.createElement('li');
    var text = document.createTextNode(this.generateSale()[i]);
    hourlySale.append(text);
    ul.append(hourlySale);
    content.append(ul);
  }
}

CookieShop.prototype.displaySale = displaySale;

var pikeShop = new CookieShop('1st and Pike', 6.3, 23, 87);
var seaShop = new CookieShop('SeaTac Airport', 1.2, 3, 24);
var seattleShop = new CookieShop('Seattle Center', 3.7, 11, 38);
var capitolShop = new CookieShop('Capitol Hill', 2.3, 20, 38);
var alkiShop = new CookieShop('Alki', 4.6, 2, 16);

pikeShop.displaySale();
seaShop.displaySale();
seattleShop.displaySale();
capitolShop.displaySale();
alkiShop.displaySale();
