const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, 'src_images');
const newNamePath = resolve(__dirname, 'images');

var i = 1;
// Get an array of the files inside the folder
let files = readdirSync(imageDirPath);
// Loop through each file that was retrieved
files.forEach(file => rename(
  imageDirPath + `/${file}`,
  newNamePath + `/${i++ + '.jpg' }`,
  err => console.log(err)
));




// files.forEach(file => { 

//     const oldPath = imageDirPath + `/${file}`;

//     // lowercasing the filename
//     const newPath = imageDirPath + `/${i + '.jpg' }`;

//     // rename(
//     //     oldPath,
//     //     newPath,
//     //     err => console.log(err)
//     //   );
    
//     console.log('File name ', file, ' idx ', i++ , ' newPath ', newPath);

// });