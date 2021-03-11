

module.exports = function getSeason(date) {
  if(!date) {
    return "Unable to determine the time of year!";
  }

  try {
    Date.prototype.toString.call(date);
  }
  catch {
    throw new Error("Error");
  }

  let result;

  switch(date.getMonth() + 1) {
    case 12:
    case 1:
    case 2: result = "winter"; break;
    case 3:
    case 4:
    case 5: result = "spring"; break;
    case 6:
    case 7:
    case 8: result = "summer"; break;
    case 9:
    case 10:
    case 11: result = "autumn"; break;
  }

  return result;
};
