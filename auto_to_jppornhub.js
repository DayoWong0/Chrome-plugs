// ==UserScript==
// @name         pornhub自动跳转日本站
// @name:zh-CN   pornhub自动跳转日本站
// @name:en      auto to pornhub jp
// @updateURL    https://raw.githubusercontent.com/chengziqaq/Chrome-plugs/master/auto_to_jppornhub.js
// @namespace    http://tampermonkey.net/
// @version      0.4
//@description:zh-cn pornhub跳转日本站
// @description:en  auto jump to pornhub jp
// @author       You
// @match        https://*.pornhub.com/*
// @grant        none
// @connect      pornhub.com
// @connect      www.pornhub.com
// ==/UserScript==

(function() {
    'use strict';
    var domain = document.domain;
    //alert(domain)
    var url = document.URL;
    //alert(url);
    var arrUrl = url.split("//");
    var arrWord=arrUrl[1].split(".");
    var country=arrWord[0];
    //alert("域名前缀是" + country);
    if(domain!="jp.pornhub.com"){
        window.location.href=url.replace(country,"jp");
        //alert(url.replace(country,"jp"))
    }
})();
