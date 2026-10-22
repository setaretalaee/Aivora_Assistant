/* =====================================
   TRUE FOCUS ANIMATION
===================================== */


const el = document.getElementById("tf");


// متن True Focus
const words = [
  "Open",
  "slow",
  "down",
  "ship"
];


const pause = 1500;

const blurPx = 7;


let idx = 0;

let lastSwap = performance.now();





// ساخت span ها

words.forEach((w, i)=>{


  const s = document.createElement("span");


  s.textContent = w;


  if(i === 0){

    s.classList.add("focused");

  }


  el.appendChild(s);


});





// ساخت باکس فوکوس

const box = document.createElement("div");


box.className = "tf-box";


box.innerHTML = "<i></i>";


el.appendChild(box);







// حرکت باکس دور کلمه فعال

function positionBox(){


  const focused = el.children[idx];


  if(!focused) return;



  const r = focused.getBoundingClientRect();


  const er = el.getBoundingClientRect();



  box.style.transform =

  `translate(
    ${r.left - er.left - 8}px,
    ${r.top - er.top - 6}px
  )`;



  box.style.width =

  (r.width + 16) + "px";



  box.style.height =

  (r.height + 12) + "px";


}





requestAnimationFrame(positionBox);






function tick(){


  const now = performance.now();



  if(now - lastSwap > pause){



    el.children[idx]
    .classList.remove("focused");



    idx =
    (idx + 1)
    %
    words.length;



    el.children[idx]
    .classList.add("focused");





    [...el.children].forEach(c=>{


      if(c.tagName === "SPAN"){



        c.style.filter =

        c.classList.contains("focused")

        ?

        "blur(0px)"

        :

        `blur(${blurPx}px)`;



      }


    });




    positionBox();



    lastSwap = now;


  }




  requestAnimationFrame(tick);


}



tick();










/* =====================================
   CARD MOUSE LIGHT EFFECT
===================================== */


const cards =
document.querySelectorAll(".solution-card");



cards.forEach(card=>{


  card.addEventListener(
    "mousemove",
    (e)=>{


      const rect =
      card.getBoundingClientRect();



      const x =
      e.clientX - rect.left;



      const y =
      e.clientY - rect.top;




      card.style.background =

      `
      radial-gradient(
        350px circle at ${x}px ${y}px,
        rgba(124,140,255,.25),
        rgba(255,255,255,.04)
      )
      `;



    }

  );






  card.addEventListener(
    "mouseleave",
    ()=>{


      card.style.background =

      `
      linear-gradient(
        145deg,
        rgba(255,255,255,.08),
        rgba(255,255,255,.025)
      )
      `;



    }

  );



});









/* =====================================
   CARD SCROLL REVEAL
===================================== */


const cardObserver =

new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){



entry.target.classList.add(
"card-visible"
);



}



});



},

{

threshold:.2

}

);






cards.forEach((card,index)=>{


  card.style.transitionDelay =

  `${index * 150}ms`;



  cardObserver.observe(card);


});










/* =====================================
   KEEP TRUE FOCUS POSITION CORRECT
   ON RESIZE
===================================== */


window.addEventListener(
"resize",
()=>{


  positionBox();


});
