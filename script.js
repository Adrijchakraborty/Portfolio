let mouse = document.querySelector(".cursor-bubble")
let main = document.querySelector("#main")
let box = document.querySelector(".box")

function mousePlay(){
    main.addEventListener("mousemove",(dets)=>{
        gsap.to(mouse,{
            x:dets.x-6,
            y:dets.y-6
        })
    })
    main.addEventListener("mouseenter",()=>{
        gsap.to(mouse,{
            opacity:1,
            scale:1.2
        })
    })
    main.addEventListener("mouseleave",()=>{
        gsap.to(mouse,{
            opacity:0,
            scale:0
        })
    })
}
mousePlay()

box.addEventListener("mouseenter",()=>{
    gsap.to(mouse,{
        scale:2.4
    })
})
box.addEventListener("mousemove",()=>{
    gsap.to(mouse,{
        scale:2.4
    })
})
box.addEventListener("mouseleave",()=>{
    gsap.to(mouse,{
        scale:1
    })
})

