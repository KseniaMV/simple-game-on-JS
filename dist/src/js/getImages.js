"use strict";function getImages(a){var d=this,i={star:{url:"src/images/cards/cactus.png",id:"cactus"},arrow:{url:"src/images/cards/cat.png",id:"cat"},corcle:{url:"src/images/cards/dino.png",id:"dino"},heart:{url:"src/images/cards/ghost.png",id:"ghost"},light:{url:"src/images/cards/icecream.png",id:"icecream"},treangle:{url:"src/images/cards/rabbit.png",id:"rabbit"}};return new Promise(function(a,e){var r=Object.values(i),t=[];for(var c in r)if(r.hasOwnProperty(c)){var s=r[c];t.push(s)}var n=t.concat(t);cardImages=n,a(cardImages),e(d.status+""+d.statusText)})}function shuffle(){for(var a=cardImages.length-1;0<a;a--){var e=Math.floor(Math.random()*(a+1)),r=cardImages[a];cardImages[a]=cardImages[e],cardImages[e]=r}}function createCards(){var a=document.querySelector(".cards_conteiner");for(var e in cardImages)if(cardImages.hasOwnProperty(e)){var r=cardImages[e],t=document.createElement("div");t.classList.add("card"),a.append(t);var c=document.createElement("div");c.classList.add("card_face"),c.setAttribute("data-name","".concat(r.id)),t.append(c);var s=document.createElement("div");s.classList.add("card_back"),s.style.backgroundImage="url(".concat(r.url,")"),c.after(s)}}function timeOut(){var e=30,r=document.querySelector(".timeCount_time"),t=setInterval(function(){if(r.innerHTML=--e,6==score&&clearInterval(t),0==e){e=0,r.innerHTML=e;var a=document.querySelector(".background");a.style.backgroundImage="url('src/images/background/lose.png')",a.style.backgroundSize="500px",getPage("components/lose_page/lose_page.html").then(loseSadSmileAnimation).then(tryAgain)}},1e3)}