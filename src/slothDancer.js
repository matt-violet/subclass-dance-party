
var makeSlothDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="sloth"></span>');
  this.setPosition(top, left);
};

makeSlothDancer.prototype = Object.create(makeDancer.prototype);
makeSlothDancer.prototype.constructor = makeSlothDancer;
makeSlothDancer.prototype.oldStep = makeSlothDancer.prototype.step;

makeSlothDancer.prototype.step = function () {
  this.oldStep();
  // this.$node.toggle();
  //setTimeout(this.step.bind(this), this.timeBetweenSteps * 5);
};
