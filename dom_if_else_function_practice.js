const title = document.querySelector("#title");

const BASE_COLOR = "pink"

function handleClick(event){
    title.style.color = "blue";
    //console.log("I have been resized");
}

//init 어플리케이션 초기화
function init(){

}
init();

title.addEventListener("click", handleClick);