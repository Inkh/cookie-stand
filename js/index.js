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
  clearNode();
  storyCreation();
});

sales.addEventListener('click', function(){
  window.location = 'sales.html';
});

loc.addEventListener('click', function(){

});

merchandise.addEventListener('click', function(){
  clearNode();
  var ruler = document.createElement('div');
  ruler.className = 'ruler';
  var header = document.createElement('h1');
  header.textContent = 'Our current Merchandise. More to come soon!';
  content.append(header);
  content.append(ruler);
  cardCreation();
});


///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////SALMON SHOP STORY BLOCK////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

/*

***************************************************************************************************
*****************************************Template for Story****************************************
***************************************************************************************************

<div class="storyWrapper">
  <div class="storyText">
    <h3>Pat's Story</h3>
    <p>When Pat was a teenager, he thought of a genius idea by combining two signature Seattle icons: Develop a recipe for a coffee-time confection called Salmon Cookies. They're cookies made into the shape of a salmon, and actually made with salmon (though the fish is ground up so fine that you can't even taste it!) that is the ideal match for a steaming cup of coffee on a gray Seattle morning. Or gray Seattle afternoon... whatever. Ever since, tourists went gaga for them, and locals begrudgingly fell in love with them.</p>
  </div>
  <div class="storyText">
    <h3>Our Mission</h3>
    <p>At the time when Pat set up shop, he shared his vision with his team of providing clean, unprocessed food on the table for customers. Instead of following in the footstep of other sellers that farm salmon and dye them to an appealing color, the team focuses on what's more important: The ethics and taste. The team utilizes the income that would otherwise be used for food coloring to ensure that all their food is prepared in a clean environment.</p>
  </div>
  <div class="patPic"></div>
</div>
*/

function storyCreation(){
  var aboutDiv = document.createElement('div');
  aboutDiv.className = 'storyWrapper';

  var storyDiv = document.createElement('div');
  storyDiv.className = 'storyText';
  aboutDiv.append(storyDiv);

  var storyTitle = document.createElement('h3');
  storyTitle.textContent = 'Pat\'s Story';
  storyDiv.append(storyTitle);

  var storyText = document.createElement('p');
  storyText.textContent = 'When Pat was a teenager, he thought of a genius idea by combining two signature Seattle icons: Develop a recipe for a coffee-time confection called Salmon Cookies. They\'re cookies made into the shape of a salmon, and actually made with salmon (though the fish is ground up so fine that you can\'t even taste it!) that is the ideal match for a steaming cup of coffee on a gray Seattle morning. Or gray Seattle afternoon... whatever. Ever since, tourists went gaga for them, and locals begrudgingly fell in love with them';
  storyDiv.append(storyText);

  var missionDiv = document.createElement('div');
  missionDiv.className = 'storyText';
  aboutDiv.append(missionDiv);

  var missionTitle = document.createElement('h3');
  missionTitle.textContent = 'Our Mission';
  missionDiv.append(missionTitle);

  var missionText = document.createElement('p');
  missionText.textContent = 'At the time when Pat set up shop, he shared his vision with his team of providing clean, unprocessed food on the table for customers. Instead of following in the footstep of other sellers that farm salmon and dye them to an appealing color, the team focuses on what\'s more important: The ethics and taste. The team utilizes the income that would otherwise be used for food coloring to ensure that all their food is prepared in a clean environment.';
  missionDiv.append(missionText);

  var aboutImage = document.createElement('div');
  aboutImage.className = 'patPic';
  aboutDiv.append(aboutImage);

  content.append(aboutDiv);
}


storyCreation();






///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////END SALMON SHOP STORY BLOCK////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////






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

var escapeTick = 0;
function moveSalmon(){
  salmon.addEventListener('mouseover', function(){
    salmon.src = 'img/salmon.png';
    var fishEscape = setInterval(escape, 1);
    function escape(){
      if(escapeTick === 200){
        clearInterval(fishEscape);
        escapeTick = 0;
      }
      xPos += 2;
      yPos += 1;
      salmon.style.left = xPos + 'px';
      salmon.style.top = yPos + 'px';
      escapeTick++;

    }
  });

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
      if(xPos >= window.innerWidth - 62){
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