const box2Dots = document.querySelectorAll(".box-2 .dot")
const slid = document.querySelector(" .box-2 .body .cards")
const box2DotClicked=(which,e)=>{
    const ActiveClassNow = document.querySelector(".box-2 .dot.active")
    ActiveClassNow.classList.remove("active")
    e.target.classList.add("active")
    if(which===1){
        slid.style.left="0"
    }
    if(which==2){
        slid.style.left="-200px"
    }
    if(which==3){
        slid.style.left="-400px"
    }
}
console.log(slid);