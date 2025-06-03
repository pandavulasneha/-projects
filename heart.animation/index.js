const bodyE1=document.querySelector("body")
bodyE1.addEventListener("mousemove",(event)=>{
    const xPos=event.offsetX;
    const yPos=event.offsetY;
    const spanE1=document.createElement("span");
    spanE1.style.left = xPos + "px";
    spanE1.style.top = yPos + "px";
   // spanE1.style.right = yPos + "px";
  //  bodyE1.appendChild(spanE1);
    //different size of shape and random no.of hearts
    const size =Math.random()*100;
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";
    bodyE1.appendChild(spanE1);
    setTimeout(()=>{
        spanE1.remove();
    },300);
});