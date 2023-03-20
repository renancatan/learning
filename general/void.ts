
interface Inum {
    a: number
    b: number
}; 

async function myFunc(a: Inum["a"], b: Inum["b"]) {
    const summ = await a*b;
    console.log(summ);
};

const data = myFunc(5, 10);


// async function t(func: any) {
//     const data = await func
//     return data;
// };

// t(myFunc(5, 10));