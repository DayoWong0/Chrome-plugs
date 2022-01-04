// ==UserScript==
// @name            复制网页标题和网址为Markdown链接
// @namespace       http://tampermonkey.net/
// @description     鼠标右键选择TamperMonkey运行此脚本可引用网页标题+网址为Markdown链接 快捷键 ALT + B 个人自用 代码参考来自https://gist.github.com/vhxubo/e94b0cceadf0291050f05ab1c0bb19c9
// @version         0.6
// @author          https://dayowong.com/DayoWong0
// @match        *://*/*
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard

// ==/UserScript==]]

(function() {
    'use strict';
    function successAlert(){
        Swal.fire({
                icon: 'success',
                title: '复制成功!',
                timer: 2000
            })
    }
    GM_registerMenuCommand("复制标题及链接", () =>
                           {GM_setClipboard(`[${document.title}](${document.URL})`)
                           successAlert()
                           }
                          );
    GM_registerMenuCommand("仅复制标题", () => {GM_setClipboard(document.title)
                                           successAlert()
                                          }
                                           );
    GM_registerMenuCommand("仅复制链接", () => {GM_setClipboard(document.URL)
                                          successAlert()
                                          });
    document.onkeydown = function(event) {
        if (event.altKey && event.keyCode == 66) {
            GM_setClipboard(`[${document.title}](${document.URL})`);
            successAlert()
        }
    }
})();
