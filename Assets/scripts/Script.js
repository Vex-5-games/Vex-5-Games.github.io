"use strict";
var is_fullscreen = false;
function open_fullscreen() {
			if (game.requestFullscreen) {
				game.requestFullscreen();
			} else if (game.mozRequestFullScreen) { /* Firefox */
				game.mozRequestFullScreen();
			} else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
				game.webkitRequestFullscreen();
			} else if (game.msRequestFullscreen) { /* IE/Edge */
				game.msRequestFullscreen();
			}
		}