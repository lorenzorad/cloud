const task1 = require('./task1.js');

describe('task 1', () => {
    it('returns the filtered by dates expected subset', async () => {
      const startDate = '2015-08-19T14:00:19.352000Z';
      const endDate = '2015-10-12T07:27:47.493000Z';

      const dataToPlot = await task1(startDate, endDate);

      const expectedDataToPlot = {
        data: [
          {'y': 282, 'x': '2015-08-19T14:00:19.352000Z'},
          {'y': 227, 'x': '2015-10-08T14:45:31.991000Z'},
          {'y': 185, 'x': '2015-10-12T07:27:47.493000Z'}
        ],
        startDate: '2015-08-19T14:00:19.352Z',
        endDate: '2015-10-12T07:27:47.493Z'
      };

      expect(dataToPlot).toStrictEqual(expectedDataToPlot);
    });
});