const fs = require('fs')
const tourData = require('./tour.json')
const restaurantData = require('./restaurants.json')
const mallData = require('./malls.json')
const babyGirlsData = require('./babygirls.json')
const babyBoysData = require('./babyboys.json')

function getRandomSuggestions(type) {
  let length, index, data
  length = 500
  index = Math.floor(Math.random() * length)
  if (type === 'tour') {
    data = tourData[index]
    return data
  } else if (type === 'restaurants') {
    data = restaurantData[index]
    return data
  } else if (type === 'malls') {
    data = mallData[index]
    return data
  } else if (type === 'babygirls') {
    data = babyGirlsData[index]
    return data
  } else if (type === 'babyboys') {
    data = babyBoysData[index]
    return data
  } else {
    return 'Please set a valid parameter'
  }
}

module.exports = getRandomSuggestions
