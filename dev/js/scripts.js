// import { gsap } from "gsap";



import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, Flip, MotionPathHelper, MotionPathPlugin);

// // const 
// // var
// // let


const mainTL = gsap.timeline();

function snowflakeOne() {
    const tl = gsap.timeline();

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

// function snowflakeFalling() {

//     const tl = gsap.timeline();

//     tl.from("#snowflakes", {
        
//     }, "rotate6");
    
//     tl.from("#snowflake6", {
//         duration: 4,
//         ease: "none",
//         rotate: 360,
//         transformOrigin: "center",
//         repeat: 1
        
//     }, "rotate6");

//     return tl;
// }


mainTL
    .add(snowflakeOne())
    .add(snowflakeTwo(), "-=7.7")
    .add(snowflakeThree(), "-=7.7")
    .add(snowflakeFour(), "-=7.7")
    .add(snowflakeFive(), "-=7.7")
    .add(snowflakeSix(), "-=7.7")

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








GSDevTools.create();
MorphSVGPlugin.create();
DrawSVGPlugin.create();
Flip.create();
MotionPathHelper.create();
MotionPathPlugin.create();