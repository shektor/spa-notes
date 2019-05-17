var assert = {
  isTrue: function(assertionToTest) {
    if (assertionToTest !== true) {
      throw new Error(["Assertion ", assertionToTest, " is not true"].join(""));
    }
    console.log("- Assertion is true");
  },

  arraysMatch: function(assertArray, equalsArray) {
    if (assertArray.length !== equalsArray.length) {
      throw new Error("Arrays are not of equal length");
    }
    for (var i = 0; i < assertArray.length; i++) {
      if (assertArray[i] !== equalsArray[i]) {
        throw new Error("Array elements are not equal");
      }
    }
    console.log("- Arrays match");
  }
};
