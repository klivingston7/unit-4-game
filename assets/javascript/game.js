 
 // empty variables
 var numberGoal = 0;
 var wins = 0;
 var losses = 0;
 var count = 0;
 var images = ["./assets/images/blue_crystal.png", "./assets/images/green_crystal.png", "./assets/images/orange_crystal.png", "./assets/images/purple_crystal.png"];

 // random number between 19 - 120 shown at the start of the game
    function randomNumberGoal () {

        numberGoal = Math.floor(Math.random() * 102) +19;

    };

 // random hidden number value between 1 - 12 for each crystal
 // create img tag with class 'crystals' for each crystal, pulling images from array with src attr
 // linking crystal value to html element 'crystals'
    function randomCrystals () {
        for (var i = 0; i < images.length; i++) {
            var crystal = $("<img>");
            crystal.addClass("crystals")
            crystal.attr("src", images[i]);
            crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
            $(".images").append(crystal);
        }

    };

// function for generated numbers, allowing them all to be reset after every game
    function numbers () {

        $(".numberGoal").html("<p>Your Goal: " + numberGoal + "</p>");
		$(".winLossCount").html("<p>Wins: " + wins + "</p>" + "<p>" + "Losses: " + losses + "</p>");
        $(".score").html("<p>Total Score: " + count + "</p>");
        $(".images").empty();
    
    };


// function with all the other functions, allowing restart of the game without refreshing the page
    function restart () {

        randomNumberGoal ();
        numbers ();
        count = 0;
        randomCrystals ();

    };

// run above functions to setup the page/game 

    randomNumberGoal ();
    numbers ();   
    randomCrystals ();

// click function producing number for crystal to total
// comparing count to number goal 
// IF player matches goal (wins +1) ELSE busts over number (losses +1)
// running restart function to start game over
    
    function clickCrystal () {
     // count returns value of selected crystal 
     // parseInt ensuring string value is converted to a number to be added on each click
        count += parseInt($(this).attr("value"));
        $(".score").html("<p>Total Score: " + count + "</p>");

        if (count === numberGoal) {
            wins++;
            restart();
        }

        else if (count > numberGoal) {
            losses++;
            restart();
        }
    };

// when player clicks on any of the crystals, run function clickCrystal
    $(document).on("click", ".crystals", clickCrystal);

