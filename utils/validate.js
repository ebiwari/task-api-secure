const data = require("../user.json");
class Validate {
  static emailExist(email) {
    const user = data.find((val) => val.email === email);
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  static isValidEmail(email) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email && reg.test(email)) {
      return true;
    }
    return false;
  }

  static required(val) {
    if (val && val !== "") {
      return true;
    }
    return false;
  }
}

module.exports = Validate;
