//create key obj with two key value pairs
var tree = {
  height: "",
  sym: ""
};

//create variable to store input elements
var inputHeight = document.getElementById('height');
var inputSymbol = document.getElementById('symbol');

//create variable to store button element
var grow = document.getElementById('grow');


//create event listener for click
grow.addEventListener('click', handleGrowTree);

//create event listener for enter key on input elements
inputHeight.addEventListener('keypress', handleEnterKeyPress);
inputSymbol.addEventListener('keypress', handleEnterKeyPress);


//define function for enter key press
function handleEnterKeyPress (event) {

  //determine if enter key is pressed
  if ( event.keyCode === 13 ) {
    //determine if each fields have a value, if not alert
    if ( inputHeight.value === "" | inputSymbol.value === "" ) {
      alert('Error: Both input fields need a value');

      //if values are entered invoke grow tree function
    } else {
      handleGrowTree();
    };
  }; //end of first condition for enter key
};

//define function to print tree to console
function handleGrowTree() {

  //determine if input fields have no value, if not alert
  if ( inputHeight.value === "" | inputSymbol.value === "" ) {
    alert('Error: Both input fields need a value');
  }

  //create variable to store height of tree
  tree.height = inputHeight.value;

  //create variable to store chacter from input
  tree.sym = inputSymbol.value;

  //declare vars to hold spaces and a counter that decrements +1
  var spaces;
  var spaceCounter = tree.height - 1;

  //decalare vars to hold characters and a counter that increment +1
  var character;
  var characterCounter = 1;

  //create loop to log a tree with user height and character
  for (var i = 0; i < tree.height; i++) {

      //repeats spaces === spaceCounter
      spaces = ' '.repeat(spaceCounter);
      //repeats character === characterCounter
      character = tree.sym.repeat(characterCounter);
      //decrements counter
      spaceCounter--
      //increments counter +2 for shape of tree
      characterCounter = characterCounter + 2;

      console.log(spaces + character);

    };//-----end for loop

};//-------end handleGrowTree function
