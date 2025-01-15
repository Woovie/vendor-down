// ==UserScript==
// @name         Vendor down avatar replacement
// @namespace    http://github.com/
// @version      1.4.1
// @description  Replace the avatar image based on a list of usernames of known scam vendors
// @author       Woovie
// @match        https://geekhack.org/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/woovie/vendor-down/main/replace-avatar.user.js
// @downloadURL  https://raw.githubusercontent.com/woovie/vendor-down/main/replace-avatar.user.js
// ==/UserScript==

(function() {
    'use strict';

    const usernames = ["jchan94", "Jaxxstatic"];
    const replacementImageUrl = "https://raw.githubusercontent.com/woovie/vendor-down/main/vendor-down.png";

    const posters = document.querySelectorAll('div.poster');

    posters.forEach(poster => {
        const usernameElement = poster.querySelector('h4 > a:nth-of-type(2)');
        if (!usernameElement) return;

        const username = usernameElement.textContent.trim();
        if (usernames.includes(username)) {
            const avatarImg = poster.querySelector('img.avatar');
            if (avatarImg) {
                avatarImg.src = replacementImageUrl;
                avatarImg.style.width = "100%";
            }
        }
    });
})();
