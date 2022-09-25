const sharp = require('sharp');
const path = require('path');
const testFolder = path.resolve(__dirname,'../public/services/convert');
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        sharp(path.resolve(__dirname,'../public/services/convert/'+file)).toFormat('webp').webp({ quality: 100 }).resize({width:800,height:800}).toFile(path.resolve(__dirname,'../public/services/'+path.parse(file).name+'.webp'));
    });
});


// const name = 'bar_chart.webp';
// const name2 = 'briefcase.webp';

// sharp(path.resolve(__dirname,'../public/emoji/'+name)).toFormat('webp').webp({ quality: 100 }).resize(60,60).toFile(path.resolve(__dirname,'../public/emoji-small/'+name));
