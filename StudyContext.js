/* This file is used for learning the javascript function excution context */

/* The first simple example for scope chain
this is the example from the book professional javascript chapter 4
*/

console.log("Experiment 1")
var color = "blue"
function changeColor(){
	if(color == 'blue'){
		color = "red";
	}else{
		color = "blue";
	}
}
changeColor();
console.log("The color now is " + color)


/*this is the example from stack overflow 
https://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-inside-a-callback */

console.log("Experiment 2")
function outerFunction(arg1, callback){
	callback(arg1);
}
function callback(input){
	console.log(input);
}
outerFunction("hi, callback", callback)

/** Experiment 3 for this in call back*/
// in nodejs the this in funtion refers to global while the outside is not this but module.
// https://stackoverflow.com/questions/22770299/meaning-of-this-in-node-js-modules-and-functions
console.log("Experiment 3")
function operationFunction(color){
	console.log("The input color is " + color);
    self = this;
    self.color = color;
    outerFunction(1, function(){
    	console.log(self.color);
    }) // here the 1 is of no use
}
var object = {
	color : "black",
	func : operationFunction
}

console.log(color)
console.log(object.color)
console.log(global.color)

object.func("green")
console.log(object.color)
operationFunction("green")
console.log(global.color)
console.log(color)