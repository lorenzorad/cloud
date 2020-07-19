/**
 * @param extraData Array of {x: Date as String, y: Object}
 * @param dataToPlot Array of {x: Date as String, y: Number}
 * @returns Array of {x: Date as String, y: number, extra: Object}
 */
module.exports = (extraData, dataToPlot) => {
  return dataToPlot.map(plotElem => {
    const extraElemFound = extraData.find(extraElem => extraElem.x === plotElem.x);
    if (extraElemFound) {
      plotElem.extra = extraFormatter(extraElemFound.y);
    }

    return plotElem;
  });
}

function extraFormatter({
  quiz_session_type,
  priority,
  score_delta,
  quiz_session,
  quiz_config,
  quiz_config_title
}) {
  return `
    <div>${quiz_config_title}</div>
    <div>${quiz_session_type}</div>
    <div>priority: ${priority}, score: ${score_delta}, quiz session: ${quiz_session}, quiz config: ${quiz_config}</div>`.replace(/\s\s/g,'');
}