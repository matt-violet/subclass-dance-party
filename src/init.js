$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($('body').height() - 100) * Math.random(),
      ($('body').width() - 100) * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    dancers.push(dancer);
  });

  $('.addRandomDancerButton').on('click', function(event) {
      var typeOfDancers = ['makePandaDancer', 'makeFireflyDancer', 'makeSlothDancer', 'makeMonkeyDancer'];
      var index = Math.floor(Math.random() * typeOfDancers.length);
      var dancerMakerFunction = window[typeOfDancers[index]];
      var dancer = new dancerMakerFunction(
        ($('body').height() - 100) * Math.random(),
        ($('body').width() - 100) * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
  
      dancers.push(dancer);
  });

  $('.lineUp').on('click', function (event) {
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].lineUp();
    }
  });

  $('.partyUp').on('click', function (event) {
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].partyUp();
    }
  });

  $('.coupleUp').on('click', function(event) {
    // loop thru dancers
    for (var i = 1; i < dancers.length; i = i + 2) {
      dancers[i].setPosition(dancers[i - 1].top, dancers[i - 1].left - 5);
    }   
  });

  $('.gatherUp').on('click', function (event) {
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].gatherUp();
    }
  });

  // $('body').on('click', '.sloth', function(event) {
  //   event.preventDefault();
  //   console.log("hi")
  //   $('.sloth').append('<div class="quote">let me sleep!</div>');
  // });

});

