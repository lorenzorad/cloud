module.exports = (getBetween, config) => {
  return (domainData, startDate, endDate) => {
    const dataToPlot = getBetween(domainData, config)(startDate, endDate);

    return {
      data: dataToPlot,
      startDate: startDate && startDate.toISOString(),
      endDate: endDate && endDate.toISOString()
    };
  }
};