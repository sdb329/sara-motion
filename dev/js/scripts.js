import { gsap } from "gsap";

// // const 
// // var
// // let

const mainTL = gsap.timeline();

mainTL

.from("header",{duration:1.5, y:"-=150"})
.from("header li",{duration:.5, y:"+=150", alpha:0, stagger:0.1, ease:"back"})
.from("header a",{duration:.5, y:"+=150", alpha:0, rotation:360, ease:"back"}, "<")






.from("#hero article",{duration:2,alpha:0, scale:2}, "-=2")
.from("#hero #header1",{duration:2,y:"+=900", alpha:0, ease:"elastic"},"-=1")
.from("#hero #l1",{duration:2.5,y:"+=400", alpha:0, rotation:360, ease:"back"},"-=1")
.from("#hero #l2",{duration:2.5,y:"+=900", alpha:0, rotation:360, ease:"back"},"-=2.5")

;

