const btnE1 = document.querySelector(".btn");
btnE1.addEventListener("mouseover",(event)=>{
const x = (event.pagesX -btnE1.offsetLeft);
const y = (event.pagesY -btnE1.offsetTop);
btnE1.style.setproperty("--xPos",x + "px") ;

btnE1.style.setproperty("--yPos",x + "px") ;
})