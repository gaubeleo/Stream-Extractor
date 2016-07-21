// ==UserScript==
// @name         Stream Extracter
// @namespace    http://www.moviesplanet.is/show/game-of-thrones/season/02/episode/9
// @version      0.1
// @match        http://www.moviesplanet.is/show/*/season/*/episode/*
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    console.log("Stream Extracter started!");
    var iframe_link = document.getElementsByClassName("embedcontainer")[0].firstElementChild.src;
    GM_openInTab(iframe_link);
})();
