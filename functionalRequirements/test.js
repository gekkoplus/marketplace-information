const moment = require('moment');

const functionalRequirementsCheck = report => {

  const problems = [];

  // if you run a Gekko backtest and the strategy does not perform any trades
  // gekko won't give you a report.
  if(!report) {
    problems.push(`Strategy did do any trade during highlight`);
  } else {
    const duration = moment(report.endTime).diff(moment(report.startTime), 'd');

    if(report.trades / duration > 10) {
      problems.push(`Strategy did more than 10 trades per day.`)
    }

    if(report.alpha / duration < -1) {
      problems.push(`Strategy lost more than 1% daily compared to market.`);
    }

    if(report.trades / duration * 7 < 0.5) {
      problems.push(`Strategy did less than 1 trade per two weeks.`);
    }

    if(report.exposure < 0.025) {
      problems.push(`Strategy had less than 2.5% exposure`);
    }
  }

  return {
    problems,
    passed: problems.length === 0
  }
}

module.exports = functionalRequirementsCheck;