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

function snowflakes() {
    const tl = gsap.timeline();

    tl.from(".snowflake-1", {
        drawSVG: 0,
        duration: .3,
        ease: "none"
    });
    
    tl.from("#snowflake1", {
        duration: .3,
        ease: "none",
        rotate: 60
        
    });
    return tl;
}

mainTL
    .add(snowflakes())

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