import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

const ilkNavItem = document.querySelector(".nav-link");
window.addEventListener("load", (event) => {
    ilkNavItem.style.color = "red";
});

const tumResimler = document.querySelectorAll("img");
tumResimler.forEach((resim) => {
    resim.addEventListener("mouseover", (event) => {
        resim.style.filter = "grayscale(100%)";
    })
}
)
tumResimler.forEach((resim) => {
    resim.addEventListener("dblclick", (event) => {
        resim.style.filter = "unset";
    })
}
)
tumResimler.forEach((resim) => {

    resim.addEventListener("wheel", (event) => {
        event.preventDefault();

        scale += event.deltaY * -0.01;

        // Restrict scale
        scale = Math.min(Math.max(.125, scale), 4);

        // Apply scale transform
        el.style.transform = `scale(${scale})`;


    })
})
const input = document.querySelector('input');
const log = document.getElementById('log');
const tumButonlar=document.querySelectorAll(".btn")

input.addEventListener('keydown', logKey);

function logKey(e) {
//   log.textContent += ` ${e.key}`; //e.code 
if(e.key == 1)
{
    tumButonlar[0].style.background="red";
}
else if(e.key == 2)
{
    tumButonlar[1].style.background="red";
}
else if(e.key == 3)
{
    tumButonlar[2].style.background="red";
    input.setAttribute("disabled","disabled")
}
}

let scale = 1;
const el = document.querySelector('div');
el.onwheel = zoom;

input.addEventListener("keyup", (e) =>{
    if(e.key == 3)
{
input.setAttribute("disabled","disabled")
}
})

input.addEventListener("focus", (e) =>{

    input.style.background= "red";

})
window.addEventListener("resize",(e) =>{
log.textContent=window.innerHeight;
if(window.innerHeight<1000)
{
    ilkNavItem.style.display= "block";
}
else
{
    ilkNavItem.style.display= "none";
}
})
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
}

document.addEventListener('scroll', (e) => {
  document.querySelector("img").style.display="none" // display - block vaesayılan 
  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
//copy-selector path consoleda bakabilirsin.