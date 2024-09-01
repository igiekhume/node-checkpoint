//

// const fs = require("fs")
// fs.readFile('nodetext.txt', (err, data) => {
//     if(err) return console.error(err);
//         console.log(data.toString());

// });

//console.log('Program Ended');


// =====HOW TO CREATE A SERVER======

// const http = require('http')


// const server = http.createServer((req, res) => {
// res.writeHead(200, {'Content-Type': 'text/html'});
// res.end<('<h1>Hello Node</h1>\n')
//  })

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// })


//=====HOW TO CREATE A FILE=====

// const fs = require("fs")

// const data = 'Hello Node';

// fs.writeFile('Welcome.text', data, (err) => {
//     if (err){
//         console.error(err)
//         return;
//     }
//     console.log("Data writting to file")
// })


//=== HOW TO READ FILE

// const fs = require("fs")
// fs.readFile('welcome.text', (err, data) =>{
//     if(err) {
//         return console.error(err);
//     }
//     console.log(data.toString());
// });

//To Generate Password

const generator = require('generate-password');

const password = generator.generate({
    length:10,
    numbers:true,
    symbols:true,uppercase:true,
    excludeSimilarCharacters:false,
    strict:true,
})

console.log(password);
