// import { gsap } from "gsap";



import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin);



// // const 
// // var
// // let


const mainTL = gsap.timeline();



function dirtAppearing() {
    const tl = gsap.timeline();
    tl.from("#dirt", {
        duration: 2,
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
        duration: 2,
        morphSVG: "#stem-right1"
    }, "stemSameTime");
    tl.to("#morph-left-plant1", {
        duration: 2,
        morphSVG: "#stem-left1"
    }, "stemSameTime");


    tl.from("#morph-right-leaf1", {
        duration: 1,
        alpha: 0
    }, "appearLeafSameTime");
    tl.from("#morph-left-leaf1", {
        duration: 1,
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
        rotation: 50,
        transformOrigin: "bottom -1%"
    }, "split");




    return tl;

}


function plant1growing() {
    const tl = gsap.timeline();
    tl.from("#stem1", {
        duration: 2,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#leaf-morph1", {
        duration: .1,
        alpha: 0
    });
    tl.to("#leaf-morph1", {
        duration: 1,
        morphSVG: "#leaf1"
    });
    tl.from("#main-line1", {
        duration: 1,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#outward-lines1", {
        duration: 2,
        stagger: 0.1,
        drawSVG: 0
    });


    return tl;

}

function plant2growing() {
    const tl = gsap.timeline();
    tl.from("#stem2", {
        duration: 2,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#leaf-morph2", {
        duration: .1,
        alpha: 0
    });
    tl.to("#leaf-morph2", {
        duration: 1,
        morphSVG: "#leaf2"
    });
    tl.from("#main-line2", {
        duration: 1,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#outward-lines2", {
        duration: 2,
        stagger: 0.1,
        drawSVG: 0,
        ease: "back"
    });


    return tl;

}

function plant3growing() {
    const tl = gsap.timeline();
    tl.from("#stem3", {
        duration: 2,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#leaf-morph3", {
        duration: .1,
        alpha: 0
    });
    tl.to("#leaf-morph3", {
        duration: 1,
        morphSVG: "#leaf3"
    });
    tl.from("#main-line3", {
        duration: 1,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#outward-lines3", {
        duration: 2,
        stagger: 0.1,
        drawSVG: 0,
        ease: "back"
    });


    return tl;

}

function plant4growing() {
    const tl = gsap.timeline();
    tl.from("#stem4", {
        duration: 2,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#leaf-morph4", {
        duration: .1,
        alpha: 0
    });
    tl.to("#leaf-morph4", {
        duration: 1,
        morphSVG: "#leaf4"
    });
    tl.from("#main-line4", {
        duration: 1,
        stagger: 0.1,
        drawSVG: 0
    });
    tl.from("#outward-lines4", {
        duration: 2,
        stagger: 0.1,
        drawSVG: 0,
        ease: "back"
    });


    return tl;

}

function babyPumpkinGrowing(){
    const tl = gsap.timeline();
    tl.from("#baby-pumpkin", {
        duration: .5,
        y:"-=13",
        scale:0
    });
    tl.to("#baby-pumpkin", {
        duration: .1,
        scale:2
    });
    return tl;

}

// function fullGrownPumpkinDropping(){


// }

// function fullGrownPupmkinZoomIn(){


// }


// function PumpkinCarving(){


// }

// function PumpkinLightingUp(){
//     const tl =gsap.timeline();
//     tl.to("#light",{duration:1, scale:2, y:"-=600"});
//     return tl;

// }

// function LEAVES(){
//     const tl =gsap.timeline();
//     tl.to("#leaves",{duration:1, scale:2, y:"-=600"});
//     return tl;
// }

mainTL
    .add(dirtAppearing())
    .add(babyPlantGrowing())
    .add(plant1growing())
    .add(plant2growing(), 10)
    .add(plant4growing(), 12)
    .add(plant3growing(), 14)
    .add(babyPumpkinGrowing())




GSDevTools.create();
MorphSVGPlugin.create();
DrawSVGPlugin.create();





// mainTL

// .from("header",{duration:1.5, y:"-=150"})
// .from("header li",{duration:.5, y:"+=150", alpha:0, stagger:0.1, ease:"back"})
// .from("header a",{duration:.5, y:"+=150", alpha:0, rotation:360, ease:"back"}, "<")






// .from("#hero",{duration:2,alpha:0, scale:2}, "-=2")
// .from("#hero #header1",{duration:2,y:"+=900", alpha:0, ease:"elastic"},"-=1")
// .from("#hero #l1",{duration:2.5,y:"+=400", alpha:0, rotation:360, ease:"back"},"-=1")
// .from("#hero #l2",{duration:2.5,y:"+=900", alpha:0, rotation:360, ease:"back"},"-=2.5")


// .from("#content h2",{duration:2.5,scale:0, alpha:0, ease:"back"}, "-=2")
// .from("#content #boxes-grid",{duration:4,alpha:0}, "-=4")
// .from("#content #imagec",{duration:4,alpha:0, x:"+=400"}, "<")
// .from("#content p",{duration:6, x:"+=150", alpha:0, stagger:0.4, ease:"back"}, "-=3")



// ;