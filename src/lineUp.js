var lineUp = function () {
  var dancers = window.dancers;
  var left;
  var top = 45;
  var x = ['10%', '72%'];
  var topDecrementer = 10/(dancers.length/2);

  for (var i = 0; i < dancers.length; i++) {
    if ( i % 2 === 0 ) {
      left = x[0];
    } else {
      left = x[1];
    }
    dancers[i].setPosition("'" + top + "%'",left);
    top = Math.round(top + (topDecrementer/2)) ;
  }
  //loop through the dancers array from init
    //call setPoisition with animcation and xy coordinates for each dancer
}
