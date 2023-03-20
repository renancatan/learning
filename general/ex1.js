

// >>>>> 1) <<<<<< 
// Write a JavaScript function to check whether an `input` is a string or not. Go to the editor
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false
myString = "this is a string ";
myNumber = 10;
myArray = [1, 2, 3, 4, 5];

// console.log(typeof myNumber == "number");
// console.log(typeof myString)

function findString(data) {
    if(typeof data != "string") {
        console.log(false, `-> Your data is "NOT a string", the data is as follows: ${data}`);
        return;
    }
    else {
        console.log(true, `-> Your data "is a string", as follows: ${data}`);
        return;
    };
};
// findString(myString);



// >>>>> 2) <<<<<<
// Write a JavaScript function to check whether a string is blank or not. 
// console.log(is_Blank(''));  true
// console.log(is_Blank('abc'));  false
function isBlank2(data) { 
    const d = data.split(" ").map(mapper => mapper.length).filter()
    // const findBlank = d.forEach(ele => { ele.length }) ? 0 : true

    console.log(d);
};

function isBlank(data) {
    if (data.length == 0) {
        console.log(true);
        return;
    };
    return console.log(false);
};

// isBlank(myString);
// isBlank2(myString);  // --> TRIAL: Make a loop summing up the count of each word, then check for the sum = 0; 

// >>>>> 3) <<<<<<
// Write a JavaScript function to split a string and convert it into an array of words.
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

function string_to_array(data) {
    const myEmptyAr = [];

    data.forEach(ele => {
        let firstEle;
        if (ele.length != 0) {
            const getEle = ele
            firstEle = getEle;
        }
        else {
            firstEle = " ";
        }
        myEmptyAr.push(firstEle);
    });

    return myEmptyAr;
}
console.log(Array.from(myString)); 

// reescrever aqui algumas vezes.
const myString2 = "hello, my name is Renan";
function string_to_array2(data) {
  const myEmptyAr = [];
  let currentSubstring = "";

  for (let i = 0; i < data.length; i++) {
    const currentChar = data[i];
    if (currentChar === " " || currentChar === ",") {
      myEmptyAr.push(currentSubstring);
      myEmptyAr.push(currentChar);
      currentSubstring = "";
    } else {
      currentSubstring += currentChar;
    }
  }

  if (currentSubstring !== "") {
    myEmptyAr.push(currentSubstring);
  }

  return myEmptyAr;
}

console.log(string_to_array2(myString2)); 
// -> ["hello", ",", "my", "name", "is", "Renan"]


