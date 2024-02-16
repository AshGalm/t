
function printUppercaseItems(arr) {
    const uppercaseItems = [];
    for (let item of arr) {
      if (item !== item.toLowerCase()) {
        uppercaseItems.push(item);
      }
    }
    console.log(uppercaseItems);
  }

  function printLpwercaseItems(arr) {
    const lowercaseItems = [];
    for (let item of arr) {
      if (item === item.toLowerCase()) {
        lowercaseItems.push(item);
      }
    }
    console.log(lowercaseItems);
  }

  const users = ["omar","Ahmed","Osama", "ali"];

  console.log("LowerCase");
  printLpwercaseItems(users);


  console.log("UpperCase");
  printUppercaseItems(users);
