'use strict';

var content = document.getElementsByClassName('content')[0];

//Clear childNodes
function clearNode(){
  while (content.firstChild){
    content.removeChild(content.firstChild);
  }
}


// Grabs each li when clicked
var story = document.getElementsByClassName('story')[0];
var loc = document.getElementsByClassName('location')[0];
var merchandise = document.getElementsByClassName('merchandise')[0];
var sales = document.getElementsByClassName('sales')[0];


story.addEventListener('click', function(){
  content.innerHTML = 'Story';
});

sales.addEventListener('click', function(){
  window.location = 'sales.html';
});

loc.addEventListener('click', function(){

});

merchandise.addEventListener('click', function(){
  clearNode();
  cardCreation();
});


///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////PRODUCT CONSTRUCTION BLOCK/////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
var merchList = [];

function Merchandise(img, title, desc, price){
  this.img = img;
  this.title = title;
  this.desc = desc;
  this.price = price;
  merchList.push(this);
}

//Shirt
new Merchandise('img/shirt-01.png', 'Salmon Tee', 'Purchase a t-shirt and show your support to the hard working people that are environmentally aware! All proceeds help us maintain the high quality standards we uphold.', 'Add to Cart: $15');

//Cutter
new Merchandise('img/cutter.jpeg', 'Cookie Cutter', 'Want to make your own cookies that resemble our delicious and savory products? Grab one now for yourself!', 'Add to Cart: $5');

//Plush
new Merchandise('img/fish.jpg', 'Fish Plush Toys', 'Limited edition collection of cute little plush toys. Soft enough to use as an impromptu pillow. Tough enough to handle Huskies. Grab yours while supplies last!', 'Add to Cart: $35');

//Frozen fish
new Merchandise('img/chinook.png', 'Frozen Chinook Salmon', 'The King! What else more can be said? The Chinook Salmon is immediately frozen post capture to preserve freshness.', 'Add to Cart: $210');


/*

***************************************************************************************************
*****************************************Template for cards****************************************
***************************************************************************************************

<div class="card">
  <div class="card-image"></div>
  <div class="card-title">
    <h3>Salmon Tee</h3>
  </div>
  <div class="card-content">
    <p>Purchase a t-shirt and show your support to the hard working people that are environmentally aware! All proceeds help us maintain the high quality standards we uphold.</p>
  </div>
  <div class="card-button">
    <p>Add to Cart: $15</p>
  </div>
</div>
*/

function cardCreation(){
  for (var i = 0; i < merchList.length; i++){
    var cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    var cardImg = document.createElement('div');
    cardImg.className = 'card-image';
    cardImg.style.backgroundImage = `url(${merchList[i].img})`;
    console.log(`url(${merchList[i].img})`);
    cardDiv.append(cardImg);

    var cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    var titleText = document.createElement('h3');
    titleText.textContent = merchList[i].title;
    cardTitle.append(titleText);
    cardDiv.append(cardTitle);

    var cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    var contentText = document.createElement('p');
    contentText.textContent = merchList[i].desc;
    cardContent.append(contentText);
    cardDiv.append(cardContent);

    var cardButton = document.createElement('div');
    cardButton.className = 'card-button';
    var buttonText = document.createElement('p');
    buttonText.textContent = merchList[i].price;
    cardButton.append(buttonText);
    cardDiv.append(cardButton);

    content.append(cardDiv);
  }
}

// cardCreation();


///////////////////////////////////////////////////////////////////////////////////////
////////////////////////END PRODUCT CONSTRUCTION BLOCK/////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////SALMON ANIMATION BLOCK/////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
var salmon = document.getElementsByClassName('indexSalmon')[0];

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
      if(yPos >= window.innerHeight - 123){
        yFlag = false;
      }
    } else{
      if(yPos <= -10){
        yFlag = true;
      }
      yPos--;
    }
    if (xFlag){
      xPos += 3;
      if(xPos >= window.innerWidth - 394){
        xFlag = false;
        salmon.src='img/salmonFlip.png';
      }
    } else{
      if(xPos <= -3){
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

///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////END SALMON ANIMATION BLOCK/////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

















///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////ZOMBIE CODE, DO NOT USE////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

//Pending text
// var pending = document.getElementsByClassName('dots')[0];
// console.log(pending);

// var pendText = ['.', '. .', '. . .', ''];

// function stallUser(){
//   var i = 0;

//   setInterval(dynText, 500);

//   function dynText(){
//     if (i === pendText.length){
//       console.log('reset');
//       i = 0;
//     }
//     pending.innerHTML = pendText[i];
//     i++;
//     console.log(i);
//   }
// }

// stallUser();