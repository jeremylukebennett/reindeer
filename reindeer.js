var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

 
for(var i = 0; i < reindeer.length; i++) {
    console.log(colors[i] + " " + reindeer[i]);
}
// ==================================================================================================================================
for(var i = 0; i < reindeer.length; i++) {
    
    var myDiv = colors[i] + " " + reindeer[i];
    hohohoElement.innerHTML = myDiv;

}