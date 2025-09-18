let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#resetbutton");
let newGameBtn = document.querySelector("#reset-button");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true; //playerx, playerO
  

const winPatterns = [

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       
        if(turnO) {
            box.innerText = "0";
            box.style.color = "yellow"
            turnO = false;
        } else {
            box.innerText = "x";
            box.style.color = "green"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
       

    });

});

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enabledboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};


const checkWinner = () => {
    for( let pattern of winPatterns) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

        if(pos1Value !="" && pos2Value != "" && pos3Value != "") {
            if(pos1Value === pos2Value && pos2Value === pos3Value) {
                
                showWinner(pos1Value);
                
            }

        }

    }
};

newGameBtn.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);


