/*
 * Created to hide the raw json to our project
 * and thus to rely on domain objects that can change in the future
 * without the need to change all the other functions/classes where the data is needed
 */
module.exports = class DomainObjects {
  constructor(rawData) {
    this.rawData = rawData;
  }

  getSlug(slugName) {
    return this.rawData.data
      .find(aggregation => aggregation.slug === slugName)
  }

  getSeries(key, slugName) {
    const slug = this.getSlug(slugName);

    return slug.details
      .find(series => series.key === key);
  }

  getExtras(slugName) {
    return this.getSeries('extra', slugName);
  }
}