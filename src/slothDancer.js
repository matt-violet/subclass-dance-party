
var makeSlothDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="sloth roll"></span>');
  this.setPosition(top, left);
};

makeSlothDancer.prototype = Object.create(makeDancer.prototype);
makeSlothDancer.prototype.constructor = makeSlothDancer;
makeSlothDancer.prototype.oldStep = makeSlothDancer.prototype.step;

makeSlothDancer.prototype.step = function () {
  this.oldStep();
};

makeSlothDancer.prototype.lineUp = function () {
  makeDancer.prototype.lineUp.call(this);
  this.$node.toggleClass("roll");
};

makeSlothDancer.prototype.partyUp = function () {
  makeDancer.prototype.partyUp.call(this);
  this.$node.toggleClass("roll");
};

makeSlothDancer.prototype.gatherUp = function () {
  var top = 200;
  var left = Math.random() * 200;
  this.setPosition(top, left);
  this.$node.toggleClass("roll");
};