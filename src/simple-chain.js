const CustomError = require("../extensions/custom-error");
let links = [];

const chainMaker = {
  getLength() {
    return links.length;
  },
  addLink(value) {
    links.push(value !== undefined ? value === null ? "( null )" : `( ${value.toString()} )` : "(  )");
    return this;
  },
  removeLink(position) {
    if (!links[position - 1]) {
      links = [];
      throw new CustomError();
    }
    else {
      links.splice(position - 1, 1);
    }

    return this;
  },
  reverseChain() {
    links = links.reverse();

    return this;
  },
  finishChain() {
    const linksCopy = [...links];
    links = [];
    return linksCopy.join("~~");
  }
};
module.exports = chainMaker;
