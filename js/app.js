'use strict';

console.log('linked');

//Generates random customer visited by the hour.
function randomCustomer(){
  return Math.floor(Math.random() * (this.maxCustomerHourly - this.minCustomerHourly)) + this.minCustomerHourly;
}

//Cookie sale generation by the hour.
function generateSale(){
  var total = 0;
  var salesSheet = [];
  var hour = 6;
  for (var i = 0; i < 15;i++){
    var cookiesSold = Math.ceil(this.averageCustomerHourly() * this.avgCookieSale);
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

var pikeShop = {
  location: '1st and Pike',
  avgCookieSale: 6.3,
  minCustomerHourly: 23,
  maxCustomerHourly: 87,
  averageCustomerHourly: randomCustomer,
  generateSale: generateSale,
  dailySale: displaySale
};

var seaShop = {
  location: 'SeaTac Airport',
  avgCookieSale: 1.2,
  minCustomerHourly: 3,
  maxCustomerHourly: 24,
  averageCustomerHourly: randomCustomer,
  generateSale: generateSale,
  dailySale: displaySale
};

var seattleShop = {
  location: 'Seattle Center',
  avgCookieSale: 3.7,
  minCustomerHourly: 11,
  maxCustomerHourly: 38,
  averageCustomerHourly: randomCustomer,
  generateSale: generateSale,
  dailySale: displaySale
};

var capitolShop = {
  location: 'Capitol Hill',
  avgCookieSale: 2.3,
  minCustomerHourly: 20,
  maxCustomerHourly: 38,
  averageCustomerHourly: randomCustomer,
  generateSale: generateSale,
  dailySale: displaySale
};

var alkiShop = {
  location: 'Alki',
  avgCookieSale: 4.6,
  minCustomerHourly: 2,
  maxCustomerHourly: 16,
  averageCustomerHourly: randomCustomer,
  generateSale: generateSale,
  dailySale: displaySale
};

pikeShop.dailySale();
seaShop.dailySale();
seattleShop.dailySale();
capitolShop.dailySale();
alkiShop.dailySale();
