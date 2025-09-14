/**
 * leapYear.js
 * @author Firstname Lastname
 * @date 2022-01-31
 * @description Check if a year is a leap year
 * @param {number} year
 * @returns {boolean}
 * year will be a leap year if the year is divisible by 4.
 * year will be a leap year if the year is divisible by 4 but not divisible by 100, or if the year is divisible by 400.
 * @example
 * isLeapYear(2000) // true
 * isLeapYear(1900) // false
 * isLeapYear(2012) // true
 * isLeapYear(2013) // false
 */

function isLeapYear(year){
    if(year % 4 === 0){
        // return true;
        return year % 4 ===0 && year % 100 !==0 || year % 400 ===0;

    } else {
        return false;
    }
}
const isLeap = isLeapYear(2052);
// console.log(isLeap);
/**
 * thos year that is not divisable by 100 , if the year is divisible by 400 then it is a leap year
 */

function isLeapyear2(year){
    if(year %100 !==0 && year % 4 ===0){
        return true;
    }
    else  if(year % 100 ===0 && year % 400 ===0){
        return true;
    }
    else{

        return false;
    }
}
const isLeap2 = isLeapyear2(2100);
const isLeap3 = isLeapyear2(1900);
const isLeap4 = isLeapyear2(2000);
const isLeap5 = isLeapyear2(2052);
const isLeap6 = isLeapyear2(2400);
console.log(isLeap2, isLeap3, isLeap4, isLeap5, isLeap6);