const arrayS = 
[
    {"id": 1, "name": "renan", "comment": "abc"},
    {"id": 2, "name": "saraiva", "comment": "no comments"},
    {"id": 3, "name": "leme", "comment": "did u see that apple falling newton?"},
];

const filterSomething = arrayS.filter(ele => ele.name.includes("renan"));
const filterSomething2 = arrayS.filter(ele => ele.name.includes("renan")).map(mEle => ({"id": mEle.id, "name": mEle.name}));

console.log(filterSomething2);




//   const devs = [{"name":"A","age":26,"tech":["JavaScript","React"],"addr":{"country":"India","city":"Pune"}},{"name":"B","age":25,"tech":["Node","AngularJs"],"addr":{"country":"USA","city":"NY"}},{"name":"C","age":27,"tech":["Java","AWS"],"addr":{"country":"UK","city":"London"}}];
//   const devReact = devs.filter(obj => obj.tech.includes("React")).map(obj => ({"name":obj.name, "tech":obj.tech}));
//   console.log(devReact);

//   const devss = [{"name":"A","age":26,"tech":["JavaScript","React"],"addr":{"country":"India","city":"Pune"}},{"name":"B","age":25,"tech":["Node","AngularJs"],"addr":{"country":"USA","city":"NY"}},{"name":"C","age":27,"tech":["Java","AWS"],"addr":{"country":"UK","city":"London"}}];
//   const devReactt = devs.reduce((acc, ele) =>  ele.tech.includes("React") ? acc.concat({"name": ele.name, "tech":ele.tech}): acc ,[]);
//   console.log(devReact);



// var options = [
// { name: 'One', assigned: true }, 
// { name: 'Two', assigned: false }, 
// { name: 'Three', assigned: true }, 
// ];


//  var reduced = options.reduce(function(filtered, option) {
//     if (option.assigned) {
//        var someNewValue = { name: option.name, newProperty: 'Foo' }
//        filtered.push(someNewValue);
//     }
//     return filtered;
//   }, []);
  
//   document.getElementById('output').innerHTML = JSON.stringify(reduced);
//   <h1>Only assigned options</h1>
//   <pre id="output"> </pre>