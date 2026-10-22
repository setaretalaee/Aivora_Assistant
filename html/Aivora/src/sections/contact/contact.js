const form =
document.querySelector(".ai-contact-right form");


form.addEventListener("submit",(e)=>{

e.preventDefault();


const btn =
form.querySelector("button");


btn.innerHTML="Sent ✓";


setTimeout(()=>{

btn.innerHTML=
'Send Message <span>→</span>';

form.reset();

},2500);


});