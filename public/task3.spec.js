const task3 = require('./task3.js');

describe('task 3', () => {
  it('returns the filtered by dates expected subset', async () => {
    const startDate = '2015-08-19T14:00:19.352000Z';
    const endDate = '2015-10-12T07:27:47.493000Z';

    const dataToPlot = await task3(startDate, endDate);

    const expectedDataToPlot = {
      data: [
        {
          "extra": " <div>Platform Reference for AWS</div> <div>Study</div> <div>priority: 282, score: null, quiz session: 6775, quiz config: 226</div>",
          "x": "2015-08-19T14:00:19.352000Z",
          "y": 282
        },
        {
          "extra": " <div>Platform Reference for AWS</div> <div>Study</div> <div>priority: 55, score: -55, quiz session: 19037, quiz config: 226</div>",
          "x": "2015-10-08T14:45:31.991000Z",
          "y": 227
        },
        {
          "extra": " <div>Platform Reference for AWS</div> <div>Study</div> <div>priority: 42, score: -42, quiz session: 19337, quiz config: 226</div>",
          "x": "2015-10-12T07:27:47.493000Z",
          "y": 185
        }
      ],
      startDate: '2015-08-19T14:00:19.352Z',
      endDate: '2015-10-12T07:27:47.493Z'
    };

    expect(dataToPlot).toStrictEqual(expectedDataToPlot);
  });
});