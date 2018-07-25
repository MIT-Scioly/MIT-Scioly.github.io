// @ts-check

// Add temporary site disclaimer
var disclaimer = document.getElementById('temporary-site-disclaimer');
disclaimer.innerHTML = '<p><em style="font-weight: 700; color: red;">Note: This site is currently under construction! No information here should be interpreted as accurate!</em></p>';

// Add fonts TODO: Delete unnecessary fonts to decrease load time!
var font = document.createElement('link');
font.href = "https://fonts.googleapis.com/css?family=Lato:300,400,700|Raleway:300,400,500";
font.rel = "stylesheet";
document.getElementsByTagName('head')[0]
    .appendChild(font);

// Add favicon
var favicon = document.createElement('link');
favicon.rel = 'shortcut icon';
favicon.type = 'image/png';
favicon.href = 'images/favicon.ico';
document.getElementsByTagName('head')[0]
    .appendChild(favicon);