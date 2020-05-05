var successSound = new Audio();
var clapSound = new Audio();
var yaySound = new Audio();
successSound.src = "sounds/happy-quick.wav";
clapSound.src = "sounds/clapping.wav";
yaySound.src = "sounds/yay.wav";

var pensCounter = 0;
var levelOneCounter = 0;
var levelTwoCounter = 0;
var levelThreeCounter = 0;

$(document).ready(function () {
    $("kitchen").show();
    $("#office").hide(); // Originally hidden image
    $("#tools").hide(); // Originally hidden image
    $("#congrats").hide(); // Originally hidden text
    $("#fireworks").hide(); // Originally hidden image



    function getCursorPosition(canvas, event) { // Get coordinates
        const rect = canvas.getBoundingClientRect()
        var mx = event.clientX - rect.left // Mouse X
        var my = event.clientY - rect.top // Mouse Y
        console.log("x: " + mx + " y: " + my)

        // A mouse click at mx, my is in the square if (mx>x1 and mx<x2 and my>y1 and my<y2)
        if (mx>410 && mx<700 && my>420 && my<550){ // Soda Can (Something to drink)
            console.log("You clicked on the soda");
            successSound.play();
            levelOneCounter++;
            $("#sodatext").css("color", "red");
        }
        if (mx>440 && mx<500 && my>290 && my<345){ // Rubber Band
            console.log("You clicked on the rubber band");
            successSound.play();
            levelOneCounter++;
            $("#rbtext").css("color", "green");
        }
        if (mx>270 && mx<475 && my>0 && my<70){ // Top Pen
            console.log("You clicked on the top pen");
            successSound.play();
            pensCounter++;
            levelOneCounter++;
        }
        if (mx>25 && mx<100 && my>200 && my<300){ // Left Pen
            console.log("You clicked on the left pen");
            successSound.play();
            pensCounter++;
            levelOneCounter++;
        }
        if (pensCounter == 2){ // Both Pens have been clicked
            //successSound.play();
            $("#penstext").css("color", "darkred");;
        }
        if (levelOneCounter == 4){ // ALL ITEMS FOUND. MOVE TO LEVEL 2.
            $("kitchen").fadeOut("slow");
            $("#office").fadeIn("slow");
            $("#description").text("Two wooden clothes pins, a screwdriver, and chapstick. Think quick and take your pick.").fadeIn("slow");
        }
        // LEVEL TWO: Office
        if (mx>538 && mx<600 && my>0 && my<60){ // Top Clothes Pin
            console.log("You clicked the top clothes pin");
            successSound.play();
            levelTwoCounter++;
        }
        if (mx>175 && mx<285 && my>145 && my<200){ // Left Clothes Pin
            console.log("You clicked the left clothes pin");
            successSound.play();
            levelTwoCounter++;
        }
        if (mx>102 && mx<190 && my>75 && my<130){ // Screwdriver
            console.log("You clicked the screwdriver");
            successSound.play();
            levelTwoCounter++;
        }
        if (mx>715 && mx<750 && my>90 && my<200){ // Chapstick
            console.log("You clicked the chapstick");
            successSound.play();
            levelTwoCounter++;
        }
        if (levelTwoCounter == 4){ // ALL ITEMS FOUND. MOVE TO LEVEL 3.
            $("#kitchen").fadeOut("slow");
            $("#office").fadeOut("slow");
            $("#tools").fadeIn("slow");
            $("#description").text("Five marbles, two quarters, and a role tape. Find them all and you'll escape.").fadeIn("slow");
        }
        //LEVEL THREE: Tools
        if (mx>60 && mx<85 && my>150 && my<180){ // Top Left Blue Marble
            console.log("You clicked on the top left blue marble");
            successSound.play();
            levelThreeCounter++;
        }
        if (mx>30 && mx<55 && my>470 && my<500){ // Bottom Left Yellow Marble
            console.log("You clicked on the bottom left yellow marble");
            successSound.play();
            levelThreeCounter++;
        }
        if (mx>195 && mx<225 && my>350 && my<375){ // Bottom Left Yellow Marble #2
            console.log("You clicked on the second yellow marble");
            successSound.play();
            levelThreeCounter++;
        }
        if (mx>435 && mx<465 && my>150 && my<180){ // Top Red Marble
            console.log("You clicked on the top red marble");
            successSound.play();
            levelThreeCounter++;
        }
        if (mx>675 && mx<710 && my>305 && my<335){ // Right Red Marble
            console.log("You clicked on the right red marble");
            successSound.play();
            levelThreeCounter++;
        }
        // End marbles
        if (mx>210 && mx<250 && my>480 && my<520){ // Left Quarter
            console.log("You clicked on the left quarter");
            successSound.play();
            levelThreeCounter++;
        }
        if (mx>595 && mx<640 && my>365 && my<410){ // Right Quarter
            console.log("You clicked on the right quarter");
            successSound.play();
            levelThreeCounter++;
        }
        if (mx>650 && mx<790 && my>30 && my<145){ // Tape
            console.log("You clicked on the tape");
            successSound.play();
            levelThreeCounter++;
        }
        if (levelThreeCounter === 8){ // ALL ITEMS FOUND. MOVE TO END.
            $("#office").hide();
            $("#kitchen").hide();
            $("#description").hide();
            $("#tools").hide();
            $("#fireworks").fadeIn("slow"); // Originally hidden image
            $("#congrats").fadeIn("slow");
            $("#ispy").text("I Spy with my little eye... A great puzzler!");
            yaySound.play();
            clapSound.play();
        }
    }

    const canvas = document.querySelector('canvas')
        canvas.addEventListener('mousedown', function(e) { // If mouse is down...
            getCursorPosition(canvas, e) // Then get x, y
    })

}); // End document.ready
