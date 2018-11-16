// @ts-check

// Add temporary site disclaimer
var disclaimer = document.getElementById('temporary-site-disclaimer');
if(disclaimer){
    disclaimer.innerHTML = '<p><em style="font-weight: 700; color: red;">Note: This site is currently under construction! No information here should be interpreted as accurate!</em></p>';
}

// var font = document.createElement('link');
// font.href = "https://fonts.googleapis.com/css?family=Lato:300,400,700|Raleway:300,400,500";
// font.rel = "stylesheet";
// document.getElementsByTagName('head')[0]
//     .appendChild(font);

// Add favicon
var favicon = document.createElement('link');
favicon.rel = 'shortcut icon';
favicon.href = 'https://mit-scioly.github.io/images/favicon.ico';
document.getElementsByTagName('head')[0]
    .appendChild(favicon);
document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeEnd',
  `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-129272651-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-129272651-1');
  </script>`);
