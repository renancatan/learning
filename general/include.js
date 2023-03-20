const status_ = ["ARCHIVED", "DELIVERED"];

function isValidOrderState(statuss) {
    return !status_.includes(statuss);
  };

  const statusResult = isValidOrderState("SEPARETED");
  console.log(!statusResult);
  

  if (!statusResult) {
    console.log(`status: ${statusResult}` );
    return;
  };