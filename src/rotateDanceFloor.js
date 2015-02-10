  var counter = 0;
var rotateDanceFloor = function () {
  console.log('sad');
  var floors = ["url(img/lit.jpg)", "url(img/machu.jpg)"];
  if ( counter > floors.length - 1 ) {
    counter = 0;
  }
  var applyDanceFloor = {
    backgroundImage: floors[counter]
  };
  $('body').css(applyDanceFloor);
  counter++;
  // counter++;

};
