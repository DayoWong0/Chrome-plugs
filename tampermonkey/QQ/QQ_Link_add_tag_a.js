// ==UserScript==
// @name         QQ链接直接访问
// @namespace    https://github.com/DayoWong0/script/new/master/tampermonkey/QQ/QQ_Link_add_tag_a.js
// @version      0.1
// @description  电脑QQ访问链接时跳转页面加了个a标签，不用复制网址直接点击即可访问网址
// @author       DayoWong0
// @match        https://c.pc.qq.com/middlem.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qq.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let obj = document.querySelector("#url")
    //let url = document.querySelector("#url").textContent
    let url = obj.textContent
    obj.innerHTML = `<a href="${url}">${url}</a>`
})();
