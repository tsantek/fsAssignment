var fs = require('fs');


// // Challenge 1
// fs.readFile('./challenge1/info.txt', 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data)
// });



// Challenge 2
let names = fs.readFileSync('./challenge2/info.txt', 'utf-8')
names = names + 'Name 1\n Name 2\n Name 3\n Name 4\n Name 5\n '
fs.writeFileSync('./challenge2/info.txt', names)
console.log(names)



// // // Challenge 3
// fs.rename('./challenge3/binfo.txt', './challenge3/info.txt', (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
// });