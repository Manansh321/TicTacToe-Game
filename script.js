console.log("Wellcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let Audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;



// function to change the  turn

const changeTurn = ()=>{
    return turn === "X"? "0": "X";
};

// Function to check for a win

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
     let wins = [ 
        [0, 1, 2, -11, 5, 0],
        [3, 4, 5, -11, 15, 0],
        [6, 7, 8, -11, 25 , 0],
        [0, 3, 6, -21.35, 15, 90 ],
        [1, 4, 7, -11.35, 15, 90],
        [2, 5, 8, -1.35, 15, 90],
        [0, 4, 8, -10.98, 15, 45],
        [2, 4, 6, -11.4, 15, 135],
      ]
      wins.forEach(e =>{
        if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !=="") ){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "250px";  
            gameover.play();
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "20vw";
        }
      })
}


// Game Logic

// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
        if(boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            Audioturn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

// Add on click listener to reset button

    reset.addEventListener("click", ()=> {
        let boxtexts = document.querySelectorAll(".boxtext");
        Array.from(boxtexts).forEach(element => {
            element.innerText = "";
        });
        turn = "X";
        isgameover = false;
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

        // now stopping that tedy from dancing
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";

        document.querySelector(".line").style.width = "0vw";
    });



 