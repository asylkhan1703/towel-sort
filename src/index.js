
// You should implement your task here.

module.exports = function towelSort (arg) {
  if (arg === undefined || arg === []) return [];

  let newArr = [];
  let counter = 2;
  arg.flatMap((row) => {
    if (counter % 2 === 0) {
      newArr.push(...row);
    } else {
      newArr.push(...row.reverse());
    }
    counter += 1;
  });
  
  return newArr;
};