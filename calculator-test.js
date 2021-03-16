
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 100,
    years: 1,
    rate :2
  }
  expect( calculateMonthlyPayment(values)).toEqual(8.5)
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
