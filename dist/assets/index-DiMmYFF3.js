(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(n){let o=0;const s=r=>{o=r,n.innerHTML=`count is ${o}`};n.addEventListener("click",()=>s(o+1)),s(0)}document.querySelector("#app").innerHTML=`
<body>
  <div class="app-container">
    <header class="app-header">
      <button class="close-button">Close</button>
      <h1 class="app-title">
        SosIHamster <span class="verified-icon">✔</span>
      </h1>
      <button class="menu-button">...</button>
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
        He reached -150$! He is a rich humster now!
      </p>
    </section>

    <img class="fatality" style="display: none; color: white;" src='/fatality.png' />

    <footer class="app-footer">
      <img src='/footer.png' alt="Footer Image" />
    </footer>
  </div>

  <script type="module" src="/main.js"><\/script>
</body>
`;let c=0,i=0,l=!0;const u=()=>{const n=document.querySelector(".diamond-count");n.textContent=`$ ${c}`},m=()=>{const n=document.getElementById("count-text");i<=150&&(n.textContent=i)},p=()=>{const n=document.getElementById("hamster-image");if(n.src=l?"/sosIhumster1.png":"/sosIhumster2.png",l=!l,c-=5,u(),c===-15){const r=document.querySelector(".counter-message");r.style.display="block",i++,i<=150&&m(),setTimeout(()=>{r.style.display="none"},3e3)}if(c===-150){const r=document.querySelector(".diamonds-section"),e=document.querySelector(".app-footer"),t=document.querySelector(".fatality");e.style.display="none",r.style.display="none",t.style.display="block"}const o=document.querySelector("#imageclick"),s=document.createElement("span");s.classList.add("floating-diamond"),s.textContent="-5$",o.appendChild(s),setTimeout(()=>{o.contains(s)&&o.removeChild(s)},1e3)};document.querySelector("#imageclick").addEventListener("click",p);d(document.querySelector("#counter"));
