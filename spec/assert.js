var assert = {
  isTrue: function(assertionToTest) {
    if (assertionToTest !== true) {
      throw new Error(["Assertion", assertionToTest, "is not true"].join(""));
    }
    console.log("- Assertion is true");
  }
};
