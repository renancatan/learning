// undefined with "?"


interface tester {
  id: number;
  product: string;
};

function multiplier(a: number, b: number) {
  const data = a * b;
  return console.log(data);
};


const mult = (a: number, b: number) => {
  const response = a * b;
  return console.log(response);

  // return response.data;  // TRY HERE!!
};

multiplier(5, 2);
mult(6, 2);


interface tester2 {
  exp1: number;
  exp2: number;
};

function multiplier2(a: tester2["exp1"], b: tester2["exp2"]) {
  const data = a * b;
  return console.log(data);
};

multiplier2(10, 20);


// async doesnt affect simple multiplier funcs.. this is a case for GPU not concurrency
const mult2 = async (a: tester2["exp1"], b: tester2["exp2"]) => {
  const data = await a*b;
  return console.log(data);
  
};

mult2(10, 30);