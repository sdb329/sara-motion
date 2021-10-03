// import { gsap } from "gsap";
import { gsap } from "gsap";

// // const 
// // var
// // let

const mainTL = gsap.timeline();

mainTL

.from("header",{duration:1.5, y:"-=150"})
.from("header li",{duration:.5, y:"+=150", alpha:0, stagger:0.1, ease:"back"})
.from("header a",{duration:.5, y:"+=150", alpha:0, rotation:360, ease:"back"}, "<")






.from("#hero",{duration:2,alpha:0, scale:2}, "-=2")
.from("#hero #header1",{duration:2,y:"+=900", alpha:0, ease:"elastic"},"-=1")
.from("#hero #l1",{duration:2.5,y:"+=400", alpha:0, rotation:360, ease:"back"},"-=1")
.from("#hero #l2",{duration:2.5,y:"+=900", alpha:0, rotation:360, ease:"back"},"-=2.5")


.from("#content h2",{duration:2.5,scale:0, alpha:0, rotation:360, ease:"back"}, "-=2")
.from("#content #boxes-grid",{duration:4,alpha:0}, "-=4")
.from("#content #imagec",{duration:4,alpha:0, x:"+=400"}, "<")
.from("#content p",{duration:6, x:"+=150", alpha:0, stagger:0.4, ease:"back"}, "-=3")



;

