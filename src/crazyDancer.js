
var makeCrazyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="crazy"></span>');
  this.setPosition(top, left);
};

makeCrazyDancer.prototype = Object.create(makeDancer.prototype);
makeCrazyDancer.prototype.constructor = makeCrazyDancer;
makeCrazyDancer.prototype.oldStep = makeCrazyDancer.prototype.step;

makeCrazyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle("slow");
  //setTimeout(this.step.bind(this), this.timeBetweenSteps * 5);
};



//===========================================================

