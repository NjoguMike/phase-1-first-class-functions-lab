// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function (array2){
    return array2.slice(array2.length-2, array2.length )
}
const selectingDrivers = new Array( returnFirstTwoDrivers,returnLastTwoDrivers)

function createFareMultiplier (int){
    return function(fare){
        return fare * int
    }
}
const fareDoubler = function(returnVal){
    return returnVal * 2
}

const fareTripler = function(value){
    return value * 3
}
function selectDifferentDrivers (drivers, arg2){
    
    if (arg2 === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers)
    }
    else if ( arg2 === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)}
}