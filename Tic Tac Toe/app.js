let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset_btn");
let newgamebtn=document.querySelector("#new_btn");
let msgcontainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");


let turn0=true;//playerX,player0

const Winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetgame =()=>{
    turn0=true;
    boxenable();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was click.");
        if(turn0){
        box.innerText="0";
        turn0=false;
    }
    else{
         box.innerText="X";
         turn0=true;
    }
    box.disabled=true;

    checkWinner();
    });
})


const boxdisable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const boxenable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
msg.innerText=`Congratulation,Winner is ${winner}`;
msgcontainer.classList.remove("hide");
boxdisable();
}

const checkWinner=()=>{
    for( let pattern of Winpattern){

    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("Winner",pos1Val);
            showWinner(pos1Val);
        }
      
    }
    }
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
