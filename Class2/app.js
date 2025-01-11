let fs = require('fs');

// fs.open('mytxtfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// const { open} = require('fs/promises');

// async function openFile(fileName, data) {
//   try {
//     const file = await open(fileName, 'w');
//     await file.write(data);
    
//     console.log(`Opened file ${fileName}`);

//   } catch (error) {
//     console.error(`Got an error trying to open the file: {error.message}`);
//   }
// }
// let content  = "<h2>Hello World</h2>"
// openFile('demo.html', content);


// async function addDataToHtml(fileName, dataToAdd) {
//     try {
//       let htmlContent = fs.readFile(fileName, 'utf-8');
//       htmlContent = htmlContent.replace('</body>', `${dataToAdd}</body>`);
//       fs.writeFile(fileName, htmlContent);
//       console.log('Data added to the HTML file successfully!');
//     } catch (error) {
//       console.error(`Error: ${error.message}`);
//     }
//   }
  
//   // Usage
//   const newData = '<p>This is a new paragraph added to the HTML file.</p>';
//   addDataToHtml('index.html', newData);


// fs.writeFile('tasks1.txt', 'This is my text', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
//   });

//   fs.unlink('tasks1.txt', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
//   });

//   fs.rename('tasks.txt', 'task1.txt', function (err) {
//     if (err) throw err;
//     console.log('rename file!');
//   });

let url = require('url')
let adr = "https://github.com/fatimashahzad00/nodejs";
let q = url.parse(adr, true)

console.log(q);
// console.log(q.hostname);
// console.log(q.href);
