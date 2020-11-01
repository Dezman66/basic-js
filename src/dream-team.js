const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
    if (!Array.isArray(array)) {
      return false;
    }

    let result = [];
     array.forEach(el => {
       if (typeof el === 'string' && !!el.trim()[0]) {
         result.push(el.trim()[0].toUpperCase());
       }
     });

    result.sort();

    return result.join('') ;
};
