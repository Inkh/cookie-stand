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



///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////SALES TABLE BLOCK//////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// Creates basic table template.
var content = document.getElementById('main');

// Creates title for the table
var salesTitle = document.createElement('h2');
salesTitle.textContent = 'Total Sales by hour and location';
content.append(salesTitle);

//Table Creation for sales
var table = document.createElement('table');

//Creates header row for sales table
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
  var list = this.generateSale();
  for(var i = 0; i < list.length;i++){
    var hourlySale = document.createElement('td');
    var text = document.createTextNode(list[i]);
    hourlySale.append(text);
    row.append(hourlySale);
    table.append(row);
  }
  return list;
}

CookieShop.prototype.displaySale = displaySale;

var pikeShop = new CookieShop('1st and Pike', 6.3, 23, 87);
var seaShop = new CookieShop('SeaTac Airport', 1.2, 3, 24);
var seattleShop = new CookieShop('Seattle Center', 3.7, 11, 38);
var capitolShop = new CookieShop('Capitol Hill', 2.3, 20, 38);
var alkiShop = new CookieShop('Alki', 4.6, 2, 16);

tableCreate();
pikeShop.currSale = pikeShop.displaySale();
seaShop.currSale = seaShop.displaySale();
seattleShop.currSale = seattleShop.displaySale();
capitolShop.currSale = capitolShop.displaySale();
alkiShop.currSale = alkiShop.displaySale();

//Array of generated lists
var salesListArray = ['Total', pikeShop.currSale, seaShop.currSale, seattleShop.currSale, capitolShop.currSale, alkiShop.currSale];

//Creates footer row for sales table
function tableFooter(){
  var row = document.createElement('tr');
  var footer = document.createElement('tfoot');
  footer.append(row);
  var totalList = [];
  for(var i = 1;i < salesListArray.length;i++){
    var total = 0;
    for(var k = 1;k < salesListArray[i].length;k++){
      console.log('hi');
      total += salesListArray[k][i];
    }
    totalList.push(total);
  }

  var hourlySale = document.createElement('td');
  hourlySale.textContent = total;
  return totalList;
}
tableFooter();

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////END SALES TABLE BLOCK////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////TOSSER TABLE BLOCK//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

//Creates array of required tossers per hour
function requiredTossers(){
  var tosserList = [this.location];
  var total = 0;
  for(var k = 1;k < this.currSale.length - 1;k++){
    var tosserCount = Math.ceil(this.currSale[k] / 20);
    tosserList.push(tosserCount);
    total += tosserCount;
  }
  tosserList.push(total);
  return tosserList;
}

CookieShop.prototype.requiredTossers = requiredTossers;

// Creates title for the tosser table
var tosserTitle = document.createElement('h2');
tosserTitle.textContent = 'Total number of tossers needed by the hour';
content.append(tosserTitle);

//Table Creation for sales
var tosserTable = document.createElement('table');

function tosserTableCreate(){
  var dailyHours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Tossers Required'];
  content.append(tosserTable);
  var headerRow = document.createElement('tr');
  for(var j = 0;j < dailyHours.length; j++){
    var currHour = document.createElement('th');
    var text = document.createTextNode(dailyHours[j]);
    currHour.append(text);
    headerRow.append(currHour);
    tosserTable.append(headerRow);
  }
}

tosserTableCreate();


function displayRoster(){
  var row = document.createElement('tr');
  for(var i = 0; i < this.requiredTossers().length;i++){
    var hourlyTosser = document.createElement('td');
    var text = document.createTextNode(this.requiredTossers()[i]);
    hourlyTosser.append(text);
    row.append(hourlyTosser);
    tosserTable.append(row);
  }
}

CookieShop.prototype.displayRoster = displayRoster;

pikeShop.displayRoster();
seaShop.displayRoster();
seattleShop.displayRoster();
capitolShop.displayRoster();
alkiShop.displayRoster();

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////END TOSSER TABLE BLOCK//////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////SALMON ANIMATION BLOCK/////////////////////////////////
var salmon = document.getElementById('salmon');

function moveSalmon(){
  var xPos = 0;
  var yPos = 0;
  setInterval(tick, 20);

  //Set boundary flags for X and Y coordinates
  var xFlag = true;
  var yFlag = true;

  //Function to move salmon across the page. Bounce salmon back when set boundaries are reached
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
      xPos += 3;
      if(xPos === window.innerWidth - 171){
        xFlag = false;
        salmon.src='img/salmonFlip.png';
      }
    } else{
      if(xPos === -3){
        xFlag = true;
        salmon.src='img/salmon.png';
      }
      xPos -= 3;
    }
    salmon.style.left = xPos + 'px';
    salmon.style.top = yPos + 'px';
  }
}

moveSalmon();
////////////////////////////////END SALMON ANIMATION BLOCK/////////////////////////////