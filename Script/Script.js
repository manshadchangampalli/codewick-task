const box2Dots = document.querySelectorAll(".box-2 .dot")
const Box2Slid = document.querySelector(" .box-2 .body .cards")
const Box2ArrowOne = document.querySelector(" .box-2 .arrow1")
const Box2ArrowTwo = document.querySelector(" .box-2 .arrow2")
Box2Slid.style.left="0px"
console.log(window.innerWidth);
window.addEventListener('resize',()=>{
    document.location.reload(true)
})
var box2transform2 = "-200px"
var box2transform3 = "-400px"
var box4transform2 = "-500px"
var box4transform3 = "-1000px"
var box4transform4 = "-1500px"

if(window.innerWidth<900 && window.innerWidth>500 ){
     box2transform2 = "-250px"
     box2transform3 = "-450px"
     box4transform2 = "-750px"
     box4transform3 = "-1150px"
     box4transform4 = "-1700px"
}
if(window.innerWidth<500){
    box2transform2 = "-300px"
    box2transform3 = "-620px"
    box4transform2 = "-800px"
    box4transform3 = "-1250px"
    box4transform4 = "-1800px"
}

var fline = document.getElementsByClassName("fline");
var sline = document.getElementsByClassName("sline");
var tline = document.getElementsByClassName("tline");


const box4Dots = document.querySelectorAll(".box-4 .footer .dot")
const Box4Slid = document.querySelector(" .box-4 .body .cards")
const Box4ArrowOne = document.querySelector(" .box-4 .arrow1")
const Box4ArrowTwo = document.querySelector(" .box-4 .arrow2")
Box4Slid.style.left="0px"

const inputBox = document.querySelector(".subscribe .inputbox")

const box2DotClicked=(which,e)=>{
    const ActiveClassNow = document.querySelector(".box-2 .dot.active")
    ActiveClassNow.classList.remove("active")
    if(which===1){
        Box2Slid.style.left="0px"
    }
    if(which===2){
        Box2Slid.style.left=box2transform2
    }
    if(which===3){
        Box2Slid.style.left=box2transform3
    }
    changeDots(e)
    changeArrow()

}
const box2ArrowClicked = (which , e)=>{
    if(which===1 & Box2Slid.style.left != box2transform3){
        if(Box2Slid.style.left === "0px"){
            Box2Slid.style.left = box2transform2
        }
        else{
            Box2Slid.style.left = box2transform3
        }
    }
    else if(which===2 & Box2Slid.style.left!=="0px"){
        if(Box2Slid.style.left === box2transform2){
            Box2Slid.style.left = "0px"
        }
        else{
            Box2Slid.style.left = box2transform2
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
    else if(Box2Slid.style.left==box2transform3){
        Box2ArrowTwo.classList.add("active")
        Box2ArrowOne.classList.remove("active")

    }
}
function changeDots(e){
    if(Box2Slid.style.left==="0px"){
        box2Dots[0].classList.add('active')
    }else if(Box2Slid.style.left===box2transform2){
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
        Box4Slid.style.left= box4transform2
    }
    if(which===3){
        Box4Slid.style.left= box4transform3
    }
    if(which===4){
        Box4Slid.style.left= box4transform4
    }
    box4changeDots()
    box4changeArrow()
}
const box4ArrowClicked =(which , e)=>{
    if(which===1 & Box4Slid.style.left != box4transform4){
        if(Box4Slid.style.left === "0px"){
            Box4Slid.style.left = box4transform2
        }
        else if(Box4Slid.style.left === box4transform2){
            Box4Slid.style.left = box4transform3
        }else{
            Box4Slid.style.left = box4transform4
        }
    }
    else if(which===2 & Box4Slid.style.left!=="0px"){
        if(Box4Slid.style.left === box4transform4){
            Box4Slid.style.left = box4transform2
        }
        else if(Box4Slid.style.left === box4transform3){
            Box4Slid.style.left = box4transform2
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
    }else if(Box4Slid.style.left===box4transform2){
        box4Dots[1].classList.add('active')
    }else if(Box4Slid.style.left===box4transform3){
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
    else if(Box4Slid.style.left==box4transform4){
        Box4ArrowTwo.classList.add("active")
        Box4ArrowOne.classList.remove("active")

    }
}


inputBox.addEventListener("click",()=>{
    document.querySelector(".subscribe .placeholder").style.display="none"
})
document.querySelector("input").addEventListener("focusout",()=>{
    console.log("hello");
    document.querySelector(".subscribe .placeholder").style.display="block"
})
var menuOpen = false
const navClicked = ()=>{
    
    if(!menuOpen){
        document.getElementById("fline").style.transform = " translateY(6px) rotate(-45deg)";
        document.getElementById("tline").style.transform = " translateY(-6px) rotate(45deg)";
        document.getElementById("sline").style.display = "none";
        document.querySelector(".res-nav").style.display="grid"
        menuOpen=true
    }
    else{
        document.getElementById("fline").style.transform = " translateY(0) rotate(0deg)";
        document.getElementById("tline").style.transform = " translateY(0) rotate(0deg)";
        document.getElementById("sline").style.display = "block";
        document.querySelector(".res-nav").style.display="none"

        menuOpen=false
    }
}


const allNavItems = document.querySelectorAll(".navItem a")
allNavItems.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        document.querySelector(".navItem .active").classList.remove("active")
        e.target.classList.add("active")
    })
})