const fs = require('fs');
fs.readFile('./Sanitary_Service_Point.geojson', 'utf-8', function (error, data) {
    const buf = new Buffer(data);
    const features = JSON.parse(buf.toString()).features;
    if (error) {
        return console.log('读取文件失败，内容是' + error)
     }
     console.log(features.OWNER)
    //  features.geometry.map((item) =>{
    //     console(item.geometry.coordinates)
    // })
})