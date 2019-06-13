const fs = require('fs');

function toDecimal(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x * 100000) / 100000;
    return f;
}

fs.readFile('./Sanitary_Service_Point.geojson', 'utf-8', function (error, data) {
    var obj = {}
    var s = [], ss = [];
    const buf = new Buffer.from(data);
    const features = JSON.parse(buf.toString()).features;
    if (error) {
        return console.log('读取文件失败，内容是' + error);
    }

    Object.keys(features).forEach(function (key) {

        features[key].geometry.coordinates.map((item, index) => {
            //  ss[index] = toDecimal(item);
             ss[index] = parseFloat(item.toFixed(5));
            if (index >= 1 && index != 2) {
                obj['lnglat'] = [ss[0], ss[1]];
                console.log(obj)
            }
        })
    })
})