const Dates = require('../Dates.js');

/*
This small utility method could be places inside DomainObjects.js,
because it's a function that works over the domain data.
I kept it here just to show an alternative way to ES6 classes.
 */
module.exports = (domainData, config) => {
  return (startDate, endDate) => {
    const dataset = domainData.getSeries(config.key, config.slug);
    const datasetOrderByDate = dataset.series.sort(sortByDateAscStrategy);

    return datasetOrderByDate.filter(elem => {
        const elemDate = new Date(elem.x);

        const safeStartDate = startDate || new Date(datasetOrderByDate[0].x);
        return Dates.isBetween(elemDate, safeStartDate, endDate);
      });
  }
}

const sortByDateAscStrategy = (elem1, elem2) => {
  return new Date(elem1.x) - new Date(elem2.x);
}