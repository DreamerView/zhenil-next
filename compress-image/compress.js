const sharp = require('sharp');
const path = require('path');
const testFolder = path.resolve(__dirname,'../public/emoji/');
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        sharp(path.resolve(__dirname,'../public/emoji/'+file)).toFormat('webp').webp({ quality: 100 }).resize(80,80).toFile(path.resolve(__dirname,'../public/emoji-small/'+file));
    });
});


// const name = 'bar_chart.webp';
// const name2 = 'briefcase.webp';

// sharp(path.resolve(__dirname,'../public/emoji/'+name)).toFormat('webp').webp({ quality: 100 }).resize(60,60).toFile(path.resolve(__dirname,'../public/emoji-small/'+name));
