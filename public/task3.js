const DataRepository = require('../src/repositories/DataRepository.js');
const getBetween = require('../src/domain/getBetween.js');
const lineGraphDataAdapter = require('../src/adapters/lineGraphDataAdapter.js');
const lineGraphWithExtraDataAdapter = require('../src/adapters/lineGraphWithExtraDataAdapter.js');

module.exports = async (startDate, endDate) => {
  const domainData = await new DataRepository().retrieve(); // simulates async op eg network call
  const config = {
    key: 'score',
    slug: 'aggregation-overall'
  };

  return lineGraphWithExtraDataAdapter(getBetween, config, lineGraphDataAdapter)(
    domainData,
    startDate && new Date(startDate),
    endDate && new Date(endDate)
  );
}