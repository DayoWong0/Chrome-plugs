// ==UserScript==
// @name            引用网页标题和网址为Markdown链接
// @namespace       http://tampermonkey.net/
// @description     Context menu to execute UserScript
// @version         0.2
// @author          https://dayowong.com/DayoWong0
// @include         *
// @run-at          context-menu
// @require      https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11

// ==/UserScript==]

(function() {
    'use strict';
    //console.log("复制为MarkDown链接被调用了")
    //console.log(document.title)
    //console.log(location.href)
    let link = window.location.href
    let title = document.title
    // markdown格式的链接
    let copyText = "[" + title + "](" + link + ")"
    //console.log(copyText)
    //创建一个不可见的button，用于模拟触发Click事件并复制
    let createDiv=document.createElement("div")
    createDiv.innerHTML='<button id="copyAsMdLink" style="display: none"></button>'
    document.body.appendChild(createDiv)
    //new clipboard
    let clipboard = new ClipboardJS('#copyAsMdLink', {
    text: function(trigger) {
        return copyText
    }});
    clipboard.on('success', function(e) {
        console.info("复制成功");
        e.clearSelection();
        Swal.fire({
            icon: 'success',
            title: '成功!',
            text: '已引用为Markdown格式链接',
            timer: 2000
        })
    });
    clipboard.on('error', function(e) {
        console.info("复制失败");
                Swal.fire({
            icon: 'error',
            title: '失败!',
            text: '复制失败',
            timer: 2000
        })
    });
    // 模拟点击事件
    document.getElementById("copyAsMdLink").click()
})();
