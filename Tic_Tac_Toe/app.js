const boxes=document.querySelectorAll(".box");
const reset=document.querySelector(".reset");
const newGame=document.querySelector("#new-btn");
const msg_container=document.querySelector(".msg-container");
const msg=document.querySelector("#msg");
const main=document.querySelector(".main");
let turn0=true;
let count=0;
const winPattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        count++;
        if (turn0){
            box.style.color="#485665";
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            box.style.color="#1E3231";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
        if(count===9){
            Draw();
        }
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
const resetBtn=()=>{
    turn0=true;
    enableBoxes();
    msg_container.classList.add("hide");
    main.style.display="block";
}

const Draw=()=>{
    msg.innerText="Game Draw,Try Again!!!";
    msg_container.classList.remove("hide");
    main.style.display="none";
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    main.style.display="none";
}
const checkWinner=()=>{
    for (let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if (pos1!="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                disableBoxes();
            }
        }
    }
}

reset.addEventListener("click",resetBtn);
newGame.addEventListener("click",resetBtn);