'use strict';

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
        return this.#returnMessage(actual);
      }
    }

    // Testing one array equal to another
    toEqualArray(actualArray) {
      if (this.expectation.length !== actualArray.length) {
        return this.#returnMessage(actualArray);
      } else {
        for (var i = 0; i < this.expectation.length; i++) {
          if (this.expectation[i] !== actualArray[i]) {
            return this.#returnMessage(actualArray);
          };
        }
        return "pass";
      }
    }

    // Testing object equality
    toBeEquivalentTo(actualObject) {
    var expProps = Object.getOwnPropertyNames(this.expectation);
    var actProps = Object.getOwnPropertyNames(actualObject);
    if (expProps.length != actProps.length) {
        return this.#returnMessage(actualObject);
    }
    for (var i = 0; i < expProps.length; i++) {
      var propName = expProps[i];
      if (this.expectation[propName] !== actualObject[propName]) {
          return this.#returnMessage(actualObject);
      }
    }
      return "pass";
    }

    // Keeps code dry, deals with creating the message to be printed if the test fails
    #returnMessage(actual) {
      const value = this.expectation;
      let message = { log: function(){console.log("Expected " + value + ", but instead got " + actual +".")}};
      return message ;
    }

  }

  return new Test(x);
}
