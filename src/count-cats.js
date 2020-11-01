const CustomError = require("../extensions/custom-error");

module.exports = function countCats(initialArray) {
    let numberOfCats = 0;
    
    initialArray.forEach(array => {
     array.forEach(el => {
       if (el === '^^') {
         numberOfCats++;
       }
     })
    });
   return numberOfCats;
};
