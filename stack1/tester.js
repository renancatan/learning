// Filter tests

let data = [
    {
        "id": [1, 2, 3],
        "txt": ["txt1", "txt2", "txt3"]
    },
    {
        "id": [4, 5, 6],
        "txt": ["txt4", "txt5", "txt6"]
    }
];

let list = [];
for (let i = 0; i < 2; i++) {
    let result = data[i].txt;
    list.push(result);
    // console.log(result);
};

const numbers = [5, 10, 20];
let sum = 0;

// numbers.forEach(element => {
//     // console.log(element);
// });


const sumFunction = async (a, b) => a + b;

numbers.forEach(async (numbers) => {

    sum = await sumFunction(sum, numbers);

});

// console.log(sum);


const ar = [1, 2, 3];

data.forEach(elem => {
    // console.log(elem)
}
);

const filter_num = ar.filter(ar => ar == [2]);

// data.filter(t=>t.txt =="txt3").forEach(elem => console.log(elem));



var myArray = [{
    "id": 0,
    "fullName": "George",
    "email": "george@test.ca",
    "group": 'Faculty',
    "totalFiles": 12,
    "outstandingFiles": 10,

},
{
    "id": 1,
    "fullName": "Albert",
    "email": "albert@test.ca",
    "group": 'Student',
    "totalFiles": 15,
    "outstandingFiles": 8,
}];

myArray.filter(t => t.group == 'Faculty').forEach(result => console.log(result));

// nested for
data.forEach(elem => {
    elem.txt.forEach(elem2 => console.log(elem2))
});

// nested for plus filter
const data2 = [{ menuName: "Hot dogs", menu: [{ dishId: '1', dish_has_categories: [{ CategoryId: '8' }] }, { dishId: '2', dish_has_categories: [{ CategoryId: '9' }] }] }, { menuName: "Burgers", menu: [{ dishId: '3', dish_has_categories: [{ CategoryId: '6' }] }, { dishId: '4', dish_has_categories: [{ CategoryId: '4' }] }] }, { name: "Drinks", menu: [] }]

let op = data2.filter(val => {
    let menu = val.menu.some(({ dish_has_categories }) => dish_has_categories.some(({ CategoryId }) => CategoryId === '8'))
    return menu
})

console.log('filtered values -->\n', op)

let names = op.map(({ menuName }) => menuName)

console.log('Names --> \n', names)




myCoolArray = [{"aaa": [1,2,3], "aaa": [10,20,35]}]

myCoolArray.forEach(elem => {
    elem.aaa.forEach(
        elem2 => console.log(elem2)
    )
});


// undefined with "?"

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name;
  
  const dogName2 = () => {
    // const myVar = adventurer.dog.name;
    if (typeof dogName === "string")
        {return dogName;}
    else
        {console.log("abcDD");}
};
  console.log(dogName, dogName2());
