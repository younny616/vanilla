//const title = document.getElementById("title");
/* 2.3
 const title = document.querySelector("#title");
 console.log(title);

 title.innerHTML = "Hi! From JS";
 title.style.color = "red";
 console.dir(title);
 */

/* 2.4 */
const title = document.querySelector("#title");

function handleClick(event){
    title.style.color = "blue";
    //console.log("I have been resized");
}

title.addEventListener("click", handleClick);