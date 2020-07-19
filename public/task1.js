const DataRepository = require('../src/repositories/DataRepository.js');
const getBetween = require('../src/domain/getBetween.js');
const lineGraphDataAdapter = require('../src/adapters/lineGraphDataAdapter.js');

module.exports = async (startDate, endDate) => {
  const domainData = await new DataRepository().retrieve(); // simulates async op eg network call
  const config = {
    key: 'score',
    slug: 'aggregation-overall'
  };

  return lineGraphDataAdapter(getBetween, config)(domainData, new Date(startDate), new Date(endDate));
}