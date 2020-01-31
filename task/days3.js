/*
[조건]
 마우스가 위에 있으면 제목의 텍스트가 변경되어야합니다.
 마우스를 놓으면 제목의 텍스트가 변경되어야합니다.
 창의 크기가 조정되면 제목이 변경되어야합니다.
 마우스 오른쪽 버튼을 클릭하면 제목도 변경됩니다.
 제목의 색상은 색상 배열의 색상에서 가져와야합니다.
 .css 또는 .html 파일을 변경하지 마십시오.
 모든 함수 핸들러는 "superEventHandler"의 내부에 있어야합니다.

[work flow]
1. Hello! 마우스 hover 하면 The mouse is here! 로 text 변경
2. 마우스 out 되면 The mouse is gone! 으로 text 변경
3. 브라우저 resize 하면 You just resized! 로 text 변경
4. 마우스 우클릭 하면 That was a right click! 로 text 변경
*/
const title = document.querySelector("#title");
const colors = ["red", "green", "pink", "blue"];

const superEventHandler= {
    handleHover: function(){
        title.style.color = colors[0];
        title.innerHTML = "The mouse is here!"
    },
    handleOut: function() {
        title.style.color = colors[1];
        title.innerHTML = "The mouse is gone!";
    },
    handleResize: function(){
        title.style.color = colors[2];
        title.innerHTML = "You just resized!";
    },
    handleClick: function(){
        if(event.button == 2) {
            title.style.color = colors[3];
            title.innerHTML = "That was a right click!";
        }
    }
};

title.addEventListener("mouseover", superEventHandler.handleHover);
title.addEventListener("mouseout", superEventHandler.handleOut);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("mousedown", superEventHandler.handleClick);
//window.addEventListener("contextmenu", superEventHandler.handleClick);