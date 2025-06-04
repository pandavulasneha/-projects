const containerE1 =document.querySelector(".container");
const careers =["youtubers","webdevelopers","pythondevelopers"];
let CareerIndex =0
let ChacterIndex =0;
updateText();
function updateText(){
    ChacterIndex++;
containerE1.innerHTML=`
<h1> I am  ${careers [CareerIndex].slice(0,ChacterIndex)}</h1>
`;
//=== "I"?"am":"a"}${careers[CareerIndex].slice(0,ChacterIndex)}</h1>



if(ChacterIndex === careers[CareerIndex].length){
    CareerIndex ++;
    ChacterIndex =0
}
setTimeout(updateText,400);
}