import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as p,i as x}from"./assets/vendor-77e16229.js";const D=document.querySelector("#datetime-picker"),n=document.querySelector("button"),d=document.querySelector("[data-days]"),u=document.querySelector("[data-hours]"),i=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]");document.addEventListener("DOMContentLoaded",()=>{n.disabled=!0});let h="";const M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(x.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):(n.disabled=!1,h=t[0])}};p(D,M);function g(t){const r=Math.floor(t/864e5),y=Math.floor(t%864e5/36e5),C=Math.floor(t%864e5%36e5/6e4),S=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:y,minutes:C,seconds:S}}function m(){const t=new Date().getTime(),o=h.getTime()-t;if(o<0){clearInterval(f),d.textContent="00",u.textContent="00",i.textContent="00",l.textContent="00";return}const{days:a,hours:s,minutes:c,seconds:r}=g(o);d.textContent=e(a),u.textContent=e(s),i.textContent=e(c),l.textContent=e(r)}function e(t){return t.toString().padStart(2,"0")}let f;n.addEventListener("click",()=>{m(),f=setInterval(m,1e3)});
//# sourceMappingURL=commonHelpers.js.map
