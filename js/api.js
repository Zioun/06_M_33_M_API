const obj = {id: 1, name: "Abdullah", job: "programer"};
const jsonStringify = JSON.stringify(obj);
const jsonParse = JSON.parse(jsonStringify);
console.log(obj);
console.log(jsonStringify);
console.log(jsonParse);