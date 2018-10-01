function myAnimal() {
  var animal = 'dog';
  return animal;
}


function yourAnimal() {
    var animal = 'cat';
    return animal;
}


function add2(n) {
  return n += 2;
}

var funkyFunction = function() {
  var innerScope = function() {
    return "FUNKY!";
  };
  return innerScope();
};




// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.





 

var theFunk = funkyFunction();

theFunk();