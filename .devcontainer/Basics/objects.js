//singeltone:when we declare objects as litreals so singletone doesnot created
//objects litreals
//declareing symbol
const sym=Symbol("key1")
const jsUser={
    name:"Ahmad",
    [sym]:"key1",//thats how you can use symbol in objects
    age:20,
    "full name":"Ahmad bin javed",
    email:"aj1202@gmail.com",
    location:"Gujranwala",
    isLoggedIn:false,
    lastLoggedIn:["monday","tuesday"]
}
//console.log(jsUser.email);
//console.log(jsUser["email"])
//you cant access full name by dot operator so we have to use square brackets method
//console.log(jsUser["full name"]);
//console.log(typeof(jsUser[sym]))
jsUser.email="ahmadjaved098@mgamil.com"//that how you can chnange values of attribute of object
//console.log(jsUser)
//Object.freeze(jsUser)//now there will be no changes 
jsUser.greeting=function()//this is how you can create fumction with objects 
{
    console.log(`hello ${this.name}`)//by using back tics and this operator you can access attributes of objects
}
console.log(jsUser.greeting())