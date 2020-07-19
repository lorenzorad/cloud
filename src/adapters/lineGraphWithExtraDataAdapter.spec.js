const DomainObjects = require('../domain/DomainObjects.js');
const lineGraphWithExtraDataAdapter = require('./lineGraphWithExtraDataAdapter.js');

describe('lineGraphWithExtraDataAdapter', () => {
  const config = {
    key: 'any-key',
    slug: 'any-slug'
  };
  const getBetween = jest.fn(() => () => 'pippo');
  const lineGraphDataAdapter = jest.fn(() => () => {
    return {data: []};
  });

  it('should return data according to required format', () => {
    const domainData = new DomainObjects({
      data: [{
        details: [{
          series: [],
          key: 'extra'
        }],
        slug: 'any-slug'
      }]
    });
    const startDate = new Date('2015-08-19T14:00:19.352000Z');
    const endDate = new Date('2016-08-19T14:00:19.352000Z');

    const adapted = lineGraphWithExtraDataAdapter(getBetween, config, lineGraphDataAdapter)(domainData, startDate, endDate);

    expect(adapted).toStrictEqual({
      data: [],
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    });
  });

});