function ajax(options) {
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        return alert("当前浏览器不支持HTTPRequest");
    }
    var method = "";
    var data = "";
    var url = options.url;
    var isAsync = typeof options.isAsync === 'undefined' ? true : options.isAsync;
    var success = typeof options.success === 'function' ? options.success : function () {};
    if (options.method) {
        method = options.method.toUpperCase();
    } else {
        method = "GET";
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            }
        }
    }
    if (typeof options.data === 'object') {
        for (var prop in options.data) {
            data += prop + '=' + options.data[prop] + '&';
        }
        data.slice(0, data.length - 1);
    } else {
        data = options.data;
    }
    if (method === 'GET') {
        xhr.open(method, url + '?' + data, isAsync);
        xhr.send();
    } else{
        xhr.open(method, url, isAsync);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencode');
        xhr.send(data);
    }
}







