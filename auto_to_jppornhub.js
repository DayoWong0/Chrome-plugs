// ==UserScript==
// @name         pornhub自动跳转日本站
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.pornhub.com/*
// @grant        none
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
