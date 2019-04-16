
var makeDancer = function (top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function () {
  var top = $("body").height() - 200;
  var left = Math.random() * $("body").width();
  this.setPosition(top, left);
};

makeDancer.prototype.partyUp = function () {
  var top = ($("body").height() - 100) * Math.random();
  var left = ($("body").width() - 100) * Math.random();
  this.setPosition(top, left);
};
