const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new CustomError('Is not an array');
  }

  let result = [];
  let arrCopy = [...arr];

  const controlSequences = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];

  arrCopy.forEach((element, index) => {
    const sequence = controlSequences.find(el => element === el);

    if (sequence) {
      switch(sequence) {
        case controlSequences[0]:
          if (controlSequences.some(el => arrCopy[index + 2] === el) && arrCopy[index + 2].includes("-prev")) { 
            arrCopy.splice(index + 1, 2) 
          }
          else {
            arrCopy.splice(index + 1, 1) 
          }; break;
        case controlSequences[1]: if (result.length) { result.pop() }; break;
        case controlSequences[2]: if (arrCopy[index + 1] !== undefined) { result.push(arrCopy[index + 1]) }; break;
        case controlSequences[3]: if (arrCopy[index - 1] !== undefined) { result.push(arrCopy[index - 1]) }; break;
        default: break;
      }
    }
    else {
      result.push(element);
    }
  });

  return result;
};
