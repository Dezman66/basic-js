const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsAmount = Math.pow(2, disksNumber) - 1;
 
  return { turns: turnsAmount, seconds: Math.floor(turnsAmount*3600/turnsSpeed) };
};