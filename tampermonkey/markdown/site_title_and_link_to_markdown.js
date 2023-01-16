// ==UserScript==
// @name            复制网页标题和网址为Markdown链接
// @namespace       https://github.com/DayoWong0
// @description     鼠标右键选择TamperMonkey运行此脚本可引用网页标题+网址为Markdown链接 快捷键 ALT + B 个人自用 代码参考来自https://gist.github.com/vhxubo/e94b0cceadf0291050f05ab1c0bb19c9
// @version         0.8
// @author          https://github.com/DayoWong0
// @match        *://*/*
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard

// ==/UserScript==]]]

(function() {
    'use strict';
    function successAlert(){
        Swal.fire({
                icon: 'success',
                title: '复制成功!',
                timer: 2000
            })
    }
    function getTitle(){
        let host = window.location.host
        let title = document.title
        let device = navigator.userAgent.toLowerCase();

        if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(device)) {
            //移动端

            //百度贴吧
            if(host === "tieba.baidu.com"){
                title = document.querySelector("body > div.main-page-wrap > div > div.main-thread-content-margin.main-thread-content > h1").textContent
                    + "【" + document.querySelector("body > div.main-page-wrap > div > div:nth-child(1) > div > div > div.forum-block").textContent
                + "】_百度贴吧"
            }
            //CSDN
            if(host === "blog.csdn.net"){
                title = document.querySelector("#articleContentId > span.tit").textContent
            }
        } else {
            //pc端

            //CSDN
            if(host === "blog.csdn.net"){
                title = document.querySelector("#articleContentId").textContent
            }
        }
        return title
    }

    GM_registerMenuCommand("复制标题及链接", () =>
                           {GM_setClipboard(`[${getTitle()}](${document.URL} )`)
                           successAlert()
                           }
                          );
    GM_registerMenuCommand("仅复制标题", () => {GM_setClipboard(`${getTitle()}`)
                                           successAlert()
                                          }
                                           );
    GM_registerMenuCommand("仅复制链接", () => {GM_setClipboard(document.URL)
                                          successAlert()
                                          });
})();
