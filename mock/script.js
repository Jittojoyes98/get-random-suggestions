// script.js
const suggest = require('get-random-suggestions')
console.log(suggest('tour'))
// output
// { area: 'Chhattisgarh', place: 'Patna' }
console.log(suggest('restaurants'))
// output
// { place: 'Bangalore', restaurant_name: 'Zesty Zest' }
console.log(suggest('malls'))
// output
// { name: 'Aaliyah', meaning: 'Exalted, Noble', religion: 'Muslim' }
console.log(suggest('babygirls'))
// output
// { place: 'Chennai', mall_name: 'Elite Vogue Hub' }
console.log(suggest('babyboys'))
// output
// { name: 'Zain', meaning: 'Grace', religion: 'Muslim' }
