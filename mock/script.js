// script.js
const suggest = require("get-random-suggestions");
console.log(suggest("tour"));
// output
// { area: 'Chhattisgarh', place: 'Patna' }
console.log(suggest("restaurants"));
// output
// { place: 'Bangalore', restaurant_name: 'Zesty Zest' }
console.log(suggest("malls"));
// output
// { place: 'Chennai', mall_name: 'Elite Vogue Hub' }
