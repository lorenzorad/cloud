const rawData = require('../src/repository/data.json');
const task2 = require('./task2.js');

describe('task 2', () => {
  it('The series (input) does not contains start_date', async () => {
    const startDate = undefined;
    const endDate = '2015-10-12T07:27:47.493000Z';

    const dataToPlot = await task2(startDate, endDate);

    const expectedDataToPlot = {
      data: [
        {'y': 282, 'x': '2015-08-19T14:00:19.352000Z'},
        {'y': 227, 'x': '2015-10-08T14:45:31.991000Z'},
        {'y': 185, 'x': '2015-10-12T07:27:47.493000Z'}
      ],
      startDate: undefined,
      endDate: '2015-10-12T07:27:47.493Z'
    };

    expect(dataToPlot).toStrictEqual(expectedDataToPlot);
  });

  it('The series (input) does not contains end_date', async () => {
    const startDate = '2019-11-19T14:00:19.352000Z';
    const endDate = undefined;

    const dataToPlot = await task2(startDate, endDate);

    const expectedDataToPlot = {
      data: [
        {
          'x': '2019-11-19T17:14:34.796982Z',
          'y': 308
        }
      ],
      startDate: '2019-11-19T14:00:19.352Z',
      endDate: undefined
    };

    expect(dataToPlot).toStrictEqual(expectedDataToPlot);
  });

  it('The series (input) does not contains both dates', async () => {
    const startDate = undefined;
    const endDate = undefined;

    const dataToPlot = await task2(startDate, endDate);

    const expectedDataToPlot = {
      data: rawData.data[0].details[0].series,
      startDate: undefined,
      endDate: undefined
    };

    expect(dataToPlot).toStrictEqual(expectedDataToPlot);
  });
});