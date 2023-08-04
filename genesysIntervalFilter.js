function genesysIntervalFilter() {

  var currentDate = new Date();
  var millisecond = currentDate.getMilliseconds()
  var second = currentDate.getSeconds()
  var minute = currentDate.getMinutes()
  var hour = currentDate.getUTCHours()
  var currentDay = currentDate.getUTCDate();
  var month = currentDate.getMonth()
  var currentYear = currentDate.getFullYear()

  if ( currentDay === 31 || currentDay === 30 || currentDay === 29 ) {

    var lastDay_of_lastMonth = new Date(currentYear, month - 1, 0).getDate()

    if ( lastDay_of_lastMonth < 31 ) { currentDay = lastDay_of_lastMonth }

  }
  
  if ( month === 0 ) {

    currentYear=-1
    month = 12

  }

  const date_array = {currentDate, millisecond, second, minute, hour, currentDay, month, currentYear}

  return date_array
  
}

module.exports = { genesysIntervalFilter }