const Dates = require('../Dates.js');

/*
This small utility method could be places inside DomainObjects.js,
because it's a function that works over the domain data.
I kept it here just to show an alternative way to ES6 classes.
 */
module.exports = (domainData, config) => {
  return (startDate, endDate) => {
    const dataset = domainData.getSeries(config.key, config.slug);

    return dataset.series.filter(elem => {
      const elemDate = new Date(elem.x);
      return Dates.between(elemDate, startDate, endDate);
    });
  }
}