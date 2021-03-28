class VigenereCipheringMachine {
  reverseMode;
  alphabet = new Array(26);
  fullTable = new Array(26);

  constructor(value = true) {
    this.reverseMode = !value;

    for(let i = 65; i <= 90; i++) {
      this.alphabet[i - 65] = String.fromCharCode(i);
    }

    this.alphabet.forEach((el, i) => {
      this.fullTable[i] = this.shift(i);
    });
  }

  shift(index) {
    return [...this.alphabet.filter((el, i) => i >= index), ...this.alphabet.filter((el, i) => i < index)];
  }

  setKeyWord(message, key) {
    let counter = 0;
    let keyWord = "";

    for (let i = 1; i <= message.length; i++) {
      const letter = message[i - 1];

      if (this.fullTable[letter.toUpperCase().charCodeAt() - 65]) {
        if (i - counter <= key.length) {
          keyWord += key[i - counter - 1];
        }
        else {
          const integer = Math.trunc((i - counter) / key.length);
          if ((i - counter) % key.length !== 0) {
            keyWord += key[i- counter - integer * key.length - 1];
          }
          else {
            keyWord += key[key.length - 1];
          }
        }
      }
      else {
        keyWord += letter;
        counter++;
      }
    }

    return keyWord;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('THROWN');
    }

    const messageArr = message.toUpperCase().split("");
    const keyWord = this.setKeyWord(message, key);
    let result = "";
    
    messageArr.forEach((letter, letterIndex) => {
      const rowIndex = letter.charCodeAt() - 65;
      const colIndex = keyWord[letterIndex].toUpperCase().charCodeAt() - 65;

      if (this.fullTable[rowIndex]) {
        result += this.fullTable[rowIndex][colIndex];
      }
      else {
        result += letter;
      }
    });

    return !this.reverseMode ? result : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('THROWN');
    }

    const encryptedMessageArr = encryptedMessage.toUpperCase().split("");
    const keyWord = this.setKeyWord(encryptedMessage, key);
    let result = "";

    encryptedMessageArr.forEach((letter, letterIndex) => {
      const colIndex = keyWord[letterIndex].toUpperCase().charCodeAt() - 65;
      const rowIndex = this.fullTable.findIndex(el => el[colIndex] === letter);

      if (this.fullTable[rowIndex]) {
        result += this.fullTable[rowIndex][0];
      }
      else {
        result += letter;
      }
    });

    return !this.reverseMode ? result : result.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;