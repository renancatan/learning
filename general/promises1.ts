import axios from "axios";

// cornershop API test

const MARKET_ID = 6558
// const product_id = [1191407, 1265903, 2065015, 1191384]; // [1170046, 1191407, 1265903, 1191384, 1203972, 1454790, 2065015] // 1170046 esse n ta pegando nada

const baseURL = `https://cornershopapp.com/api/v2/branches/${MARKET_ID}/products`
/*
const product_id = [1170046, 1265903];
const getResponse = async () => {


  // const data = 
  product_id.forEach(async elem => {
    const url = `${baseURL}/${elem}`;
    const response = await axios.get(url);
    let data = response.data;
    // console.log(data[0]?.package);
  }
  );

  // return data;

};


getResponse();


// USAR MAP AQUI

let nameAgeMapping = new Map<string, number>();

//1. Add entries
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
// console.log(nameAgeMapping);

// let myMap = new Map<string, string>();
// myMap.set("id", "1");
// myMap.set("id", "2");
// console.log(myMap)

// myMap.forEach((value: string, key: string) => {
//   // console.log(key, value);
// });


// USAR INTERFACES AQUI EX:
// export interface ISearchResult {  
//     title: string;  
//     listTitle:string;
//     entityName?: string,  // ? = undefined, o modelo n quebra, logo = string | undefined
//     lookupName?:string,
//     lookupId?:string  
//   }

// const delay = ms => new Promise(res => setTimeout(res, ms)); 

const getResponse2 = async () => {
  // await delay(5000);  WHY CAN'T I USE THIS GUY?? ms not working

  product_id.map(async elem => {
    const url = `${baseURL}/${elem}`;
    const response = await axios.get(url);
    let data = response.data;

    //console.log(data[0]?.package);
  }
  );

};


getResponse2();



// const usernames: string[] = ["jordanrjdev", "anonymous123", "channelyy"];

// const simulateFetchData = (username: string): Promise<string> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`${username} is a valid username`);
//     }, 1000);
//   });
// }

// const dataUsers = usernames.map(async (username) => {
//   return await simulateFetchData(username);
// });
// console.log(dataUsers);


// USING THEN
// const promise = new Promise((resolve, reject) => {

//   resolve('Success!');
// });

// const products = [];
// promise
// .then((url) => fetch(url)) 
//   .then((res) => res.json())
//   .then((data) => {
//     products.push(data);
//   })
//   .then(() => {
//     console.log(products);
//   });


const promise1 = new Promise((resolve, reject) => {

  resolve('Success!');
});

promise1.then((value) => {
  console.log(value);
  // expected output: "Success!"
});

console.log("[STARTING FETCH/THEN]")
import fetch from 'node-fetch';

const pid = [1170046, 1265903];

// fetch returns a promise 
// you can do three things with a promise:
// 1) then 2) catch 3) finally 
// when returning a promise "fetch" in this case, always return something

// fetch(`${baseURL}/${pid}`)
// .then(res => res.json())
// .then((data) => console.log(data));


// com interface

interface marketList {
  id: number;
  // availability_status: string;
  // brand: object;
  // package: string;
  // price: number;

}

// fetch(`${baseURL}/${pid}`)
// .then(res => res.json())
// .then(data => data[0].id)
// .then((data: marketList["id"]) => console.log(data));

*/
const product_id2 = [1191407, 1265903, 2065015, 1191384, "a"];
// // product_id2.forEach(async elem => {
// //   await fetch(`${baseURL}/${elem}`)
// //     .then(res => res.json())
// //     .then(data => data[0])
// //     .then((data) => console.log(data));
// // });


// product_id2.forEach(async elem => {
//   const path = `${baseURL}/${elem}`;
  
//   const d = await fetch(path).then(data => data)
//   const status = 200;
//   // console.log(d.status)

//   // else {
//   //   console.log(`status errado ${d.status}`);
//   //   return;
//   // }
  
//     // .then(res => res.json())
//     // .then(res => console.log(res))
//     // .then(data => data[0])
//     // .then((data) => console.log(data));
// });



// export class Thread {
//   id: string;
//   lastMessage: Message;
//   name: string;
//   avatarSrc: string;

//   constructor(id?: string,
//               name?: string,
//               avatarSrc?: string) {
//     this.id = id || uuid();
//     this.name = name;
//     this.avatarSrc = avatarSrc;
//   }
// }

const product_id3 = [1191407, 1265903]; // ,"a"
product_id3.forEach(async (elem) => {
  const getURL = `${baseURL}/${elem}`;
  const res = await axios.get(getURL);
  const result = res.data;
  // console.log(result);

  // if (result.status == 200) {
  //   console.log(result[0]);
  //   return;
  // }
  
});


// async function dobraNumAsync(x:number) {
//   return x*2
// };

// async function asyncA(){
//   const y = await dobraNumAsync(20);
//   console.log("A-async", new Date().getSeconds(), y);
// };

// async function asyncB(){
//   const y = await dobraNumAsync(15);
//   await new Promise(f => setTimeout(f, 2000));  // 2000 = async sleep for 2sec
//   console.log("B-async", new Date().getSeconds(), y);

// };

// asyncB();
// asyncA();


async function sumValue(x: number, y: number) {
  return x+y;
};

async function sumA() {
  const s = await sumValue(10,20);
  return console.log("A-func", s, new Date());
};

async function sumB() {
  const s = await sumValue(50,70);
  await new Promise((f) => setTimeout(f, 2000));
  return console.log("B-func", s, new Date());
};

sumA();  // ordem n importa
sumB();  // ordem n importa

async function setEitherFuncs() {
  // await new Promise((f) => setTimeout(f, 3000));
  // console.log("[AWAIT..]")
  await sumB(); // agora a ordem importa
  await sumA(); // agora a ordem importa
  
};

setEitherFuncs();

// function generateList(size: number) {
//   const myArray = [];
  
//   for(let i=0;i<size;i++){
//     myArray.push(Math.floor(Math.random()*100));
//   }

// }


interface subIntf {
  a: number;
  b: number;
};

async function myCoolSub(a: subIntf["a"], b: subIntf["b"]) {
  return a-b;
};

const subResult = async () => 
  {
  // await new Promise((f) => setTimeout(f, 2000)); 
  await myCoolSub(10, 2);
  // return console.log(s)
};
console.log(subResult());


