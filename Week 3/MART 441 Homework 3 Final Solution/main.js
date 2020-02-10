function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Pugster continues into the park with confidence. Pugster meets another dog. What Pugster do now?";
        document.getElementById("choice1").innerHTML = "Meet others";
        document.getElementById("choice2").innerHTML = "Walk alone";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Pugster starts to back out, but then something in the back of Pugster's mind says 'Wait!'";
        document.getElementById("choice1").innerHTML = "Go ahead and be brave";
        document.getElementById("choice2").innerHTML = "Scan the situation";
    } else if (choice == 1 && answer1 == "Meet others") {
        document.getElementById("story").innerHTML = "Pugster walks over to a group of dogs and says hello.  Pugster is trying to decide who is genuine or not.";
        document.getElementById("choice1").innerHTML = "Evaluate all dogs";
        document.getElementById("choice2").innerHTML = "Stay clear";
    } else if (choice == 2 && answer2 == "Walk alone") {
        document.getElementById("story").innerHTML = "Pugster starts to walk over to the dogs and then decides to go to the water instead.  Now what?'";
        document.getElementById("choice1").innerHTML = "Go for a swim";
        document.getElementById("choice2").innerHTML = "Get a drink";
    } else if (choice == 1 && answer1 == "Go ahead and be brave") {
        document.getElementById("story").innerHTML = "Pugster decides to go in even with hesitation to make new friends.  Will it work?'";
        document.getElementById("choice1").innerHTML = "Yes it will work";
        document.getElementById("choice2").innerHTML = "No it will not work";
    } else if (choice == 2 && answer2 == "Scan the situation") {
        document.getElementById("story").innerHTML = "Pugster decides to just look around for the moment. What should Pugster do now?";
        document.getElementById("choice1").innerHTML = "Watch from afar";
        document.getElementById("choice2").innerHTML = "Get in closer";
    }
    // need to do these
    else if (choice == 1 && answer1 == "Evaluate all dogs") {
        document.getElementById("story").innerHTML = "Pugster decides that evaluation is the best option." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Stay clear") {
        document.getElementById("story").innerHTML = "Pugster decides staying away is the best option" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Go for a swim") {
        document.getElementById("story").innerHTML = "Pugster decides that swimming sounds most fun" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get a drink") {
        document.getElementById("story").innerHTML = "Pugster decides it's time to drink" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes it will work") {
        document.getElementById("story").innerHTML = "Pugster thinks, yeah this will work out." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "No it will not work") {
        document.getElementById("story").innerHTML = "Pugster thinks, I don't think this will work out." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Watch from afar") {
        document.getElementById("story").innerHTML = "Pugster decides it's time to just watch from a distance for safety." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get in closer") {
        document.getElementById("story").innerHTML = "Pugster decides to get just a little closer, but not engage." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "Our fearless leader, 'Pugster' has entered the dog park for the first time. Scared? Yes, but willing to give it a try. Are you ready to start on adventure with Pugster?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Pugster thanks you!";

    }


}