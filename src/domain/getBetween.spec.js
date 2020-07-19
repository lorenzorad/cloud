const DomainObjects = require('./DomainObjects.js');
const getBetween = require('./getBetween.js');

describe('getBetween', () => {
  const SCORE_SERIES = {
    'series': [
      {
        'y': 111,
        'x': '2019-11-19T14:00:19.352000Z'
      },
      {
        'y': 282,
        'x': '2016-11-19T14:00:19.352000Z'
      }
    ],
    'key': 'my-score'
  };

  const MY_SLUG = {
    'details': [
      SCORE_SERIES
    ],
    'title': 'Overall',
    'type': 'aggregation',
    'id': 42,
    'slug': 'my-slug'
  };

  const RAW_DATA = {
    'data': [
      MY_SLUG
    ]
  };

  const november = 10;
  const domainData = new DomainObjects(RAW_DATA);

  it('returns the subset of data included between given start and end dates', () => {
    const startDate = new Date(2019, november, 18);
    const endDate = new Date(2019, november, 20);
    const config = {
      key: 'my-score',
      slug: 'my-slug'
    }

    const subset = getBetween(domainData, config)(startDate, endDate);

    const expectedSubset = [
      {
        x: '2019-11-19T14:00:19.352000Z',
        y: 111
      }
    ];
    expect(subset).toStrictEqual(expectedSubset);
  });

  it('when start date is missing', () => {
    const endDate = new Date(2019, november, 20);
    const config = {
      key: 'my-score',
      slug: 'my-slug'
    }

    const subset = getBetween(domainData, config)(undefined, endDate);

    const expectedSubset = [
      {
        'y': 282,
        'x': '2016-11-19T14:00:19.352000Z'
      },
      {
        'y': 111,
        'x': '2019-11-19T14:00:19.352000Z'
      }
    ];
    expect(subset).toStrictEqual(expectedSubset);
  });

});
