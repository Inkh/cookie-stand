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

function generateSale(){
  var total = 0;
  var salesSheet = [this.location];
  for (var i = 0; i < 15;i++){
    var cookiesSold = Math.ceil(this.averageCustomerHourly() * this.averageCookieSale);
    salesSheet.push(cookiesSold);
    total += cookiesSold;
  }
  salesSheet.push(total);
  return salesSheet;
}

CookieShop.prototype.generateSale = generateSale;


// Creates basic table template.
var content = document.getElementById('main');
var table = document.createElement('table');

function tableCreate(){
  var dailyHours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Location Total'];
  content.append(table);
  var headerRow = document.createElement('tr');
  for(var j = 0;j < dailyHours.length; j++){
    var currHour = document.createElement('th');
    var text = document.createTextNode(dailyHours[j]);
    currHour.append(text);
    headerRow.append(currHour);
    table.append(headerRow);
  }
}

function displaySale(){
  var row = document.createElement('tr');
  for(var i = 0; i < this.generateSale().length;i++){
    var hourlySale = document.createElement('td');
    var text = document.createTextNode(this.generateSale()[i]);
    hourlySale.append(text);
    row.append(hourlySale);
    table.append(row);
  }
}

CookieShop.prototype.displaySale = displaySale;

var pikeShop = new CookieShop('1st and Pike', 6.3, 23, 87);
var seaShop = new CookieShop('SeaTac Airport', 1.2, 3, 24);
var seattleShop = new CookieShop('Seattle Center', 3.7, 11, 38);
var capitolShop = new CookieShop('Capitol Hill', 2.3, 20, 38);
var alkiShop = new CookieShop('Alki', 4.6, 2, 16);

tableCreate();
pikeShop.displaySale();
seaShop.displaySale();
seattleShop.displaySale();
capitolShop.displaySale();
alkiShop.displaySale();

var salmon = document.getElementById('salmon');
// salmon.style.transform = 'rotate(180deg)';

function moveSalmon(){
  var xPos = 0;
  var yPos = 0;
  setInterval(tick, 20);

  var xFlag = true;
  var yFlag = true;

  function tick(){
    if (yFlag){
      yPos++;
      if(yPos === 15){
        yFlag = false;
      }
    } else{
      if(yPos === -15){
        yFlag = true;
      }
      yPos--;
    }
    if (xFlag){
      xPos++;
      if(xPos === window.innerWidth - 170){
        xFlag = false;
      }
    } else{
      if(xPos === 0){
        xFlag = true;
      }
      xPos--;
    }
    salmon.style.left = xPos + 'px';
    salmon.style.top = yPos + 'px';
  }
}
console.log(window.innerWidth);
console.log(salmon.clientWidth);
moveSalmon();