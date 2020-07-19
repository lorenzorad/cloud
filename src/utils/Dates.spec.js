const Dates = require('./Dates.js');

describe('Dates', () => {
  it('should return that it is between', () => {
    const intervalStartDate = new Date(2018);
    const intervalEndDate = new Date(2020);
    const dateToCheck = new Date(2019);

    expect(Dates.isBetween(dateToCheck, intervalStartDate, intervalEndDate))
      .toBe(true);
  });

  it('should return that it is NOT between', () => {
    const intervalStartDate = new Date(2018);
    const intervalEndDate = new Date(2020);
    const dateToCheck = new Date(2017);

    expect(Dates.isBetween(dateToCheck, intervalStartDate, intervalEndDate))
      .toBe(false);
  });

  it('when at the range limits, should return that it is between', () => {
    const intervalStartDate = new Date('2019-11-18T10:51:01.240772Z');
    const intervalEndDate = new Date('2020-11-18T10:51:01.240772Z');
    const dateToCheck = new Date('2019-11-18T10:51:01.240772Z');

    expect(Dates.isBetween(dateToCheck, intervalStartDate, intervalEndDate))
      .toBe(true);
  });
});