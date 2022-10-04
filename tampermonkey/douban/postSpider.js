// ==UserScript==
// @name         豆瓣帖子内容爬取
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       https://github.com/DayoWong0/script
// @match        https://www.douban.com/group/topic/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=douban.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let list = document.getElementsByClassName('reply-doc content')
    var i;
    let text = ""
    for (i = 0; i < list.length; i++) {
        let ref = list[i].getElementsByClassName('all ref-content')
        let reply = list[i].getElementsByClassName('reply-content')
        //回复内容
        let reply_text = reply[0].innerText
        //如果有引用的内容
        if(ref[0]){
            let ref_text = ref[0].innerText
            //console.log(ref_text)
            text += "问题：   " + ref_text + "\n回答：   " + reply_text + "\n\n\n";
        }else{
            text += reply_text + "\n\n\n";
        }
       // let ref_texts = ref.innerText
      //  console.log(ref_texts)
       // text += list[i].innerText + "\n\n\n";
}
    console.log(text)
})();
