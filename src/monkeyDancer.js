
var makeMonkeyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="monkey"></span>');
  this.setPosition(top, left);
};

makeMonkeyDancer.prototype = Object.create(makeDancer.prototype);
makeMonkeyDancer.prototype.constructor = makeMonkeyDancer;
makeMonkeyDancer.prototype.oldStep = makeMonkeyDancer.prototype.step;

makeMonkeyDancer.prototype.step = function () {
  //this.oldStep();
  //this.$node.toggle();
};

makeMonkeyDancer.prototype.gatherUp = function () {
  var top = $("body").height() - 200;
  var left = Math.random() * 200;
  this.setPosition(top, left);
};