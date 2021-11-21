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




function dirtAppearing() {
    const tl = gsap.timeline();

    tl.set(".leaves-down", {
        alpha: 0
    });


    tl.set(".leaves-down2", {
        alpha: 0
    });

    tl.set(".leaves-down3", {
        alpha: 0
    });

    tl.set("#grown-up-pumpkin", {
        y: "=30",
        alpha: 0
    });


    tl.from("#dirt", {
        duration: .1,
        alpha: 0,
        ease: "none"
    });
    return tl;
}

function babyPlantGrowing() {
    const tl = gsap.timeline();
    tl.from("#morph-right-plant1", {
        duration: 1,
        alpha: 0
    }, "appearStemSameTime");
    tl.from("#morph-left-plant1", {
        duration: 1,
        alpha: 0
    }, "appearStemSameTime");

    tl.to("#morph-right-plant1", {
        duration: .5,
        morphSVG: "#stem-right1",
        ease: "none"
    }, "stemSameTime");
    tl.to("#morph-left-plant1", {
        duration: .5,
        morphSVG: "#stem-left1",
        ease: "none"
    }, "stemSameTime");




    return tl;

}

function babyLeafGrowing() {
    const tl = gsap.timeline();
    tl.from("#morph-right-leaf1", {
        duration: .01,
        alpha: 0
    }, "appearLeafSameTime");
    tl.from("#morph-left-leaf1", {
        duration: .01,
        alpha: 0
    }, "appearLeafSameTime");


    tl.to("#morph-right-leaf1", {
        duration: 1,
        morphSVG: "#big-leaf-right1"
    }, "leafSameTime");
    tl.to("#morph-left-leaf1", {
        duration: 1,
        morphSVG: "#small-leaf-left1"
    }, "leafSameTime");

    tl.to("#left-bplant", {
        duration: 1,
        rotation: -70,
        transformOrigin: "bottom"
    }, "split");

    tl.to("#right-bplant", {
        duration: 1,
        rotation: 40,
        transformOrigin: "bottom -1%"
    }, "split");
    return tl;
}


function plant1growing() {
    const tl = gsap.timeline();
    tl.from("#stem1", {
        duration: 1,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#leaf-morph1", {
        duration: .01,
        alpha: 0
    });
    tl.to("#leaf-morph1", {
        duration: .5,
        morphSVG: "#leaf1"
    });
    tl.from("#main-line1", {
        duration: .5,
        stagger: 0.01,
        drawSVG: 0
    });
    tl.from("#outward-lines1", {
        duration: .5,
        stagger: 0.1,
        drawSVG: 0
    });


    return tl;

}

function plant2growing() {
    const tl = gsap.timeline();
    tl.from("#stem2", {
        duration: 1,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#leaf-morph2", {
        duration: .01,
        alpha: 0
    });
    tl.to("#leaf-morph2", {
        duration: .5,
        morphSVG: "#leaf2"
    });
    tl.from("#main-line2", {
        duration: .5,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#outward-lines2", {
        duration: .5,
        stagger: 0.1,
        drawSVG: 0,
        ease: "back"
    });


    return tl;

}

function plant3growing() {
    const tl = gsap.timeline();
    tl.from("#stem3", {
        duration: 1,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#leaf-morph3", {
        duration: .01,
        alpha: 0
    });
    tl.to("#leaf-morph3", {
        duration: .5,
        morphSVG: "#leaf3"
    });
    tl.from("#main-line3", {
        duration: .5,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#outward-lines3", {
        duration: .5,
        stagger: 0.1,
        drawSVG: 0,
        ease: "back"
    });


    return tl;

}

function plant4growing() {
    const tl = gsap.timeline();
    tl.from("#stem4", {
        duration: 1,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#leaf-morph4", {
        duration: .01,
        alpha: 0
    });
    tl.to("#leaf-morph4", {
        duration: .5,
        morphSVG: "#leaf4"
    });
    tl.from("#main-line4", {
        duration: .5,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#outward-lines4", {
        duration: 2,
        stagger: 0.5,
        drawSVG: 0,
        ease: "back"
    });


    return tl;

}


function fullGrownPumpkinDropping() {
    const tl = gsap.timeline();
    tl.to("#grown-up-pumpkin", {
        duration: 2.5,
        alpha: 1,
        scale: 10,
        rotate: 40,
        y: "-=10"

    }, "-=1");


    tl.to(".fade-up", {
        duration: 1,
        alpha: 0,

        y: "-=300"
    }, "pumpkinDropping");

    tl.to("#grown-up-pumpkin", {
        duration: 1,
        scale: 25,
        y: "-=35",
        x: "-=198",
        rotate: 28
    }, "pumpkinDropping");


    return tl;

}



function PumpkinCarving() {
    const tl = gsap.timeline();
    tl.from("#right-eye-stroke", {
        duration: 1,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#right-eye-fill", {
        duration: 1,
        stagger: 0.1,
        alpha: 0
    }, "-=.5");
    tl.from("#right-eye2", {
        duration: 1,
        stagger: 0.1,
        alpha: 0
    }, "-=.5");
    tl.to("#right-eye2", {
        duration: 1,
        stagger: 0.1,
        alpha: 0,
        y: "+=70"
    }, "-=.5");

    tl.from("#left-eye-stroke", {
        duration: 1,
        stagger: 0.1,
        drawSVG: 0
    }, "-=2");
    tl.from("#left-eye-fill", {
        duration: 1,
        stagger: 0.1,
        alpha: 0
    }, "-=1.5");
    tl.from("#left-eye2", {
        duration: 1,
        stagger: 0.1,
        alpha: 0
    }, "-=.5");
    tl.to("#left-eye2", {
        duration: 1,
        stagger: 0.1,
        alpha: 0,
        y: "+=70"
    }, "-=.5");

    tl.from("#nose-stroke", {
        duration: 1,
        stagger: 0.1,
        drawSVG: 0
    }, "-=2.5");
    tl.from("#nose-fill", {
        duration: 1,
        stagger: 0.1,
        alpha: 0
    }, "-=2");
    tl.from("#nose3", {
        duration: 1,
        stagger: 0.1,
        alpha: 0
    }, "-=1");
    tl.to("#nose3", {
        duration: 1,
        stagger: 0.1,
        alpha: 0,
        y: "+=70"
    }, "-=.5");


    tl.from("#mouth-stroke", {
        duration: 2,
        stagger: 0.1,
        drawSVG: 0
    }, "-=2.5");
    tl.from("#mouth-fill", {
        duration: 1,
        stagger: 0.1,
        alpha: 0
    }, "-=1.2");
    tl.from("#mouth3", {
        duration: 1,
        stagger: 0.1,
        alpha: 0
    }, "-=1");
    tl.to("#mouth3", {
        duration: 1,
        stagger: 0.1,
        alpha: 0,
        y: "+=70"
    }, "-=.5");


    return tl;

}

function PumpkinLightingUp() {
    const tl = gsap.timeline();
    tl.from("#dimmer-light", {
        duration: 1,
        alpha: 0,
        ease: "bounce"
    });
    tl.from("#brightest-light", {
        duration: 1,
        alpha: 0,
        ease: "bounce"
    }, "<");


    return tl;

}

function leavesSwipe() {
    const tl = gsap.timeline();

    tl.set("#leaves-motion-path2", {
        y: "-=200"
    });

    tl.set("#leaves-motion-path3", {
        y: "-=150"
    });




    tl.to(".leaves-down", {
        duration: 2,
        alpha: 1,
        ease: "power1.inOut",
        stagger: 0.1,
        scale: 2,
        motionPath: {
            path: "#leaves-motion-path",
            align: "#leaves-motion-path",
            alignOrigin: [0.5, 0.5]

        }
    }, "leafSameTime");



    tl.to(".leaves-down2", {
        duration: 2,
        alpha: 1,
        ease: "power1.inOut",
        stagger: 0.1,
        scale: 2,
        motionPath: {
            path: "#leaves-motion-path2",
            align: "#leaves-motion-path2",
            alignOrigin: [0.5, 0.5]

        }
    }, "leafSameTime");


    tl.to(".leaves-down3", {
        duration: 2,
        alpha: 1,
        ease: "power1.inOut",
        stagger: 0.1,
        scale: 2,
        motionPath: {
            path: "#leaves-motion-path3",
            align: "#leaves-motion-path3",
            alignOrigin: [0.5, 0.5]

        }
    }, "leafSameTime");

    tl.to(".disappear", {
        duration: .1,
        alpha: 0,
        stagger: 0.1
    }, "-=1");



    tl.to("#full-pumpkin", {
        duration: .2,
        alpha: 0
    }, "-=1.5");

    tl.to("#preloader", {
        alpha: 0,
        duration: 0.5,
        onComplete: PreloaderDone

    }, "-=1");

    return tl;

}

function PreloaderDone() {

    window.scrollTo(0, 0);
    gsap.set("#preloader", {
        display: "none"
    });

}


function heroAnimation() {
    const tl = gsap.timeline();


    tl.from("header", {
        duration: 1.5,
        y: "-=150"
    });
    tl.from("header li", {
        duration: .5,
        y: "+=150",
        alpha: 0,
        stagger: 0.1,
        ease: "back"
    });
    tl.from("header a", {
        duration: .5,
        y: "+=150",
        alpha: 0,
        rotation: 360,
        ease: "back"
    }, "<");






    tl.from("#hero", {
        duration: 2,
        alpha: 0,
        scale: 2
    }, "-=2");
    tl.from("#hero #header1", {
        duration: 2,
        y: "+=900",
        alpha: 0,
        ease: "elastic"
    }, "-=1");
    tl.from("#hero #l1", {
        duration: 2.5,
        y: "+=400",
        alpha: 0,
        rotation: 360,
        ease: "back"
    }, "-=1");
    tl.from("#hero #l2", {
        duration: 2.5,
        y: "+=900",
        alpha: 0,
        rotation: 360,
        ease: "back"
    }, "-=2.5");


    tl.from("#content h2", {
        duration: 2.5,
        scale: 0,
        alpha: 0,
        ease: "back"
    }, "-=2");
    tl.from("#content #boxes-grid", {
        duration: 4,
        alpha: 0
    }, "-=4");
    tl.from("#content #imagec", {
        duration: 4,
        alpha: 0,
        x: "+=400"
    }, "<");
    tl.from("#content p", {
        duration: 6,
        x: "+=150",
        alpha: 0,
        stagger: 0.4,
        ease: "back"
    }, "-=3");



    return tl;
}




mainTL
    .add(dirtAppearing())
    .add(babyPlantGrowing(), "<")
    .add(babyLeafGrowing())
    .add(plant1growing(), "-=1")
    .add(plant2growing(), "-=2")
    .add(plant4growing(), "-=2")
    .add(plant3growing(), "-=3.5")
    .add(fullGrownPumpkinDropping(), "-=3.5")
    .add(PumpkinCarving())
    .add(PumpkinLightingUp(), "-=1")
    .add(leavesSwipe(), "-=1")
    .add(heroAnimation())

;










// GSDevTools.create();
MorphSVGPlugin.create();
DrawSVGPlugin.create();
Flip.create();
MotionPathHelper.create();
MotionPathPlugin.create();