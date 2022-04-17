// ==UserScript==
// @name         在z-library中搜索
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  在z-library中搜索选中的文字
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=douban.com
// @grant          GM_registerMenuCommand
// @license MIT
// ==/UserScript==

(function() {
    'use strict';
    function searchBookInZlibrary(){
    //let book_name = document.getElementsByTagName('h1')[0].innerText;
    let book_name = window.getSelection().toString()
    let url = "https://zh.book4you.org/s/"+book_name;
    window.open(url,'target','');
    }

    GM_registerMenuCommand("在z-library中搜索", () => {
        searchBookInZlibrary()
    });
})();
