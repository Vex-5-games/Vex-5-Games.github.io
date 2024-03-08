function OpenFullscreen() {
    document.addEventListener("DOMContentLoaded", function() {

        var fullscreen = document.getElementById("fullscreen");
    
        fullscreen.addEventListener("click", function() {
    
            var cssLink = document.createElement("link");
    
            cssLink.setAttribute("rel", "stylesheet");
            cssLink.setAttribute("type", "text/css");
            cssLink.setAttribute("href", "JS/Script.js");
            document.head.appendChild(cssLink);
        });
    });
}