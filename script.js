


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




// var tain= document.querySelector("#sexy")


// document.querySelector("#sexy").className="rotate"  

// document.querySelector("#sexy").classList.add("rotatex")

// document.querySelector("#sexy").classList.remove("rotatex")



document.querySelector("#sexy").
addEventListener('scroll',function(){
    
    
    document.querySelector("#sexy").style.transform="rotateY(180deg)"
})



document.querySelector("#sexy").
addEventListener('mousedown',function(){

    document.querySelector("#sexy").style.transform='rotateY(0deg)'
})



gsap.to("#sexy",{

    scrollTrigger:{
        trigger:"#sexy",
        scroller:"#main",
        markers:true
    },

    

})