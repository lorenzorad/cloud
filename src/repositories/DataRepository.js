const DomainObjects = require('../domain/DomainObjects.js');

module.exports = class DataRepository {
  async retrieve() { // to simulate and async op eg HTTPS API call
    const data = require('./data.json');
    return new DomainObjects(data);
  }
}