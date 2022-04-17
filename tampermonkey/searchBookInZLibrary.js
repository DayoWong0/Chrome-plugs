// ==UserScript==
// @name         在z-library中搜索豆瓣书籍
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在z-library中搜索豆瓣的书籍
// @author       You
// @match        https://book.douban.com/subject/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=douban.com
// @grant          GM_registerMenuCommand
// @license MIT
// ==/UserScript==
 
(function() {
    'use strict';
    function searchBookInZlibrary(){
    let book_name = document.getElementsByTagName('h1')[0].innerText;
    let url = "https://zh.book4you.org/s/"+book_name;
    window.open(url,'target','');
    }
 
    GM_registerMenuCommand("在z-library中搜索书籍", () => {
        searchBookInZlibrary()
    });
})();
