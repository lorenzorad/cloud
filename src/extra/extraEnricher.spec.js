const extraEnricher = require('./extraEnricher.js');

describe('extraEnricher', () => {

  it('should enrich the corresponding Date', () => {
    const aDate = '2015-11-13T09:32:26.980000Z';
    const extraData = [{
      x: aDate,
      y: {
        'quiz_session_type': 'Test',
        'priority': 23,
        'score_delta': -23,
        'quiz_session': 25517,
        'quiz_config': 257,
        'quiz_config_title': 'Platform Reference for Google'
      }
    }];
    const dataToPlot = [{
      x: aDate,
      y: 555
    }];

    const expectedFormattedExtra = `
      <div>Platform Reference for Google</div>
      <div>Test</div>
      <div>priority: 23, score: -23, quiz session: 25517, quiz config: 257</div>`.replace(/\s\s/g,'');

    const expectedData = [{
      x: aDate,
      y: 555,
      extra: expectedFormattedExtra
    }];

    expect(extraEnricher(extraData, dataToPlot)).toStrictEqual(expectedData);
  });
});