const Validate = require("../../utils/validate");
const data = require("../../user.json");

/***'
 * This check for existence of string
 */

describe("Required", () => {
  it("should expect a value", () => {
    const result = Validate.required("Ebiwar");
    expect(result).toBeTruthy();
  });

  it("Should recieve an empty string", () => {
    const result = Validate.required("");
    expect(result).toBeFalsy();
  });

  it("Should not be undefined", () => {
    const result = Validate.required();

    expect(result).toBeFalsy();
  });
});

/***
 * Validate the email
 */

describe("IsValidEmail", () => {
  it("Should validate correct E-mail", () => {
    const result = Validate.isValidEmail("ebiwari@gmail.com");
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    expect(result).toBeTruthy();
  });

  it("Should validate wrong E-mail", () => {
    const result = Validate.isValidEmail("ebiwarigmail.com");
    // const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    expect(result).toBeFalsy();
  });
});

/**
 * Check for validity of email with the json file on the root path
 */

describe("Email Exsist", () => {
  it("Should return true if user Exsit", () => {
    const result = Validate.emailExist("ebiwari@gmail.com");
    expect(result).toBeTruthy();
  });

  t("Should return false if User does not Exsit", () => {
    const result = Validate.emailExist("paebi@gmail.com");
    expect(result).toBeTruthy();
  });
});
