// loader 2 here we will add scroll trger
var tl1=gsap.timeline()
tl1.from(".col_1>h3",{
    scrollTrigger:{
        trigger:".col_1>h4",
        scroller:"body",
        scrub:true,
        triggerAction: "onEnter"
    },  
    opacity:0,
    y:20,
    duration:1
})
.from(".col_1>h4",{
    scrollTrigger:{
        trigger:".col_1>h4",
        scroller:"body",
        scrub:true
    },  
    opacity:0,
    y:20,
    duration:1
})

.from('#textbox',{
    scrollTrigger:{
        trigger:    ".textbottom",
        scroller:"body",
        scrub:true,
    },
    opacity:0,
    y:30,
    duration:2
})
.from('.shopnow',{
    scrollTrigger:{
        trigger:    ".textbottom",
        scroller:"body",
        scrub:true,
        end:"top 10%",
    },
    delay:2,
    opacity:0,
    x:200,
    duration:4
})
.from(".images",{
    scrollTrigger:{
        trigger:".col_2",
        scroller:"body",
        scrub:true,
    },
    opacity:0,
    x:100,
    duration:1
})
.from("#products>h1",{
    scrollTrigger:{
        trigger:"#products",
        scroller:"body",
        end:"top 10%",
        scrub:true,
        
    },
    opacity:0,
    x:-200,
    duration:1
})
.from("#images>img",{
    scrollTrigger:{
        trigger:"#products",
        scroller:"body",
        scrub:true,
        
    },
    opacity:0,
    x:-200,
    duration:1
})
.from("#review>h1",{
    scrollTrigger:{
        trigger:"#review",
        scroller:"body",
        end:"top 10%",
        scrub:true,
    },
    opacity:0,
    x:-200,
    duration:2
})
.from(".ourteam>h1",{
    scrollTrigger:{
        trigger:"#review",
        scroller:"body",
        end:"top 10%",
        scrub:true,
    },
    opacity:0,
    x:-200,
    duration:2
})