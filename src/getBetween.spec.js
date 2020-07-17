const exerciseData = require('../data.json');
const DomainObjects = require('./domain/DomainObjects.js');
const getBetween = require('./getBetween.js');

describe('getBetween', () => {
  let domainData;

  beforeEach(() => {
    domainData = new DomainObjects(exerciseData);
  });

  describe('given a start_date and an end_date', () => {

    it('returns the subset of data included between the two', () => {
      const november = 10;
      const startDate = new Date(2019, november, 18);
      const endDate = new Date(2019, november, 19);

      const subset = getBetween(domainData)(startDate, endDate);

      const expectedSubset = [
        {x: '2019-11-18T10:51:01.240772Z', y: 308}
      ];
      expect(subset).toStrictEqual(expectedSubset);
    });
  });

  describe('given the readme example', () => {
    it('returns the readme expected subset', () => {
      const startDate = new Date('2015-08-19T14:00:19.352000Z');
      const endDate = new Date('2015-10-12T07:27:47.493000Z');

      const subset = getBetween(domainData)(startDate, endDate);

      const expectedSubset = [
        {'y': 282, 'x': '2015-08-19T14:00:19.352000Z'},
        {'y': 227, 'x': '2015-10-08T14:45:31.991000Z'},
        {'y': 185, 'x': '2015-10-12T07:27:47.493000Z'}
      ];

      expect(subset).toStrictEqual(expectedSubset);
    });
  });

});
