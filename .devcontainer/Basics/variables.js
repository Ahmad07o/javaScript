/*"use strict"; // treat all js code as new version
const accId=1122
let accName='Ahmad'
var accEmail='ahmadButt.com'
accCity="gujrawala"
console.log("Before change values")
console.table([accId,accName,accEmail,accCity])
console.log("After change values")
accName="Eman"
accEmail="emanshahid@gmail.com"
accCity="Sialkot"
console.table([accId,accName,accEmail,accCity])*/
//alert() we are using nodejs not browser console
//for documentation read EcamaScrpit
// data types
//number=> 2 power 53
//string
// boolean
// symbol=>unique
//bigInt
//null the data type of null is object
//undefined

/*let num="33"

console.log("Before type casting:",typeof(num))
let val=Number(num)
console.log("After type casting:",typeof(val),"/Value:",val);
let ahmad="5year"
console.log("Type:",typeof ahmad)
console.log("Type casting");
let cd=Number(ahmad)
console.log("type:",typeof cd);
console.log("print a value:", cd)*/
//let score=undefined
//console.log("Data type before casting:",typeof (score))
//console.log("After type casting");
//let scor=String(score)
//console.log("Data type:",typeof scor);
//console.log("value:",scor)
// type casting
// "33"=>33
//"33abc"=>NaN
//true=>1, false=>0
//""=>false
//"ahmad"=>true
//************operation********
//console.log("2">1)
//console.log("h"<=1);
//console.log("h">1);
//console.log(true>=1)
//console.log(false<1);
//console.log(null>0);
//console.log(null<0);
//console.log(null>=0)
//console.log(null==0)
//premitive values(stack), non premitive (heap)
/*
let email1="Emanshaid@gmail.com"
let email2=email1
console.log(email1);
console.log("before changing value:",email2);
email2="ahmadjaved001@umt"
console.log("after changing value of email2:",email2);
name= new String("ahmad")//we can declare string in this way also
console.log( name.toUpperCase());//convert it into uppercase
console.log(name);
const email3="hello there"
console.log(email3.slice(2))//slice is use to break string and make it new string
console.log(email2.charAt(3))
console.log(email2.indexOf('a'))
const str=String("      just    ")
console.log(str.trim())//remove extra spaces
*/
// number and maths
//const score=400
//const balance=new Number(500)//in this way it will implicitly set balance datatype to Number
//console.log(score)
//console.log(balance)
//methods of numbers 
//console.log(balance.toString())
           //dates
//let myDate=new Date()
//console.log(myDate.toString())         

//Arrays
/*
const numbers=[1,2,3,4,5]
console.log(numbers)
const array=new Array(1,2,3,4,5)// another way to decalre array
console.log(numbers.length)
console.log(numbers.push(6))
console.log(numbers);
console.log(numbers.includes(6))
console.log(numbers.indexOf(6))
console.log(numbers.pop())
numbers.unshift(87)//  this will add (87) at first elment of the array 
numbers.shift()// this will remove first element of the array
//const myArr=numbers.slice(1,3) //this will return an array that contain index 1 to 2 element 
//console.log("A",myArr)
//number.splice(1,3) it  will return array that contain 1 to 3 element of index and will remove those elements from original array
*/
//const superStars=["sharukh Khan","Suleman khan","amir khan"]
//const singers=["honey singh","karan ujla","ap dhilon"]
//superStars.push(singers)//push function will push singer whole array as an element into superStar array
//console.log(superStars);
//const allStars=singers.concat(superStars)//concat return be new array so we have to decalre new array to save that array
//console.log(allStars)
//const newArray=[...superStars,...singers]//this spread operator and will merge these two arrays
//console.log(newArray)
//console.log(Array.isArray("Ahmad"))//in this way we can check weather it is array or not
//onsole.log(Array.from("Ahmad"))
const numbers=[1,2,3,[4,5,6],7,8,9]
const newFlatArray=numbers.flat(Infinity)//this way we can flat our array into single array
console.log(newFlatArray)
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))


