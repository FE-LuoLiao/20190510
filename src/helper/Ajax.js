//整个项目所需数据请求   get  post 

class Ajax {
    get(url, options, call) {

        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (typeof call === "function") {
                    let data = xmlhttp.responseText;
                    if (options.type == 'json') {
                        data = JSON.parse(xmlhttp.responseText)
                    }
                    call(data);
                }
            }
        }
        xmlhttp.open("get", url, true);
        xmlhttp.send();
    }
}

export default new Ajax();
