(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
<body>
  <div class="app-container">
    <header class="app-header">
      <h1 class="app-title">
        SosIHamster <span class="verified-icon">✔</span>
      </h1>
    </header>

    <section class="diamonds-section">
      <p class="diamond-count">
        <img src="/coin.png" class="coin" />
        0
      </p>
      <div class="hamster-avatar" id="imageclick" style="position: relative;">
        <img src="/Humster1.png" alt="Hamster" id="hamster-image" class="hamster-img" />
      </div>
      <p class="counter-message" style="display: none; color: white;">
        He reached -150$! 
        You should try too!
      </p>
    </section>

    <img class="fatality" style="display: none; color: white;" src='/fatality.png' />
    <button id="restart" class="restart">Restart the game</button>
    <footer class="app-footer">
      <img src='/footer.png' alt="Footer Image" />
    </footer>
  </div>

  <script type="module" src="/main.js"><\/script>
</body>
`;let i=0,a=0,l=!0;const d=()=>{const r=document.querySelector(".diamond-count");r.textContent=`$ ${i}`},u=()=>{const r=document.getElementById("count-text");a<=150&&(r.textContent=a)},m=()=>{const r=document.getElementById("hamster-image");if(r.src=l?"/sosIhumster1.png":"/sosIhumster2.png",l=!l,i-=5,d(),i===-15){const n=document.querySelector(".counter-message");n.style.display="block",a++,a<=150&&u(),setTimeout(()=>{n.style.display="none"},3e3)}if(i===-150){const n=document.querySelector(".diamonds-section"),e=document.querySelector(".app-footer"),t=document.querySelector(".fatality"),c=document.querySelector("#restart");c.addEventListener("click",()=>{location.reload()}),c.style.display="block",e.style.display="none",n.style.display="none",t.style.display="block"}const o=document.querySelector("#imageclick"),s=document.createElement("span");s.classList.add("floating-diamond"),s.textContent="-5$",o.appendChild(s),setTimeout(()=>{o.contains(s)&&o.removeChild(s)},1e3)};document.querySelector("#imageclick").addEventListener("click",m);document.querySelector("#counter");
