
// creation of new File. 
 const fs = require("fs");
// fs.writeFile("message.txt", "Hello!",(err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   }); 

// for Reading the File.
  fs.readFile('./message.txt', "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });