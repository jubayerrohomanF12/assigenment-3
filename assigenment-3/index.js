function printObjectProperties(obj) {
  if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
  } else {
    for (let property in obj) {
      console.log(`${property}: ${obj[property]}`);
    }
  }
}

// Example usage
const myObject = {
  name: "John",
  age: 30,
  occupation: "Engineer"
};

printObjectProperties(myObject);

// Output:
// name: John
// age: 30
// occupation: Engineer
