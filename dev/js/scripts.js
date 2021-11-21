// import { gsap } from "gsap";
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

    // tl.set(".leaves-down", {
    //     alpha: 0
    // });


    // tl.set(".leaves-down2", {
    //     alpha: 0
    // });

    // tl.set(".leaves-down3", {
    //     alpha: 0
    // });

    // tl.set("#grown-up-pumpkin", {
    //     y: "=30",
    //     alpha: 0
    // });


    // tl.from("#dirt", {
    //     duration: .1,
    //     alpha: 0,
    //     ease: "none"
    // });
    return tl;
}






mainTL
    .add(snowflakes())


;










// GSDevTools.create();
MorphSVGPlugin.create();
DrawSVGPlugin.create();
Flip.create();
MotionPathHelper.create();
MotionPathPlugin.create();