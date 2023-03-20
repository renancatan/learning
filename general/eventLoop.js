function foo(b) {
    const a = 5;
    return a + b + 5;
  }
  
  function bar(x) {
    const y = 3;
    return foo(x * y);
  }
  
  const baz = bar(7); // assigns 42 to baz
  console.log(baz);