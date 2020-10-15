gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
  units: {left: "%", top: "%", rotation: "rad"}
});
const page = document.querySelector(".page");
const nav = document.querySelector(".nav");

gsap.set(page,{height:"50vh",width:"0",ease: "elastic",borderRadius:"100px"});
gsap.timeline().to(page,{height:"50vh",width:"100%",borderRadius:"0px",duration:1});
