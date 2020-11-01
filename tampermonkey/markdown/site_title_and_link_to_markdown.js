// ==UserScript==
// @name         引用网址和标题为 Markdown 链接
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       https://github.com/DayoWong0/script
// @include *
// @require     https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict'
    // 新增一个 button
    var but = document.createElement('button')
    // 设置元素 id
    but.id = "referSiteToMarkdownFormatLink"
    but.innerHTML = "md"
    but.addEventListener("click", referSiteToMarkdownFormatLink)
    //but.addEventListener("mouseover",displayToBlock)
    //but.addEventListener("mouseout",displayToNone)
    // $("#referSiteToMarkdownFormatLink").
    var parent = document.getElementsByTagName("body")
    parent[0].appendChild(but)
    var element = document.getElementById("referSiteToMarkdownFormatLink")
    // css 参考来自 bilibili 首页悬浮固定的 联系客服
    //element.style.cssText = 'position:fixed;z-index:9999;left:0;top:50%;margin-top:-36px;width:28px;height:200px;border-top-right-radius:2px;border-bottom-right-radius:2px;transition:all .3s;font-size:12px;color:#fff;box-shadow:0 6px 10px 0 rgba(251,114,153,.4);padding:8px 7px;line-height:14px}.try-feedback:hover{background-color:#ff85ad;color:#fff}.contact-help{position:fixed;z-index:101;left:0;top:calc(50% - 30px);margin-top:-36px;width:28px;height:72px;transition:all .3s;font-size:12px;color: red;background:#fff;border:1px solid #e7e7e7;box-shadow:0 6px 10px 0 #e7e7e7;border-radius:0 2px 2px 0;padding:8px 7px;line-height:14px';
    //element.style.cssText = 'position: fixed;z-index: 9999;left: 0px;top: 50%;margin-top: -36px;width: 28px;height: 200px;border-top-right-radius: 2px;border-bottom-right-radius: 2px;transition: all 0.3s ease 0s;font-size: 12px;box-shadow: rgba(251, 114, 153, 0.4) 0px 6px 10px 0px;padding: 8px 7px;';
    //var cssText = 'position: fixed;z-index: 9999; left: 0px;  bottom: 0%; /* margin top: -36px; */width: 27px;height: auto;border-top-right-radius: 2px;border-bottom-right-radius: 2px;transition: all 0.3s ease 0s;font-size: 1px;box-shadow: rgba(251, 114, 153, 0.4) 0px 6px 10px 0px;'
    //var cssText = 'position: fixed;z-index: 9999;left: 0px;bottom: 50%;width: 27px;height: 17px;border-top-right-radius: 2px;-bottom-right-radius: 2px;transition: all 0.3s ease 0s;font-size: 1px;box-shadow: rgba(251, 114, 153, 0.4) 0px 6px 10px 0px;'
    var cssText = 'position: fixed;z-index: 9999;left: 0px;bottom: 1%;/* width: 27px; *//* height: 17px; */ /* border-top-right-radius: 2px; */ transition: all 0.3s ease 0s;font-size: 1px;box-shadow: rgba(251, 114, 153, 0.4) 0px 6px 10px 0px;color: blue'
    element.style.cssText = cssText
    // console.log("是否全屏：" + isFullScreen())

    function displayToBlock () {
        var element = document.getElementById("referSiteToMarkdownFormatLink")
        console.log("on mouse over")
        element.style.display = 'block'
    }

    function displayToNone () {
        var element = document.getElementById("referSiteToMarkdownFormatLink")
        console.log("on mouse out")
        // element.style.display = 'none'
    }

    function referSiteToMarkdownFormatLink () {
        let link = window.location.href
        let title = document.title

        // 复制到剪切板
        var copyText = '[' + title + '](' + link + ')'
        var el = document.createElement('textarea')
        el.value = copyText
        el.setAttribute('readonly', '')
        el.style = {
            position: 'absolute',
            left: '-9999px'
        }
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        //  阻止事件冒泡
        event.stopPropagation()
    }

    //判断浏览器是否全屏
    function isFullScreen () {
        return (document.body.scrollHeight == window.screen.height && document.body.scrollWidth == window.screen.width)
    }
})()