it("Returns 6 when 4 and 2 added together", function() {
  expect(addTwoNumbers(4, 2)).toEqual(6)
});

it("Returns 5 when 4 and 2 added together", function() {
  expect(addTwoNumbers(4, 2)).toEqual(5)
});

it("Empty array equals empty array", function() {
  expect([]).toEqualArray([])
});

it("Array can be matched against same array", function() {
  expect([1,2]).toEqualArray([1,2])
});

it("[1,2] is equal to [2,3]", function() {
  expect([1,2]).toEqualArray([2,3])
});

var me1 = new Person("Adam");
var me2 = new Person("Snookie");

it("Me 1 is the same as me 2", function() {
  expect(me1).toBeEquivalentTo(me2)
});
