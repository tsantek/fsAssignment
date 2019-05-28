var fs = require('fs');


// // Challenge 1
// fs.readFile('./challenge1/info.txt', 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data)
// });



// Challenge 2
// let names = fs.readFileSync('./challenge2/info.txt', 'utf-8')
// names = names + 'Name 1\n Name 2\n Name 3\n Name 4\n Name 5\n '
// fs.writeFileSync('./challenge2/info.txt', names)
// console.log(names)



// Challenge 3
// fs.rename('./challenge3/binfo.txt', './challenge3/info.txt', (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
// });



// Challenge 4
// fs.mkdir('./challenge4/copyfolder', { recursive: false }, (err) => {
//     if (err) throw err;
// })
// fs.copyFileSync('./challenge4/info.txt', './challenge4/copyfolder/info.txt');


// Challenge 5
// let removeDash = fs.readFileSync('./challenge5/info.txt', 'utf-8')
// var replaced = removeDash.split('-').join(' ');
// fs.writeFileSync('./challenge5/info.txt', replaced)

// Challenge 6

fs.readdir('./challenge6', function(err, items) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].includes(".txt")) {
            console.log(items[i])
        }
    }
});