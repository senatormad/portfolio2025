(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){const e=(e,t="active")=>e?.classList.add(t),t=(e,t="active")=>e?.classList.remove(t),a=(e,t="active")=>e?.classList.toggle(t),c=document.querySelector("[data-sidebar]"),n=document.querySelector("[data-sidebar-btn]");n?.addEventListener("click",(()=>a(c)));const r=document.querySelectorAll("[data-testimonials-item]"),o=document.querySelector("[data-modal-container]"),d=document.querySelector("[data-modal-close-btn]"),l=document.querySelector("[data-overlay]"),i=document.querySelector("[data-modal-title]"),s=document.querySelector("[data-modal-text]"),u=()=>{a(o),a(l)};r.forEach((e=>{e.addEventListener("click",(()=>{i.innerHTML=e.querySelector("[data-testimonials-title]").innerHTML,s.innerHTML=e.querySelector("[data-testimonials-text]").innerHTML,u()}))})),d?.addEventListener("click",u),l?.addEventListener("click",u);const m=document.querySelector("[data-select]"),y=document.querySelectorAll("[data-select-item]"),q=document.querySelector("[data-select-value]"),L=document.querySelectorAll("[data-filter-item]"),S=document.querySelectorAll("[data-filter-btn]"),v=a=>{L.forEach((c=>{"all"===a||a===c.dataset.category?e(c):t(c)}))};m?.addEventListener("click",(()=>a(m))),y.forEach((e=>{e.addEventListener("click",(()=>{const a=e.innerText.toLowerCase();q.innerText=e.innerText,t(m),v(a)}))}));let E=S[0];S.forEach((a=>{a.addEventListener("click",(()=>{const c=a.innerText.toLowerCase();q.innerText=a.innerText,v(c),t(E),e(a),E=a}))}));const f=document.querySelector("[data-form]"),T=document.querySelectorAll("[data-form-input]"),k=document.querySelector("[data-form-btn]");T.forEach((e=>{e.addEventListener("input",(()=>{k.disabled=!f.checkValidity()}))}));const h=document.querySelectorAll("[data-nav-link]"),x=document.querySelectorAll("[data-page]");h.forEach(((a,c)=>{a.addEventListener("click",(()=>{x.forEach(((n,r)=>{c===r?(e(n),e(a),window.scrollTo(0,0)):(t(n),t(h[r]))}))}))}))}))})();