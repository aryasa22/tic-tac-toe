const arr = ["1", "", "2"];

const emptyArr = arr.filter((item) => {
  return item === "";
});

console.log(emptyArr);
