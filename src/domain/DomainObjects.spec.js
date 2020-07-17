const DomainObjects = require('./DomainObjects.js');

describe('domain objects', () => {
  const SCORE_SERIES = {
    "series": [
      {
        "y": 282,
        "x": "2015-08-19T14:00:19.352000Z"
      }
    ],
    "key":"score"
  };

  const MY_SLUG = {
    "details": [
      SCORE_SERIES,
      {
        "series":[
          {
            "y":{
              "quiz_session_type":"Study",
              "priority":282,
              "score_delta":null,
              "quiz_session":6775,
              "quiz_config":226,
              "quiz_config_title":"Platform Reference for AWS"
            },
            "x":"2015-08-19T14:00:19.352000Z"
          }
        ],
        "key":"extra"
      }
    ],
    "title": "Overall",
    "type": "aggregation",
    "id": 42,
    "slug": "my-slug"
  };

  const RAW_DATA = {
    "data": [
      MY_SLUG
    ]
  };

  describe('given raw json data', () => {
    let domainData;

    beforeEach(() => {
      domainData = new DomainObjects(RAW_DATA);
    });

    it('get a slug', () => {
      expect(domainData.getSlug('my-slug')).toStrictEqual(MY_SLUG);
    });

    it('get a series', () => {
      expect(domainData.getSeries('score', 'my-slug')).toStrictEqual(SCORE_SERIES);
    });

  });
});