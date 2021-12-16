const box2Dots = document.querySelectorAll(".box-2 .dot")
const Box2Slid = document.querySelector(" .box-2 .body .cards")
const Box2ArrowOne = document.querySelector(" .box-2 .arrow1")
const Box2ArrowTwo = document.querySelector(" .box-2 .arrow2")
Box2Slid.style.left="0px"


const box4Dots = document.querySelectorAll(".box-4 .footer .dot")
const Box4Slid = document.querySelector(" .box-4 .body .cards")
const Box4ArrowOne = document.querySelector(" .box-4 .arrow1")
const Box4ArrowTwo = document.querySelector(" .box-4 .arrow2")
Box4Slid.style.left="0px"


const box2DotClicked=(which,e)=>{
    const ActiveClassNow = document.querySelector(".box-2 .dot.active")
    ActiveClassNow.classList.remove("active")
    if(which===1){
        Box2Slid.style.left="0px"
    }
    if(which===2){
        Box2Slid.style.left="-200px"
    }
    if(which===3){
        Box2Slid.style.left="-400px"
    }
    changeDots(e)
    changeArrow()

}
const box2ArrowClicked = (which , e)=>{
    if(which===1 & Box2Slid.style.left != "-400px"){
        if(Box2Slid.style.left === "0px"){
            Box2Slid.style.left = "-200px"
        }
        else{
            Box2Slid.style.left = "-400px"
        }
    }
    else if(which===2 & Box2Slid.style.left!=="0px"){
        if(Box2Slid.style.left === "-200px"){
            Box2Slid.style.left = "0px"
        }
        else{
            Box2Slid.style.left = "-200px"
        }
    }
    
    const ActiveClassNow = document.querySelector(".box-2 .dot.active")
    ActiveClassNow.classList.remove("active")

    changeDots()
    changeArrow()
}

function changeArrow(){
    if(Box2Slid.style.left=="0px"){
        Box2ArrowOne.classList.add("active")
        Box2ArrowTwo.classList.remove("active")

    }
    else if(Box2Slid.style.left=="-400px"){
        Box2ArrowTwo.classList.add("active")
        Box2ArrowOne.classList.remove("active")

    }
}
function changeDots(e){
    if(Box2Slid.style.left==="0px"){
        box2Dots[0].classList.add('active')
    }else if(Box2Slid.style.left==="-200px"){
        box2Dots[1].classList.add('active')
    }else{
        box2Dots[2].classList.add('active')
    }
    
}



const box4DotClicked = (which,e) =>{
    const ActiveClassNow = document.querySelector(".box-4 .dot.active")
    ActiveClassNow.classList.remove("active")
    if(which===1){
        Box4Slid.style.left="0px"
    }
    if(which===2){
        Box4Slid.style.left="-500px"
    }
    if(which===3){
        Box4Slid.style.left="-1000px"
    }
    if(which===4){
        Box4Slid.style.left="-1500px"
    }
    box4changeDots()
    box4changeArrow()
}
const box4ArrowClicked =(which , e)=>{
    if(which===1 & Box4Slid.style.left != "-1500px"){
        if(Box4Slid.style.left === "0px"){
            Box4Slid.style.left = "-500px"
        }
        else if(Box4Slid.style.left === "-500px"){
            Box4Slid.style.left = "-1000px"
        }else{
            Box4Slid.style.left = "-1500px"
        }
    }
    else if(which===2 & Box4Slid.style.left!=="0px"){
        if(Box4Slid.style.left === "-1500px"){
            Box4Slid.style.left = "-1000px"
        }
        else if(Box4Slid.style.left === "-1000px"){
            Box4Slid.style.left = "-500px"
        }else{
            Box4Slid.style.left = "0px"
        }
    }
    
    const ActiveClassNow = document.querySelector(".box-4 .footer .dot.active")
    ActiveClassNow.classList.remove("active")
    box4changeDots()
    box4changeArrow()
}

function box4changeDots(e){
    if(Box4Slid.style.left==="0px"){
        box4Dots[0].classList.add('active')
    }else if(Box4Slid.style.left==="-500px"){
        box4Dots[1].classList.add('active')
    }else if(Box4Slid.style.left==="-1000px"){
        box4Dots[2].classList.add('active')
    }else{
        box4Dots[3].classList.add('active')
    }
}
function box4changeArrow(){
    if(Box4Slid.style.left=="0px"){
        Box4ArrowOne.classList.add("active")
        Box4ArrowTwo.classList.remove("active")

    }
    else if(Box4Slid.style.left=="-1500px"){
        Box4ArrowTwo.classList.add("active")
        Box4ArrowOne.classList.remove("active")

    }
}