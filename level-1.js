// Question 1

var myName = "Iselin";


// Question 2

var person = {
  eyecolor: "blue",
  haircolor: "blonde",
  };
  
  
  // Question 3
  
  var outOfStock = "false";
  
  if (outOfStock === true){
    console.log("Out of stock");
 }else (outOfStock === false){
    console.log("In stock");
 }
 
 
 // Question 4
 
 var numbers = ["one","two","three","four","five"];
 
 console.log(numbers.length);
 
 
 
 //Question 5
 
for (var i=15; i < 26; i++){ 
  console.log([i]);
}


//Question 6


 if (i === 20){
   console.log([i].length);
 }


//Question 7

var objects = [
  {
    name: "Peter",
    age: 19,
    male: true
  }
  {
    name: "Judy",
    age: 20,
    male: false
  }
  ];

for(var i=o; i < objects.length; i++){
  console.log(objects[i].age)
  console.log(objects[i].male)
};
 

//Question 8

function whatIDontLike(facts){
  console.log("I don`t like" + facts);
}

whatIdontLike("tomatoes");


//Question 9

function subtractionOfNumbers(number1,number2){
  var sum = number2 - number1;
  console.log(sum);
}
subtractionOfNumbers(11, 17);


//Question 10

var oneArray = [];

function theArray(string){
  oneArray.push(string);
}

theArray("test");

console.log(theArray);
