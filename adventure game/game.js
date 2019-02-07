Game();

function Game(){

    alert("INPROGRESS");
    
    var playername = prompt("What is your name?");

    alert("Welcome to INPROGRESS "+ playername);
    
    Hospitalroom();
    
    function Hospitalroom(){
        var hospitalroom1 = prompt("Hospital Room \nYou muster up enough strength to open your eyes, your left arm is in noticibly more pain than the rest of your body, you see that there's a bandage wrapped around your arm with blood seeping through. \n Get up \n Look around \n Go back to sleep").toLowerCase();

        if (hospitalroom1 == "get up" || hospitalroom1 == "get out of bed"){
            alert("You struggle out of bed, each motion more painful than the last. As you look up you get another look at the room");
            
                HospitalroomStanding();

            }

        else if(hospitalroom1 == "look around" || hospitalroom1 == "look"){

            var hospitalroomLook = prompt("You notice you're in a room with plenty of sunlight coming through the window. You're lying in a bed, you can't appreciate the comfort it gives due to the pain you feel. There's a nightstand adjacent to your bed, with a note on top. \n Read Note \n Open Drawer \n");
            }

        else if (hospitalroom1 == "read note" || hospitalroom1 == "read"){
                alert("For "+playername+"\n I hope you read this letter. This is your enemy, INPROGRESS, check the drawer, there's a potion that'll restore your wounds.")
            Hospitalroom();
            }
        else if (hospitalroom1 == "take note" || hospitalroom1 == "take"){
            alert("Your fingers burn the instant they make contact with the note, you leave it on the nightstand.")
            Hospitalroom();
        }

        else if (hospitalroom1 == "open nightstand" || hospitalroom1 == "open drawer" || hospitalroom1 == "open"){
            alert("You manage to get up and open the drawer, there's a potion lying in the drawer with a cork closing off the top.");
            
            HospitalroomStanding();
            }

        else if (hospitalroom1 == "go back to sleep" || hospitalroom1 == "sleep" || hospitalroom1 == "go to bed" || hospitalroom1 == "rest"){
                alert("You close your eyes, almost instantly passing out from exhaustion, and dream of puppies");
            var resume = confirm("Do you wish to continue?");
            if(resume){
                    Hospitalroom();
                }
            
        }
    
    }
    
    HospitalroomStanding();
    
    function Hospitalroomstanding(){
        if(Hospitalroomstanding1 == "look around" || Hospitalroomstanding1 == "look"){

            var hospitalroomLook = prompt("Hospital Room\nYou notice you're in a room with plenty of sunlight coming through the window. You're standing above the bed. There's a nightstand adjacent to it, with a note on top. \n Read Note \n Open Drawer \n");
            }
        else if (Hospitalroomstanding1 == "leave" || Hospitalroomstanding1 == "leave room" || Hospitalroomstanding1 == "enter door" || Hospitalroomstanding1 ==  "enter" || Hospitalroomstanding1 == "exit"){
            
        }

        else if (Hospitalroomstanding1 == "read note" || Hospitalroomstanding1 == "read"){
                alert("For "+playername+"\n I hope you read this letter. This is your enemy, INPROGRESS, check the drawer, there's a potion that'll restore your wounds.")
            Hospitalroomstanding();
            }
        else if (Hospitalroomstanding1 == "take note" || Hospitalroomstanding1 == "take"){
            alert("Your fingers burn the instant they make contact with the note, you leave it on the nightstand.")
            Hospitalroomstanding();
        }

        else if (Hospitalroomstanding1 == "open nightstand" || Hospitalroomstanding1 == "open drawer"){
            

            }


    }
    
    Hospitallobby();
    
    //switch(Hospitallobby){
        //case "look" || "look around";
            //prompt("WRITE DESCRIPTION AND OPTIONS HERE")
    }
    

//when i do a switch this below stops working.
document.write(pc);

// This is a single line comment

/*
This is a Multiline Comment
*/

//alert("Warning! Will Robinson...Warning!"); just ok

//confirm("Do you like Pokœmon?"); ok and cancel

//prompt("What type of Pokemon do you like?"); basically lets you type in the thing

//First letter of functions are capitalized, all variables are lowercased

//Fuctions are like zones or areas?

// Adding a function to text is "Example"+funtionthing+"rest of example text"

//Find developer tools in browser and it'll troubleshoot for you

//Don't 


//-------------

//ex of inventory (by using a java script object)

    //var inventory = {
        //coins:1000,
        //bread:1000000,
        //sword:01134,
    //}

//buying something is like
//if(blacksmith == "sword" || blacksmith == "buy sowrd" && inventory.coins >= 100){
//  if swordBuy{
//        inventory.sword ++;
//        alert("You own "+inventory.sword+" swords");
//        inventory.coins = inventory.coins - 100;
//        inventory.coins -= 100: (this is short version of line above)
//        alert("You have"+inventory.coins+" coins remaining.")
//  }
//}



//--------------


//switches Can eliminate work, keeps nested stuff something

//Another conditional statement we use, called a swith statement here's an example
    //switch(insideCastle){
//          case "upstairs":
//              var upstairs = prompt ("u walk up stair");
//          Castle();
            //break;
            //case "downstairs";
                //prompt("yo")
            //break;
//          default:
                //alert("idk what "+insideCastle+" is");
//          Castle();
            //break:

//}
//breaks keep it from playing all the ones below it immediately after

//-----------------------
//Example of array declaration (making an array)

//the order of their names according to code is zero, one, two
//var wizardNames = ["Balthazar", "Bahamut", "Jim"];


//--------------------
//Example of proper area
//There can only be one else and one if, they're like parents of else if
//If you want to go into a function just create a THINK



//function Swamp(){
    //var swamp1 = prompt("You enter the swamp. \n -Swim \n -Follow path").toLowerCase();
    //if(swamp1 == "swim" || swamp1 == "go swimming"){ //basically giving multiple options for the same result
        //alert("You get eaten...Game Over!");
    //}
    //else if (swamp1 == "follow path" || "follow"){
        //var swampPath = prompt("-Eat lunch \n Go North");
        
        //if(swampPath == "eat lunch"){
            //alert(you eat the food)
        //}
        //else if(swampPath == "North"){
            //alert("You go north");
            //Castle(); //takes u to castle area
        //}
        
    //}
    //else{
        //alert("I don't understand" + swamp1); //For non valid commands
        //Swamp(); //returns back to beginning of function swamp area thing so it doesn't stop the game
    //}
//}