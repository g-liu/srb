// ==UserScript==
// @name        Search result blocker
// @namespace   http://g-liu.com
// @description Filter unwanted search results by domain name.
// @include     https://*.bing.com/*
// @include     http://*.bing.com/*
// @include     https://*.google.com/*
// @include     http://*.google.com/*
// @version     1
// @grant       none
// ==/UserScript==

/********************************************************************
 * ADD BLACKLIST SITES HERE
 ********************************************************************/

// coming soon

/********************************************************************
 * DO NOT TOUCH ANYTHING BELOW THIS LINE
 * UNLESS YOU KNOW WHAT YOU ARE DOING!
 ********************************************************************/
window.addEventListener("load", function(e) {
    if(window.location.host.match(/(www\.)?bing\.com/gi)) {
        var heh = document.getElementById("b_results").getElementsByTagName("li");
        for(var i = 0; i < heh.length; i++) {
            if(typeof heh[i].getElementsByClassName("b_attribution")[0] !== "undefined"
                    && heh[i].getElementsByClassName("b_attribution")[0].getElementsByTagName("cite")[0].innerHTML
                    .replace(/<(.|\n)*?>/gi, "").match(new RegExp("\.wiki\.answers\.com|\.answers\.yahoo\.com|ehow\.com|metafilter\.com", "gi"))) {
                heh[i].style.display = "none";
            }
        }
        console.log("done");
    }
    else if(window.location.host.match(/(www\.)?google\.com/gi)) {
        console.log("hi");
    }
}, false);
