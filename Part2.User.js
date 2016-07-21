// ==UserScript==
// @name         Stream Extracter 2
// @version      0.1
// @match        http://www.moviesplanet.is/one/*
// @match        http://www.moviesplanet.is/playg/media/*
// @grant        GM_openInTab
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
    waitForKeyElements(".jwplayer", function() {
        console.log("Stream Extracter 2 started!");
        var iframe_link = jwplayer().getPlaylistItem().file;
        window.open(iframe_link, "_self");
    });
})();
