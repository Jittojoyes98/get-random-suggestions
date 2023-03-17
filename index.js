const fs=require("fs")
const tourData=require("./tour.json")

function getRandomSuggestions(type){
    let length,index,place;
    if(type==="tour"){
        length = tourData.length;
        index = Math.floor(Math.random() * length);
        place = tourData[index];
        return place;
    }
    else{
        return "Please set a valid parameter"
    }
}

module.exports = getRandomSuggestions