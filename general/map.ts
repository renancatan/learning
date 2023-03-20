const data =
    [
        {
            menuName: "Hot dogs", menu:
                [
                    { dishId: '1', dish_has_categories: [{ CategoryId: '8' }] },
                    { dishId: '2', dish_has_categories: [{ CategoryId: '9' }] }
                ]
        },
        {
            menuName: "Burgers", menu:
                [
                    { dishId: '3', dish_has_categories: [{ CategoryId: '6' }] },
                    { dishId: '4', dish_has_categories: [{ CategoryId: '4' }] }]
        },
        { name: "Drinks", menu: [] }
    ]

const res = data.filter(x =>
    x.menu.some(y =>
        y.dish_has_categories.some(z => z.CategoryId === '8')
    )
);
// console.log(res)


const myObject = [
    {"id": 1, "name": "joaozim"},
    {"id": 2, "name": "maria"},
    {"id": 3, "name": "joarez"},
];

myObject.forEach(elem => {
    // console.log(elem);
});

myObject.map(mapper => {
    // console.log(mapper);
});

myObject.filter(filtering => {
    console.log(filtering);
});


// console.log(myObject);

const data2 =[{ menuName: "Hot dogs", menu: [ { dishId: '1', dish_has_categories: [{ CategoryId: '8' }] }, { dishId: '2', dish_has_categories: [{ CategoryId: '9' }] }] }, { menuName: "Burgers", menu: [{ dishId: '3', dish_has_categories: [{ CategoryId: '6' }] }, { dishId: '4', dish_has_categories: [{ CategoryId: '4' }] }] }, { name: "Drinks", menu: [] } ]

let op = data2.filter(val => {
  let menu = val.menu.some(({dish_has_categories}) => dish_has_categories.some(({CategoryId}) => CategoryId === '8'))
  return menu
})

console.log('filtered values -->\n',op)

let names = op.map(({menuName})=> menuName)

console.log('Names --> \n', names)