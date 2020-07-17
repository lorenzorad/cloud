/*
 * Created to hide the raw json to our project
 * and thus to rely on domain objects that can change in the future
 * without the need to change all the other functions/classes where the data is needed
 */
module.exports = class DomainObjects {
  constructor(rawData) {
    this.rawData = rawData;
  }

  getSlug(slugId) {
    return this.rawData.data
      .find(aggregation => aggregation.slug === slugId)
  }

  getSeries(key, slugId) {
    const slug = this.getSlug(slugId);

    return slug.details
      .find(series => series.key === key);
  }
}