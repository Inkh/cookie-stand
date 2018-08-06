'use strict';

console.log('linked');

function randomCustomer(){
  return Math.floor(Math.random() * (this.maxCustomerHourly - this.minCustomerHourly)) + this.minCustomerHourly;
}

var pikeShop = {
  location: '1st and Pike',
  avgCookieSale: 6.3,
  minCustomerHourly: 23,
  maxCustomerHourly: 87,
  averageCustomerHourly: randomCustomer,
  generateSale: generateSale
};

var seaShop = {
  location: 'SeaTac Airport',
  avgCookieSale: 1.2,
  minCustomerHourly: 3,
  maxCustomerHourly: 24,
  averageCustomerHourly: randomCustomer,
  generateSale: generateSale
};

var seattleShop = {
  location: 'Seattle Center',
  avgCookieSale: 3.7,
  minCustomerHourly: 11,
  maxCustomerHourly: 38,
  averageCustomerHourly: randomCustomer,
  generateSale: generateSale
};

var capitolShop = {
  location: 'Capitol Hill',
  avgCookieSale: 2.3,
  minCustomerHourly: 20,
  maxCustomerHourly: 38,
  averageCustomerHourly: randomCustomer,
  generateSale: generateSale
};

var alkiShop = {
  location: 'Alki',
  avgCookieSale: 4.6,
  minCustomerHourly: 2,
  maxCustomerHourly: 16,
  averageCustomerHourly: randomCustomer,
  generateSale: generateSale
};

document.getElementById('test').textContent = pikeShop.generateSale();

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
