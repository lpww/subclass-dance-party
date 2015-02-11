// Creates and retumns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer animated infinite"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.interact(top, left);
};

MakeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left, animated){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings;
  //console.log(top);

  if ( !animated ) {
    styleSettings = {
      top: top,
      left: left
    };
  } else {
    //some animation style
    styleSettings = {
      top: top,
      left: left
    };
  }

  this.$node.css(styleSettings);
};


MakeDancer.prototype.interact = function (top, left) {
  var dancers = window.dancers;
  for ( var i = 0; i < dancers.length - 1; i++ ) {
    // console.log(top);
    // console.log(left);
    var currentLeft = dancers[i].offsetLeft;
    var currentTop = dancers[i].offsetTop;
    var a = top - currentTop;
    var b = left - currentLeft;
    var proximity = Math.sqrt(a^2 + b^2);
    var newLeft;
    var newTop;
    if ( proximity < 25 ) {
      //this.$node.toggle('.zoomOut');
      if ( left < 50 ) {
        newLeft = left + Math.max(Math.random() * 50, 20);
      } else {
        newLeft = left - Math.max(Math.random() * 50, 20);
      }
      if(top < 50){
        newTop = top + Math.max(Math.random() * 50, 20);
      } else {
        newTop = top - Math.max(Math.random() * 50, 20);
      };
      dancers[i].setPosition(newTop, newLeft);
      dancers[i].$node.toggle('.zoomOut');
    }
  }
}

// MakeDancer.prototype.interact = function (top, left) {
//   var dancers = window.dancers;
//   // for ( var i = 0; i < dancers.length - 1; i++ ) {
//   $.each(dancers, function( index, value ) {
//       dancers[index]

//     });
//     // console.log(top);
//     // console.log(left);
//     var currentLeft = dancers[i].offsetLeft;
//     var currentTop = dancers[i].offsetTop;
//     var a = top - currentTop;
//     var b = left - currentLeft;
//     var proximity = Math.sqrt(a^2 + b^2);
//     var newLeft;
//     var newTop;
//     if ( proximity < 25 ) {
//       //this.$node.toggle('.zoomOut');
//       if ( left < 50 ) {
//         newLeft = left + Math.max(Math.random() * 50, 20);
//       } else {
//         newLeft = left - Math.max(Math.random() * 50, 20);
//       }
//       if(top < 50){
//         newTop = top + Math.max(Math.random() * 50, 20);
//       } else {
//         newTop = top + Math.max(Math.random() * 50, 20);
//       };
//   debugger;
//       this.$node[i].setPosition(newTop, newLeft);
//       this.$node[i].toggle('.zoomOut');
//     }
//   // }
// }
// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
