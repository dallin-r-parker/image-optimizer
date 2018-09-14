const sharp = require('sharp');
const path = require('path')
const img = path.join(__dirname, 'images/splash.jpg')

// console.log('img: ', img)
sharp(img)
  .resize(200, 200)
  .blur(15)
  .min()
  .toFile('output_min.png')
  .then(() => {
    console.log('all is good')
  })