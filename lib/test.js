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

    toEqual(actual) {
      if (actual === this.expectation) {
        return "pass";
      } else {
        const value = this.expectation;
        let message = { log: function(){console.log("Expected " + value + ", but instead got " + actual +".")}};
        return message ;
      }
    }
  }

  return new Test(x);
}
