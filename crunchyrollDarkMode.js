// ==UserScript==
// @name         Crunchyroll Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  adds a dark mode to crunchyroll
// @author       Omar
// @match        https://www.crunchyroll.com/*
// @icon         https://www.crunchyroll.com/i/beta/about/crunchyroll_logo_vertical.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let body = document.querySelector('body');


    // Your code here...
    function turnOnDarkMode() {
        let darkBackground = "rgb(43, 42, 42)";
    let darkBackground2 = "rgb(59, 57, 57)";
    let lightTextColor = "rgb(209, 209, 209)"

    body.style.backgroundColor = darkBackground;

    let header = document.querySelector('header');
    header.style.backgroundColor = darkBackground2;

    //header.style.color =lightTextColor;
    let specificHeaderSelector = document.querySelectorAll('.header-menubar li a');
    for(let i = 0; i < specificHeaderSelector.length; i++) {
        specificHeaderSelector[i].style.color = lightTextColor;
    }

    let templateContainer = document.querySelector('#template_container');
    templateContainer.style.backgroundColor = darkBackground2;
    body.style.color = lightTextColor;

    let containerDiv = document.querySelectorAll('.new-template-body a.block-link, .old-template-body a.block-link, a.block-link');
    for(let i = 0; i < containerDiv.length; i++) {
        containerDiv[i].style.color = lightTextColor;
        containerDiv[i].style.backgroundColor = darkBackground;
    }

    let tabs = document.querySelector('#tabs')
    let selected = document.querySelector('.selected')


    ///tabs.style.backgroundColor = darkBackground;


    //selected.style.backgroundColor = darkBackground;
    //selected.style.color = lightText;
    if(body.contains(selected)) {
        selected.style.backgroundColor = darkBackground;
        selected.style.color = lightTextColor
    }
    if(body.contains(tabs)) {
        tabs.style.backgroundColor = darkBackground;
        selected.style.color = lightTextColor
    }

    //switch to an actual anime to make sure dark mode works well on all parts of site (it will work there)
    //switch to main site and notice that it doesn't work well there so modify the code to make it apply there

    let templateBody = document.querySelector('#template_body');
    //templateBody.style.backgroundColor = darkBackground;
    if(body.contains(templateBody)) {
        templateBody.style.backgroundColor = darkBackground2;
    }

    }

    let darkModeButton = document.createElement('button');
    darkModeButton.addEventListener("click", turnOnDarkMode);
    darkModeButton.innerText = "DARK MODE"
    body.appendChild(darkModeButton);

    body.insertBefore(darkModeButton, body.firstChild);

})();