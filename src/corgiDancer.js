var MakeDogeDancer = function(top, left, timeBetweenSteps){
  MakeDogDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('corgi flip');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

MakeDogeDancer.prototype = Object.create(MakeDogDancer.prototype);
MakeDogeDancer.prototype.constructor = MakeDogeDancer;

MakeDogeDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};
