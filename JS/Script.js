function openFullscreen() {
    // Check if the browser supports the Fullscreen API
    if (document.fullscreenEnabled || document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled || document.msFullscreenEnabled) {
        var elem = document.querySelector("embed");

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }
}

function CloakTab() {
        return TabCloak === 'true';
        var link = document.createElement('link');
        link.rel = 'shortcut icon';
        link.href = 'Assets/Images/Canvas-Logo.png';
        document.title = 'Log In to Canvas';
        document.getElementsByTagName('head')[0].appendChild(link);
    };