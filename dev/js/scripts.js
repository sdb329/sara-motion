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
    tl.set("#mask-arctic-foods", {
        x: "+=620"
     });
     tl.set("#arctic-foods-text", {
        x: "-=50"
     });


    tl.set("#mask1", {
        x: "-=300"
     });

     tl.set("#mask2", {
        y: "-=350"
     });





    tl.set("#shiver-right", {
        alpha:0
     });
     tl.set("#shiver-left", {
        alpha:0
     });


     
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
        alpha: 0,
        duration: .01
    });

    tl.fromTo("#drawsvg-snowflake", {

        duration: 2,
        drawSVG: "0% 8.5%"
    }, {
        duration: 2,
        ease: "slowMiddle",
        drawSVG: "90% 100%"
    });

    tl.set("#drawsvg-snowflake", {

        duration: 1,
        alpha: 0
    });

    return tl;


}


function cowOutline() {

    const tl = gsap.timeline();

    tl.from("#cowDrawSVG", {
        duration: 5,
        drawSVG: "0%"
    });

    tl.from("#cow-mouth", {
        duration: .5,
        drawSVG: "0%"
    }, "-=3");

    tl.from("#nose", {
        duration: .5,
        alpha: 0
    }, "-=2.5");

    tl.from("#cow-spot", {
        duration: .5,
        alpha: 0
    }, "-=1");
    tl.from("#horn-front", {
        duration: .5,
        alpha: 0
    });
    tl.from("#horn-back", {
        duration: .5,
        alpha: 0
    }, "-=1");
    tl.from("#closedeye", {
        duration: .5,
        drawSVG: "0%"
    }, "-=.7");

    tl.to("#closedeye", {
        duration: 0.1,
        alpha: 0
    }, "eyeblinking");

    tl.from("#openeye", {
        duration: 0.1,
        alpha: 0
    }, "eyeblinking");

    tl.from(".cowwhole", {
        duration: 0.1,
        alpha: 0
    }, "eyeblinking");

    tl.to("#cowDrawSVG", {
        duration: 0.1,
        alpha: 0
    }, "eyeblinking");



    return tl;
}


function blue() {

    const tl = gsap.timeline();

    tl.from("#cow-body-cold", {
        duration: 1,
        alpha: 0
    });

    tl.to("#cow-body", {
        duration: 1,
        alpha: 0
    });

    return tl;
}

function shivering() {

    const tl = gsap.timeline();

    tl.from("#shiveringeye", {
        duration: 0.05,
        alpha: 0
    }, "shivereye");

    tl.to("#openeye", {
        duration: 0.05,
        alpha: 0
    }, "shivereye")



    return tl;
}

function shivering2() {

    const tl = gsap.timeline();

    tl.to(".shiver-cow-whole", {

        x: "-=20",
        duration: .1,
        ease: "none",
        yoyo: true,
        repeat: 20
    }, "shiversametime");

    tl.to(".shiver-cow-whole", {

        y: "-=20",
        duration: .3,
        ease: "none",
        yoyo: true,
        repeat: 6
    }, "shiversametime");
    return tl;

}

function shivering3() {

    const tl = gsap.timeline();


    tl.set("#shiver-right", {
        alpha:1
     });
     tl.set("#shiver-left", {
        alpha:1
     });

    tl.fromTo(".shiverrrr1", {

        duration: .5,
        drawSVG: "0% 40%",
        repeat: 4,
        alpha: 0
    }, {
        duration: .5,
        drawSVG: "60% 100%",
        alpha: 1,
        ease: "none"
    }, "shiverLines1");

    tl.fromTo(".shiverrrr1", {

        duration: .5,
        drawSVG: "60% 100%",
        repeat: 4,
        alpha: 1
    }, {
        duration: .5,
        drawSVG: "0% 40%",
        alpha: 1,
        ease: "none"
    }, "shiverLines2");

    tl.fromTo(".shiverrrr1", {

        duration: .5,
        drawSVG: "0% 40%",
        repeat: 4,
        alpha: 1
    }, {
        duration: .5,
        drawSVG: "60% 100%",
        alpha: 1,
        ease: "none"
    }, "shiverLines3");

    tl.fromTo(".shiverrrr1", {

        duration: .5,
        drawSVG: "60% 100%",
        repeat: 4,
        alpha: 1
    }, {
        duration: .5,
        drawSVG: "0% 40%",
        alpha: 0,
        ease: "none"
    }, "shiverLines4");












    tl.fromTo(".shiverrrr2", {

        duration: .5,
        drawSVG: "60% 100%",
        ease: "none",
        alpha: 0
    }, {
        duration: .5,
        drawSVG: "0% 40%",
        alpha: 1,
        ease: "none"
    }, "shiverLines1");

    tl.fromTo(".shiverrrr2", {

        duration: .5,
        drawSVG: "0% 40%",
        ease: "none",
        alpha: 1
    }, {
        duration: .5,
        drawSVG: "60% 100%",
        alpha: 1,
        ease: "none"
    }, "shiverLines2");

    tl.fromTo(".shiverrrr2", {

        duration: .5,
        drawSVG: "60% 100%",
        ease: "none",
        alpha: 1
    }, {
        duration: .5,
        drawSVG: "0% 40%",
        alpha: 1,
        ease: "none"
    }, "shiverLines3");

    tl.fromTo(".shiverrrr2", {

        duration: .5,
        drawSVG: "0% 40%",
        ease: "none",
        alpha: 1
    }, {
        duration: .5,
        drawSVG: "60% 100%",
        alpha: 0,
        ease: "none"
    }, "shiverLines4");




    return tl;

}


function scarf() {

    const tl = gsap.timeline();

    tl.to(".shiver-cow-whole", {

        y: "+=20",
        duration: 1,
        ease: "back"
    }, "warmth");

    tl.to("#cow-body", {
        duration: 1,
        alpha: 1
    }, "warmth");

    tl.to("#cow-body-cold", {
        duration: 1,
        alpha: 0
    }, "warmth");


    tl.to("#shiveringeye", {
        duration: 0.05,
        alpha: 0
    }, "shivereye2");

    tl.to("#openeye", {
        duration: 0.05,
        alpha: 1
    }, "shivereye2")


    return tl;

}

function scarf2() {

    const tl = gsap.timeline();

    tl.set("#neck",
        
        {
            x: "-=27"
        })

        tl.set("#tassels",
        
        {
            x: "-=25"
        })

    tl.to("#mask1", {

        x: "+=300",
        duration: 1,
        ease: "power1"
    });

    tl.to("#mask2", {

        y: "+=350",
        duration: 1,
        ease: "power1"
    }, "-=.7");

    return tl;

}

function arcticFoodsMove() {

    const tl = gsap.timeline();

   tl.to(".word-move",
       
    {

        x: "-=350",
        ease: "back"
    }, "sameTimeLetters")

    tl.to("#letters-move",
       
    {

        x: "+=160",
        ease: "arcticFoods",
        stagger: 1
    }, "sameTimeLetters")

    return tl;

}




CustomEase.create("slowMiddle", "M0,0 C0.13,0.428 0.111,0.394 0.462,0.534 0.764,0.654 0.876,0.7 1,1 ");

CustomEase.create("arcticFoods", "M0,0 C0,0 0,0 0,0 0.06,0.954 0.264,1.83 0.488,1.83 0.782,1.83 0.77,1 1,1 1.034,1 1,1 1,1 ");
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
    .add(cowOutline(), "-=3")
    .add(blue())
    .add(shivering(), "-=1.5")
    .add(shivering2(), "-=1")
    .add(shivering3(), "-=2")
    .add(scarf())
    .add(scarf2(), "-=.5")
    .add(arcticFoodsMove(), "-=.5")


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