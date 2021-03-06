
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 100,
    years: 1,
    rate :2,
  }
  expect( calculateMonthlyPayment(values)).toEqual("8.42")
});


it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00')
});
  // ..

/// etc
