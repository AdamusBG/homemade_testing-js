it("Returns 6 when 4 and 2 added together", expect(addTwoNumbers(4, 2)).toEqual(6));

it("Returns 5 when 4 and 2 added together", expect(addTwoNumbers(4, 2)).toEqual(5));


it("Empty array equals empty array", expect([]).toEqualArray([]));

it("Array can be matched against same array", expect([1,2]).toEqualArray([1,2]));

it("[1,2] is equal to [2,3]", expect([1,2]).toEqualArray([2,3]));

class Person {
  constructor(name) {
    this.name = name
  }
}

var me1 = new Person("Adam");
var me2 = new Person("Snookie");

it("Me 1 is the same as me 2", expect(me1).toBeEquivalentTo(me2));
