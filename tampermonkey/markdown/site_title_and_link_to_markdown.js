// ==UserScript==
// @name            引用网页标题和网址为Markdown链接
// @namespace       http://tampermonkey.net/
// @description     鼠标右键选择TamperMonkey运行此脚本可引用网页标题+网址为Markdown链接 快捷键 ALT + B
// @version         0.4
// @author          https://dayowong.com/DayoWong0
// @include         *
// @require      https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11
// @grant        GM_registerMenuCommand

// ==/UserScript==]

(function() {
    'use strict';
    let elementId ='CopyAsMdLink'

    function getCopyText() {
        let link = window.location.href
        let title = document.title
        return "[" + title + "](" + link + ")"
    }

    // 快捷键 alt + B
    document.onkeydown = function(event) {
        if (event.altKey && event.keyCode == 66) {
            execCopy()
        }
    }


    function init(elementId){
        //创建一个不可见的button，用于模拟触发Click事件并复制
        let createDiv=document.createElement(elementId)
        createDiv.innerHTML='<button id="' + elementId + '" style="display: none"></button>'
        document.body.appendChild(createDiv)

        let clipboard = new ClipboardJS('#' + elementId, {
            text: function(trigger) {
                return getCopyText()
            }});
        clipboard.on('success', function(e) {
            console.info("复制成功");
            e.clearSelection();
            Swal.fire({
                icon: 'success',
                title: '复制成功!',
                timer: 2000
            })
        });
        clipboard.on('error', function(e) {
            console.info("复制失败");
            Swal.fire({
                icon: 'error',
                title: '复制失败!',
                timer: 2000
            })
        });
    }

    function execCopy(){
        // 模拟点击事件
        document.getElementById(elementId).click()
    }

    GM_registerMenuCommand("复制", () => execCopy());

    init(elementId)
})();
