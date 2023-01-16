// ==UserScript==
// @name            复制为添加到alist阿里云盘分享链接的格式
// @namespace       https://github.com/DayoWong0/script
// @description     配合该项目使用 https://github.com/yzbtdiy/alist_batch_add
// @version         0.2
// @author       https://github.com/DayoWong0/script
// @match        https://www.aliyundrive.com/s/*
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
        GM_registerMenuCommand("复制2级文件目录名及链接", () =>
                           {GM_setClipboard(`${document.getElementsByClassName('breadcrumb-item-link--M-p4b')[1].innerText}: ${document.URL}`)
                           successAlert()
                           }
                          );
        GM_registerMenuCommand("复制3级文件目录名及链接", () =>
                           {GM_setClipboard(`${document.getElementsByClassName('breadcrumb-item-link--M-p4b')[2].innerText}: ${document.URL}`)
                           successAlert()
                           }
                          );
            GM_registerMenuCommand("复制4级文件目录名及链接", () =>
                           {GM_setClipboard(`${document.getElementsByClassName('breadcrumb-item-link--M-p4b')[3].innerText}: ${document.URL}`)
                           successAlert()
                           }
                          );

})();
