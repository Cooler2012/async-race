(()=>{"use strict";var e={153:(e,n,t)=>{t.r(n)},833:(e,n,t)=>{t.r(n)},156:(e,n,t)=>{t.r(n)},373:(e,n,t)=>{t.r(n)},442:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.appFooter=void 0,t(153),n.appFooter=function(){const e=document.createElement("footer");e.classList.add("footer"),e.innerHTML="\n    <h2>Cooler_2012</h2>\n  ",document.body.append(e)}},989:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.appHeader=void 0,t(833),n.appHeader=function(){const e=document.createElement("header");e.classList.add("header"),e.innerHTML='\n  <div class="header__garage">TO GARAGE!</div>\n  <div class="header__winners">TO WINNERS!</div>\n  ',document.body.append(e)}},183:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.renderCarsSection=n.appMainWinners=n.appMain=n.appMainGarage=void 0;const c=t(891);function a(){const e=document.querySelector(".main");e.innerHTML="",e.innerHTML='\n  <section class="main__wrap">\n    <div class="new__car">\n      <input type="text" class="craete__name">\n      <input type="color" class="craete__color">\n      <button formmethod="POST" class="create">Create car</button>\n    </div>\n    <div class="change__car">\n    <input type="text" class="change__name">\n    <input type="color" class="change__color">\n      <button class="update">Update car</button>\n    </div>\n    <div class="menu">\n      <button class="race">Race</button>\n      <button class="reset">Reset</button>\n      <button class="generate">Generate cars</button>\n    </div>\n    <div class="discript">\n      <h1>Garage: </h1>\n      <span class="number__cars"></span>\n    </div>\n  </section>\n  <section class="page__cars">\n    <div class="discript">\n      <h2>Page: </h2>\n      <span class="page__number"></span>\n    </div>\n  </section>\n  <div class="pages">\n    <button class="prev">Prev</button>\n    <button class="next">Next</button>\n  </div>\n  ',c.renderCars(c.sendRequest(c.requstURL)),c.getLength(c.sendRequest(c.requstURL)),c.getPage(c.sendRequest(c.requstURL))}t(156),n.appMainGarage=a,n.appMain=function(){const e=document.createElement("main");e.classList.add("main"),document.body.append(e),a()},n.appMainWinners=function(){const e=document.querySelector(".main");e.innerHTML="",e.innerHTML='\n    <div class="discript">\n      <h1>Winners: </h1>\n      <span class="number__cars"></span>\n    </div>\n    <div class="discript">\n      <h2>Page: </h2>\n      <span class="page__number"></span>\n    </div>\n    <div class="table__name">\n      <div class="number">Number</div>\n      <div class="car">Car</div>\n      <div class="name">Name</div>\n      <div class="wins">Wins</div>\n      <div class="time">Best time (seconds)</div>\n    </div>\n    <div class="pages">\n      <button class="prev">Prev</button>\n      <button class="next">Next</button>\n    </div>\n  '},n.renderCarsSection=function(){document.querySelector(".page__cars").innerHTML='\n  <section class="page__cars">\n  <div class="discript">\n    <h2>Page: </h2>\n    <span class="page__number"></span>\n  </div>\n</section>\n<div class="pages">\n  <button class="prev">Prev</button>\n  <button class="next">Next</button>\n</div>\';\n',c.renderCars(c.sendRequest(c.requstURL)),c.getLength(c.sendRequest(c.requstURL)),c.getPage(c.sendRequest(c.requstURL))}},512:function(e,n){var t=this&&this.__awaiter||function(e,n,t,c){return new(t||(t=Promise))((function(a,s){function r(e){try{i(c.next(e))}catch(e){s(e)}}function o(e){try{i(c.throw(e))}catch(e){s(e)}}function i(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,o)}i((c=c.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.pushCar=n.createCar=void 0,n.createCar=function(){const e=document.querySelector(".craete__name"),n=document.querySelector(".craete__color");return{name:`${e.value}`,color:`${n.value}`}},n.pushCar=function(e){return t(this,void 0,void 0,(function*(){yield fetch("http://127.0.0.1:3000/garage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json()))}))}},486:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getCars=void 0,n.getCars=function(e){const n=document.querySelector(".page__cars"),t=document.createElement("div");t.classList.add("car"),t.innerHTML=`\n  <div class="cars__menu">\n    <button class="select" data-id=${e.id}>Select</button>\n    <button class="remove" data-id=${e.id}>Remove</button>\n    <h2>${e.name}</h2>\n  </div>\n  <div class="car__content">\n    <button class="start">A</button>\n    <button class="stop">B</button>\n    <div class="item__car">\n      <svg fill=${e.color} class="car__img" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;">\n        <g>\n          <path class="img__elem" d="M16.5,41.8c1.7-0.5,3.2-0.9,4.8-1.4c1.3-0.4,2.6-0.7,3.9-1.1c0.5-0.1,0.7-0.4,0.7-0.9c0-5.8,0-11.6,0-17.4   c0-0.6-0.2-0.8-0.8-0.7c-0.3,0-0.5,0-0.8,0c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.5-1.4,1.4-1.5c0.1,0,0.2,0,0.4,0c9.8,0,19.6,0,29.3-0.1   c0.4,0,0.9,0,1.2,0.1c0.7,0.2,1.2,0.7,1,1.6c-0.2,0.7-0.6,1.2-1.4,1.2c-0.4,0-0.8,0-1.2,0c0.1,0.2,0.2,0.4,0.3,0.6   c2.7,7.6,5.4,15.2,8,22.7c0.5,1.3,0.4,1.6-0.7,2.5c-3.2,2.6-5.5,5.8-6.9,9.7c-0.1,0.3-0.2,0.6-0.3,1c0.6,0,1.2,0,1.7,0   c12.6,0,25.3,0,37.9,0c1.6,0,2.1,0.5,2.1,2.1c0,2.7,0,5.4,0,8.1c0,1.4-0.5,1.9-2,1.9c-16.8,0-33.6,0-50.4,0c-1.8,0-2-0.2-2.3-2   c-0.8-4.9-3.4-8.7-7.7-11.2c-5.4-3.1-12.4-2.3-17,1.4c-3.4,2.7-5.3,6.1-5.8,10.3c-0.1,1-0.6,1.5-1.7,1.5c-0.9,0-1.7,0-2.6,0   c-1.1,0-1.6-0.5-1.7-1.6c0-0.1,0-0.2,0-0.4c0-6.8,0-13.6,0-20.3c0-1.2,0.4-1.6,1.5-1.9c2.3-0.7,4.7-1.3,7-2   c0.5-0.1,0.7-0.4,0.7-0.9c0-4.5,0-9,0-13.5c0-1.3-0.4-1.8-1.7-2c-0.9-0.2-1.3-0.7-1.3-1.5c0.1-0.8,0.6-1.3,1.5-1.3   c2.3,0,4.3,2,4.3,4.5c0,4.2,0,8.3,0,12.5C16.5,40.9,16.5,41.3,16.5,41.8z M56.9,38.8c-0.2-0.6-0.3-1-0.4-1.4   c-1.9-5.4-3.8-10.8-5.7-16.2c-0.2-0.7-0.5-0.9-1.3-0.9c-6.7,0-13.3,0-20,0c-0.8,0-1,0.3-1,1c0,5.5,0,10.9,0,16.4c0,0.8,0.3,1,1.1,1   c8.7,0,17.5,0,26.2,0C56.2,38.8,56.5,38.8,56.9,38.8z"/>\n          <path d="M13.6,69.1c0.1-6.9,5.5-12.3,12.4-12.1c3.2,0.1,6.1,1.2,8.3,3.6c2.3,2.4,3.4,5.3,3.4,8.6c-0.1,6.6-5.5,11.9-12.2,11.9   C18.9,81.1,13.5,75.7,13.6,69.1z M25.7,63c-3.5,0-6.2,2.7-6.2,6.2c0,3.4,2.8,6.2,6.2,6.1c3.4,0,6.2-2.8,6.2-6.2   C31.8,65.7,29.1,63,25.7,63z"/>\n          <path d="M59,53.8c0.8-3.3,7.9-8.2,12.7-8.8c8.1-1,14.4,2.5,18.3,8.8C79.6,53.8,69.3,53.8,59,53.8z"/>\n          <path d="M59,72.3c10.3,0,20.5,0,30.8,0c-2.1,4.2-8.3,9.1-15.9,8.9C67.3,81,61.2,76.8,59,72.3z"/>\n          <path d="M28.6,69.1c0,1.6-1.3,2.9-2.9,3c-1.6,0-2.9-1.3-3-2.9c0-1.7,1.3-3,2.9-2.9C27.3,66.2,28.6,67.5,28.6,69.1z"/>\n        </g>\n      </svg>\n    </div>\n  </div>\n  `,n.appendChild(t)}},940:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.maxWinners=n.maxCars=void 0,n.maxCars=7,n.maxWinners=10},891:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getPage=n.getLength=n.renderWinners=n.renderCars=n.sendRequest=n.requstURL=void 0;const c=t(940),a=t(486);n.requstURL="http://127.0.0.1:3000/garage",n.sendRequest=function(e){return fetch(e).then((e=>e.json())).catch((e=>e))},n.renderCars=function(e){e.then((e=>{for(let n=0;n<c.maxCars;n++)a.getCars(e[n])}))},n.renderWinners=function(e){e.then((e=>{for(let n=0;n<c.maxWinners;n++)a.getCars(e[n])}))},n.getLength=function(e){let n;e.then((e=>n=e.length)).then((()=>{const e=document.querySelector(".number__cars");e.innerHTML="",e.innerHTML=`${n}`}))},n.getPage=function(e){let n;e.then((e=>n=Math.floor(e.length/c.maxCars)+1)).then((()=>{const e=document.querySelector(".page__number");e.innerHTML="",e.innerHTML=`${n}`}))}}},n={};function t(c){var a=n[c];if(void 0!==a)return a.exports;var s=n[c]={exports:{}};return e[c].call(s.exports,s,s.exports,t),s.exports}t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{t(373);const e=t(989),n=t(183),c=t(442),a=t(512);e.appHeader(),n.appMain(),c.appFooter();const s=document.querySelector(".header__garage"),r=document.querySelector(".header__winners"),o=document.querySelector(".create");null==s||s.addEventListener("click",n.appMainGarage),null==r||r.addEventListener("click",n.appMainWinners),null==o||o.addEventListener("click",(()=>{const e=a.createCar();a.pushCar(e),n.renderCarsSection()}))})()})();