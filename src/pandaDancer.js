
var makePandaDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="panda"></span>');
  this.setPosition(top, left);
};

makePandaDancer.prototype = Object.create(makeDancer.prototype);
makePandaDancer.prototype.constructor = makePandaDancer;
makePandaDancer.prototype.oldStep = makePandaDancer.prototype.step;

makePandaDancer.prototype.step = function () {
  this.oldStep();
};
