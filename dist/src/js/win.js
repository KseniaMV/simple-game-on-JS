"use strict";function win(){var n=document.querySelector(".background");n.style.backgroundImage="url('src/images/background/win.png')",n.style.backgroundSize="500px",getPage("components/win_page/win_page.html").then(tryAgain).then(winBalloonAnimation)}