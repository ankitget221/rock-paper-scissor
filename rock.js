let userscore=0;
let compscore=0;
let user=document.querySelector("#user_score")
let comp=document.querySelector("#comp_score")
const changet=document.querySelector("#bo");
const score=()=>{
    user.innerText=userscore;
    comp.innerText=compscore;
}

const choise=document.querySelectorAll(".choise");
const draw=()=>{
    console.log("drow")
    // document.querySelector("#bo").setAttribute("class",".drawchange")
    changet.innerText="its a draw"
}


const gcompchoise=()=>{
    //for genrating random number from 0-2
    const arr=["rock","paper","scissor"]
    a=Math.floor(Math.random()*3)
    return arr[a]

}
const showresult=()=>{
    //display 
    if (userwin==true){
        console.log("you win")
        changet.innerText="you win"
        userscore+=1

    }
    else{
        console.log("you loose")
        changet.innerText="you loose"
        compscore+=1

    }
    score()

}

const gameplay=(useerchoise)=>{
     console.log(useerchoise);
    const compchoise=gcompchoise()
     console.log(compchoise)
    if (useerchoise==compchoise){
        //draw game 
        draw();
    }
    else{
        userwin=true
        if (useerchoise=="rock"){
            userwin=compchoise==="paper"?false:true;
        }
        else if(useerchoise=="paper"){
            userwin=compchoise==="scissor"?false:true;
        }
        else if(useerchoise=="scissor"){
            userwin=compchoise==="rock"?false:true;
        }
        showresult(userwin)
    }}

choise.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        useerchoise=choise.getAttribute("id");
        // console.log("choise was clicked",useerchoise);
        gameplay(useerchoise);

    });
});