const Dates = require('./Dates.js');

const SLUGS = {
  overall: 'aggregation-overall'
};
const KEYS = {
  score: 'score'
}

module.exports = (domainData) => {
  return (startDate, endDate) => {
    const dataset = domainData.getSeries(KEYS.score, SLUGS.overall);

    return dataset.series.filter(elem => {
      const elemDate = new Date(elem.x);
      return Dates.between(elemDate, startDate, endDate);
    });
  }
}