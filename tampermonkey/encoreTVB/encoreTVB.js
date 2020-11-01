// ==UserScript==
// @name         encoreTVB 自动播放
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  encoreTVB 自动播放
// @author       https://github.com/DayoWong0/script
// @match        https://www.encoretvb.com/*
// @require     https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict'
    $(".vjs-big-play-button").click()
})()