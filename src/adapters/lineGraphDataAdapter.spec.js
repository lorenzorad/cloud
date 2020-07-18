const DomainObjects = require('../domain/DomainObjects.js');
const lineGraphDataAdapter = require('./lineGraphDataAdapter.js');

describe('lineGraphDataAdapter', () => {
  const domainData = new DomainObjects({});

  // mock all the collaborators, one in this case:
  const getBetween = jest.fn(() => () => 'pippo');
  const config = {
    key: 'any-key',
    slug: 'any-slug'
  };

  it('should return data according to required format', () => {
    const startDate = new Date('2015-08-19T14:00:19.352000Z');
    const endDate = new Date('2016-08-19T14:00:19.352000Z');

    const adapted = lineGraphDataAdapter(getBetween, config)(domainData, startDate, endDate);

    expect(adapted).toStrictEqual({
      data: 'pippo',
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    });
  });

});