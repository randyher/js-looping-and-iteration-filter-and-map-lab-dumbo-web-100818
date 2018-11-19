function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  new_arr = driversWithRevenueOver(drivers, revenue)
  return new_arr.map(function(driver){
    return driver.name
  })
}

function exactMatch(drivers, obj){

  if (Object.keys(obj)[0] == 'name'){
  return drivers.filter(function(driver){
    return driver.name == obj.name
  })
  }

  if (Object.keys(obj)[0] == 'revenue'){
  return drivers.filter(function(driver){
    return driver.revenue == obj.revenue
  })
  }

}

function exactMatchToList(drivers, revenue){
  new_arr = exactMatch(drivers, revenue)
  return new_arr.map(function(driver){
    return driver.name
  })
}
