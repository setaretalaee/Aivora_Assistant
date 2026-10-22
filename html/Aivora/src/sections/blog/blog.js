const blogCards = document.querySelectorAll(".blog-card");


const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},
{
threshold:.2
}
);



blogCards.forEach(card=>{

observer.observe(card);

});