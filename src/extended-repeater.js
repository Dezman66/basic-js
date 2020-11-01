const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const separator = options.separator || "+";
  const additionSeparator = options.additionSeparator || "|";
  const repeatTimes = options.repeatTimes || 0;
  const additionRepeatTimes = options.additionRepeatTimes || 0;
  const addition = options.addition !== undefined ? options.addition === null ? "null" : options.addition.toString() : "";
  const string = str === null ? "null" : str.toString();

  let additionalResult = string;
  
  additionalResult += addition;

  if(additionRepeatTimes) {
    for (i = 2; i <= additionRepeatTimes; i++) {
      additionalResult += `${additionSeparator}${addition}`;
    }
  }
  
  let result = additionalResult;

  if (repeatTimes) {
    for (i = 2; i <= repeatTimes; i++) {
      result += `${separator}${additionalResult}`;
    }
  }

  return result;
};