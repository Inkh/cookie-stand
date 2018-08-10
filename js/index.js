'use strict';

// Grabs each li when clicked
var story = document.getElementsByClassName('story')[0];
var loc = document.getElementsByClassName('location')[0];
var merchandise = document.getElementsByClassName('merchandise')[0];
var sales = document.getElementsByClassName('sales')[0];
var content = document.getElementsByClassName('content')[0];

story.addEventListener('click', function(){
  content.innerHTML = 'Story';
});

sales.addEventListener('click', function(){
  window.location = 'sales.html';
});

loc.addEventListener('click', function(){

});

merchandise.addEventListener('click', function(){

});

///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////SALMON ANIMATION BLOCK/////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
var salmon = document.getElementsByClassName('indexSalmon')[0];
console.log(salmon);

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

//Pending text
var pending = document.getElementsByClassName('dots')[0];
console.log(pending);

var pendText = ['.', '. .', '. . .', ''];

function stallUser(){
  var i = 0;

  setInterval(dynText, 500);

  function dynText(){
    if (i === pendText.length){
      console.log('reset');
      i = 0;
    }
    pending.innerHTML = pendText[i];
    i++;
    console.log(i);
  }
}

stallUser();