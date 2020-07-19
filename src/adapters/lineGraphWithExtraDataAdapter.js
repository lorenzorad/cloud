const extraEnricher = require('../extra/extraEnricher.js');

/**
 *
 * @param getBetween
 * @param config
 * @param lineGraphDataAdapter
 * @returns {function(*=, *=, *=): {data: Object, endDate: (string), startDate: (string)}}
 */
module.exports = (getBetween, config, lineGraphDataAdapter) => {
  return (domainData, startDate, endDate) => {
    const dataToPlot = lineGraphDataAdapter(getBetween, config)(
      domainData,
      startDate && new Date(startDate),
      endDate && new Date(endDate)
    );
    const dataWithExtra = extraEnricher(domainData.getExtras(config.slug), dataToPlot);

    return {
      data: dataWithExtra,
      startDate: startDate && startDate.toISOString(),
      endDate: endDate && endDate.toISOString()
    };
  }
};