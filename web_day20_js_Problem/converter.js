
// 12 inch = 1 foot
// 1 foot = 12 inch
function inchTOFeet(inch){
    const feet = inch / 12;
    return feet;
}
// 75 inch = 5 feet
function inchToFeet2 (inch){
    const feetFaction = inch / 12;
    // console.log(feetFaction);
    const feetNumber = parseInt(feetFaction);
    // console.log(feetNumber);
    const inchReaming =  inch % 12;
    return feetNumber + " feet and " + inchReaming + " inch";
}
const shuvoHeight = inchTOFeet(75); 
// console.log(shuvoHeight);

const shuvoHeight2 = inchToFeet2(75);
//  console.log(shuvoHeight2);

 // miles to km
 // 1  mile = 1.60934 km
 function milesToKm(miles){
    const km = miles * 1.60934;
    return km;
 }
 const miles = milesToKm(100);
//  console.log(miles);
//  console.log(milesToKm(300));

 //km to miles 
 // 1 km = 0.621371
 function kmToMiles(km){
    const miles = km * 0.621371;
    return miles;
 }
 const km = kmToMiles(100);
 console.log(km);
 console.log(kmToMiles(300));