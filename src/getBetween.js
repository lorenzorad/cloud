const data = require('../data.json');
const Dates = require('./Dates.js');

const SLUGS = {
  overall: 'aggregation-overall'
};
const KEYS = {
  score: 'score'
}

module.exports = {
  getBetween: (startDate, endDate) => {
    const dataset = data.data
      .find(aggregation => aggregation.slug === SLUGS.overall)
      .details
      .find(series => series.key === KEYS.score);

    return dataset.series.filter(elem => {
      const elemDate = new Date(elem.x);
      return Dates.between(elemDate, startDate, endDate);
    })
  }
}