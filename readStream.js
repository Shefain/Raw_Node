const fs = require('fs');

const readstream = fs.createReadStream(`${__dirname}/myfile.txt`, 'utf-8');
const writestream = fs.createWriteStream(`${__dirname}/output.txt`);




// readstream.on('data', (chunk) => {
//   writestream.write(chunk);
// });


//easy way to write same method as above 
readstream.pipe(writestream)
