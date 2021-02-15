var mydata = JSON.parse(data);
var length = mydata.length;
console.log(length);
var random = Math.floor(Math.random() * Math.floor(length));
var LOL = mydata[random].replace("_", "'");
var LOL = mydata[random].replace("<", moment().format("dddd"));
console.log(LOL);
