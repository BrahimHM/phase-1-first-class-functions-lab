// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(arr){
  return arr.slice(0,2)
}
function returnLastTwoDrivers(arr){
   return arr.slice(-2)
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
  return function(){
    return num*num
  }
}
function fareDoubler(num){
    function double(){
        return num*2
      }
    return double()
}
function fareTripler(num){
    function triple(){
        return num*3
      }
    return triple()
}
function selectDifferentDrivers(arrayOfDrivers, fun){
    return fun(arrayOfDrivers)
}