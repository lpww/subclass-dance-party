var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky bounce');

  // border-radius: 10px;)

  var styleSettings = {
    border: '10px solid green'
  };
  $('.blinky').mouseover(function(){
    $(this).css(styleSettings);
  });
  // this.$node.css(styleSettings);
  // this.$node.mouseover(this.css(styleSettings))
  // this.$node.mouseover(this.css({border: '10px solid green'}));

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

//  this.oldStep = this.step.bind(this);
// MakeBlinkyDancer.prototype.oldStep = MakeBlinkyDancer.prototype.step;

MakeBlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};
