// ==UserScript==
// @name         bilibili
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  哔哩哔哩双击全屏播放，双击视频标题复制为 Markdown 一级标题附带链接地址，双击播放列表名称复制播放列表标题和视频分P链接地址为 Markdown 二级标题附带链接地址
// @author       https://github.com/DayoWong0/script
// @match        https://www.bilibili.com/video/*
// @match        https://www.bilibili.com/
// @require     https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("#app").dblclick(function(){
        $(".bilibili-player-video-btn-fullscreen").click();
    });

    $(".tit").dblclick(function copy() {
        let title = $(this).text();
        let link = window.location.href;

        var copyText = '# [' + title + '](' + link + ')';
        var el = document.createElement('textarea');
        el.value = copyText;
        el.setAttribute('readonly', '');
        el.style = {
            position: 'absolute',
            left: '-9999px'
        };
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        //  阻止事件冒泡
        event.stopPropagation();
});
    $(".head-con").dblclick(function (){

        var list_box = document.querySelectorAll(".list-box li");
        var copyText = "";
        // 当前网页地址，不包含 ?username=xxx 等参数
        // 例如 https://www.bilibili.com/video/xxx?p=6 获取到的是 /video/xxx
        var currentUrl = window.location.pathname;
        for(var i = 0; i < list_box.length; i++){
            // console.log(list_box[i].textContent);
            // console.log("i = " + i);
            // copyText = copyText + document.querySelectorAll(".list-box li")[i].textContent;
            var title = list_box[i].innerText.split("\n");
            // 显示 P1 数理逻辑篇介绍，而不是 P1 数理逻辑篇介绍 07:26。即标题不显示视频时长。

            //复制为 Markdown 二级标题 加了 “## ”
            // 标题上加上视频地址 加了
            copyText = copyText + "## [" + title[0] + " " + title[1] + "](https://www.bilibili.com" + currentUrl +"?p=" + (i+1) + ")\n";
        }
        //copyText = copyText + list_box[0].innerText + "\n";
        console.log(copyText);
        var el = document.createElement('textarea');
        el.value = copyText;
        el.setAttribute('readonly', '');
        el.style = {
            position: 'absolute',
            left: '-9999px'
        };
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        //  阻止事件冒泡
        event.stopPropagation();
    });
})();
