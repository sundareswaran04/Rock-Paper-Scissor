function popup_on(){
    document.getElementById("black").style.display="flex";
}
function popup_off(){
    document.getElementById("black").style.display="none";
}
let num=0;


function show(event){
    
document.getElementById("three").style.display="none";
document.getElementById("final").style.display="flex";
let list=['1','2','3'];
let index=Math.floor(Math.random()*list.length);
const userchoice=event.target.id;
const U_C=document.getElementById("User_choice");
const H_C=document.getElementById("house_choice");
if(userchoice=='1'){
    U_C.src="PaperLarge.png";
}
else if(userchoice=='2'){
    U_C.src="ScissorLarge.png";
}
else{
    U_C.src="RockLarge.png";
}
const inter=setInterval(n,3000);
document.getElementById("loader").style.display="flex";
document.getElementById("loader").innerText="Please Wait..."
H_C.style.display="none";
function n(){
    H_C.style.display="flex";
if(list[index]=='1'){
    H_C.src="PaperLarge.png";
}
else if(list[index]=='2'){
    H_C.src="ScissorLarge.png";
}
else{
    H_C.src="RockLarge.png";
}

const result=document.createElement("h2");
const btn=document.createElement("button");
btn.onclick=()=>{
    document.getElementById("three").style.display="flex";
document.getElementById("final").style.display="none";
document.getElementById("result").innerHTML=" ";
H_C.src="";
}
btn.innerText="PLAY AGAIN"
if(userchoice=='1'&&list[index]=='2'||userchoice=='2'&&list[index]=='3'||userchoice=='3'&&list[index]=='1'){
    result.innerText="YOU LOSE";
   btn.style.color="#fd3a3a";
   num--;
}
else if(userchoice==list[index]){
    result.innerText="MATCH DRAW"
    btn.style.color="#c9fd3a";
    
}
else{
    result.innerText="YOU WIN"
    btn.style.color="#3a4dfd";num++;
}
document.getElementById("score_value").innerText=num;
document.getElementById("loader").style.display="none";
document.getElementById("result").appendChild(result);
document.getElementById("result").appendChild(btn);
console.log(userchoice, list[index]);

clearInterval(inter);
}

}