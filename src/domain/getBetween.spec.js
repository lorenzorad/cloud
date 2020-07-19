const DomainObjects = require('./DomainObjects.js');
const getBetween = require('./getBetween.js');

const SCORE_SERIES = {
  'series': [
    {
      'y': 111,
      'x': '2019-11-19T14:00:19.333000Z'
    },
    {
      'y': 282,
      'x': '2016-11-19T09:00:19.222000Z'
    }
  ],
  'key': 'my-score'
};

const RAW_DATA = {
  'data': [
    {
      'details': [
        SCORE_SERIES
      ],
      'title': 'Overall',
      'type': 'aggregation',
      'id': 42,
      'slug': 'my-slug'
    }
  ]
};

describe('getBetween', () => {
  const november = 10;
  const config = {
    key: 'my-score',
    slug: 'my-slug'
  }
  let domainData;

  beforeEach(() => {
    domainData = new DomainObjects(RAW_DATA);
  });

  it('returns the subset of data included between given start and end dates', () => {
    const startDate = new Date(2019, november, 18);
    const endDate = new Date(2019, november, 20);
    const subset = getBetween(domainData, config)(startDate, endDate);

    const expectedSubset = [
      {
        x: '2019-11-19T14:00:19.333000Z',
        y: 111
      }
    ];
    expect(subset).toStrictEqual(expectedSubset);
  });

  it('when start date is missing, should filter by end date only', () => {
    const startDate = undefined;
    const endDate = new Date(2018, november, 20);
    const subset = getBetween(domainData, config)(startDate, endDate);

    const expectedSubset = [
      {
        'y': 282,
        'x': '2016-11-19T09:00:19.222000Z'
      }
    ];
    expect(subset).toStrictEqual(expectedSubset);
  });


  it('when end date is missing, should filter by start date only', () => {
    const startDate = new Date('2017-01-01T14:00:19.352000Z');
    const endDate = undefined;
    const subset = getBetween(domainData, config)(startDate, endDate);

    const expectedSubset = [
      {
        'y': 111,
        'x': '2019-11-19T14:00:19.333000Z'
      }
    ];
    expect(subset).toStrictEqual(expectedSubset);
  });

  it('when both dates missing, should get all the set', () => {
    const startDate = undefined;
    const endDate = undefined;
    const subset = getBetween(domainData, config)(startDate, endDate);

    const expectedSubset = [
      {
        'y': 282,
        'x': '2016-11-19T09:00:19.222000Z'
      },
      {
        'y': 111,
        'x': '2019-11-19T14:00:19.333000Z'
      }
    ];
    expect(subset).toStrictEqual(expectedSubset);
  });

});
