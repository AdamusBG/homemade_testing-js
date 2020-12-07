function it(definition, test) {
  if (test === "pass") {
    console.log(definition + ": passed");
  } else {
    console.log(definition + ": failed");
    test.log();
  }
}

function expect(x) {

  class Test {
    constructor(expectation) {
      this.expectation = expectation;
    }

    // Basic test for equality, i.e. of primitive variables
    toEqual(actual) {
      if (actual === this.expectation) {
        return "pass";
      } else {
        const value = this.expectation;
        let message = { log: function(){console.log("Expected " + value + ", but instead got " + actual +".")}};
        return message ;
      }
    }

    // Testing one array equal to another
    toEqualArray(actualArray) {
      if (this.expectation.length !== actualArray.length) {
          const value = this.expectation;
          let message = { log: function(){console.log("Expected " + value + ", but instead got " + actualArray +".")}};
          return message ;
        } else {
          for (var i = 0; i < this.expectation.length; i++) {
            if (this.expectation[i] !== actualArray[i]) {
              const value = this.expectation;
              let message = { log: function(){console.log("Expected " + value + ", but instead got " + actualArray +".")}};
              return message ;
            };
          }
        return "pass";
      }
    }
  }

  return new Test(x);
}
