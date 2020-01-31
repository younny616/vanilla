const age = prompt("How old are you?");

// 피연산자
// &&(and) 둘다 만족해야 참, ||(or) 둘중에 하나만 만족하면 참
if(age >= 18 && age <= 21){
    console.log("you can drink but you shuold not");
} else if(age > 21){
    console.log("go ahead");
} else {
    console.log("you can't");
}
