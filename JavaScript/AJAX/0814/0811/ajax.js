var $ = {
    ajax: function (options) {
        //参数处理
        var url = options.url;
        if (url == undefined) {
            throw new Error("url: lack of url");
            return;
        }
        var type = options.type;
        if (type === undefined) {
            type = "GET";
        }
        if (type != "GET" && type != "POST") {
            throw new Error("type: false-type");
            return;
        }

        var xhr = null;
        //兼容性
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        //当准备状态值改变的时候触发事件
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    if ((typeof options.success) === "function") {
                        options.success(xhr.responseText);
                    }
                }
            }
        }

        xhr.open(type, url);
        if (type == "POST") {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send();
        } else if (type == "GET") {
            xhr.send(null);
        }

    }
}