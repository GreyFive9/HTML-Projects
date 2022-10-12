 //Display the user's resulting story on the HTML page rather than in an alert pop up box.

//Ask the user for, and use in the final output (at least) 2 of each of the 8 parts of speech
// (i.e., at least 2 nouns, at least 2 verbs, at least 2 adjectives, at least 2 adverbs, etc.
// for each of the 8 parts of speech).


var verb1 = prompt("Enter verb 1", "bought");
var verb2 = prompt("Enter verb 2", "amazing");

var noun1 = prompt("Enter noun 1", "games");
var noun2 = prompt("Enter noun 2", "characters");

var adjective1 = prompt("Enter adjective 1", "attractive");
var adjective2 = prompt("Enter adjective 2", "happily");


var story = "I " ;
story += verb1 ;
story += " an " ;
story +=  adjective1 ;
story += " gaming system. The system has all the latest " ;
story += noun1 ;
story += ". I can " ;
story += adjective2 ;
story += " " ;
story += verb2 ;
story += " with it all day. It is an amazing experience to play with the " ;
story += noun2 ;
story += ".";


document.getElementById("story").innerHTML = story;
