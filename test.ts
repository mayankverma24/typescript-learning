function sayHello() {
    //return `Say Hello to My Little Friend`    
    var b = '123';
    return b;
}

function newfunc() {
    var a = sayHello();
    console.log(a);
}

newfunc();

// import the fs module
const fs = require('fs');

// read the file into raw data
let rawdata = fs.readFileSync('testdata.json');

// parse the raw data into meaningful JSON format
let web = JSON.parse(rawdata);
let author = web["author"];

//console.log(author);

let website = author["website"]
console.log(website)

let taglineDirect = web["author"]["website"]["name"]
console.log(taglineDirect);

let googleBar = {
    title: 'toolTip',
    fontSize: 'font_size'
};
let data = JSON.stringify(googleBar, null, 3);
fs.writeFileSync('testdata1.json', data);