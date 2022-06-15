var fs = require('fs');

// //sinhrono 
// var readMe = fs.readFileSync('readME.txt', 'utf8');
// //console.log(readMe);

// fs.writeFileSync('writeMe.txt', readMe);

// //asinhrono
// fs.readFile('readME.txt', 'utf8', function(err, data){
//     console.log(data);
// });

// console.log('test');

// fs.readFile('readME.txt', 'utf8', function(err,data){
//     fs.writeFile('writeMe.txt', data);
// })



// //deleting a file
// fs.unlink('writeMe.txt');

//sinhrono
// fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');

// //asinhrono
// fs.mkdir('stuff', function(){
//     fs.readFile('readME.txt', 'utf8', function(err,data){
//         fs.writeFile('./stuff/writeMe.txt', data);
//     });
// });

// removing directories
fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff');
});

