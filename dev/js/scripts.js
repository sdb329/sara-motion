// import { gsap } from "gsap";



import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, Flip, MotionPathHelper, MotionPathPlugin, CustomEase);

// // const 
// // var
// // let


const mainTL = gsap.timeline();



function snowflakeOne() {
    const tl = gsap.timeline();
    // tl.set("#drawsvg-snowflake", {
    //     alpha:0
    //  });
    tl.set("#extra-line", {
        alpha: 0
    });
    tl.set("#stroke-bounce", {
        alpha: 1
    });

    tl.from(".snowflake-1", {
        drawSVG: 0,
        duration: .3,
        ease: "none"
    }, "rotate1");
    
    tl.from("#snowflake1", {
        duration: 4,
        ease: "none",
        rotate: 360,
        transformOrigin: "center",
        repeat: 1
        
    }, "rotate1");

    
    return tl;
}

function snowflakeTwo() {

    const tl = gsap.timeline();

    tl.from(".snowflake-2", {
        drawSVG: 0,
        duration: .3,
        ease: "none"
    }, "rotate2");
    
    tl.from("#snowflake2", {
        duration: 4,
        ease: "none",
        rotate: 360,
        transformOrigin: "center",
        repeat: 1
        
    }, "rotate2");

    return tl;
}

function snowflakeThree() {

    const tl = gsap.timeline();

    tl.from(".snowflake-3", {
        drawSVG: 0,
        duration: .3,
        ease: "none"
    }, "rotate3");
    
    tl.from("#snowflake3", {
        duration: 4,
        ease: "none",
        rotate: 360,
        transformOrigin: "center",
        repeat: 1
        
    }, "rotate3");

    return tl;
}

function snowflakeFour() {

    const tl = gsap.timeline();

    tl.from(".snowflake-4", {
        drawSVG: 0,
        duration: .3,
        ease: "none"
    }, "rotate4");
    
    tl.from("#snowflake4", {
        duration: 4,
        ease: "none",
        rotate: 360,
        transformOrigin: "center",
        repeat: 1
        
    }, "rotate4");

    return tl;
}

function snowflakeFive() {

    const tl = gsap.timeline();

    tl.from(".snowflake-5", {
        drawSVG: 0,
        duration: .3,
        ease: "none"
    }, "rotate5");
    
    tl.from("#snowflake5", {
        duration: 4,
        ease: "none",
        rotate: 360,
        transformOrigin: "center",
        repeat: 1
        
    }, "rotate5");

    return tl;
}

function snowflakeSix() {

    const tl = gsap.timeline();

    tl.from(".snowflake-6", {
        drawSVG: 0,
        duration: .3,
        ease: "none"
    }, "rotate6");
    
    tl.from("#snowflake6", {
        duration: 4,
        ease: "none",
        rotate: 360,
        transformOrigin: "center",
        repeat: 1
        
    }, "rotate6");

    return tl;
}

function snowflakeFalling() {

    const tl = gsap.timeline();

    tl.to(".snowflake-fall", {
        y: "+=1000",
        duration: 5,
        stagger: 0.2
    });
    
   
    return tl;
}

function snowflakeBouncingLine() {

    const tl = gsap.timeline();

    tl.set("#stroke-bounce", {
        alpha: 0
    }, "stokeSame");

    // tl.set("#extra-line", {
    //     alpha: 1
    // }, "stokeSame");

    tl.to("#snowflake1", {
        y: "+=1000",
        duration: 5,
        stagger: 0.2
    }, "stokeSame");

    // tl.to("#extra-line", {
    //     duration: .2,
    //     drawSVG: "0%"
    // }, "stokeSame");

    


    

   
    return tl;
}

function snowflakeDrawSVG() {

    const tl = gsap.timeline();

    tl.from("#drawsvg-snowflake", {
        alpha:0,
        duration: .01
     });
 
     tl.fromTo("#drawsvg-snowflake", {
 
         duration: 2,
         drawSVG: "0% 8.5%"
     },
     {
         duration: 2, ease: "slowMiddle", drawSVG: "90% 100%"});
     
    
   
    return tl;
}

CustomEase.create("slowMiddle", "M0,0 C0.13,0.428 0.111,0.394 0.462,0.534 0.764,0.654 0.876,0.7 1,1 ");

mainTL
    .add(snowflakeOne())
    .add(snowflakeFour(), "-=7.7")
    .add(snowflakeTwo(), "-=7.7")
    .add(snowflakeFive(), "-=7.7")
    .add(snowflakeThree(), "-=7.7")
    .add(snowflakeSix(), "-=7.7")
    .add(snowflakeFalling(), "-=5")
    .add(snowflakeBouncingLine(), "-=4.68")
    .add(snowflakeDrawSVG(), "-=5")

;


// -----------------------------
// animations to refer to
// -----------------------------

// tl.to("#morph-right-plant1", {
//     duration: .5,
//     morphSVG: "#stem-right1",
//     ease: "none"

// tl.from("#stem2", {
//     duration: 1,
//     stagger: 0.1,
//     drawSVG: 0
// });



// tl.to(".fade-up", {
//     duration: 1,
//     alpha: 0,

//     y: "-=300"
// }, "pumpkinDropping");





GSDevTools.create();
MorphSVGPlugin.create();
DrawSVGPlugin.create();
Flip.create();
MotionPathHelper.create();
MotionPathPlugin.create();
CustomEase.create();