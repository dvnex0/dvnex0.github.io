const els=document.querySelectorAll('.features article,.launch-box,.download-card,.device');const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;e.target.animate([{opacity:0,transform:'translateY(25px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.8,.2,1)',fill:'both'});io.unobserve(e.target)})},{threshold:.12});els.forEach(e=>io.observe(e));
function showChange(type){
 const android=document.getElementById("androidChanges");
 const pc=document.getElementById("pcChanges");
 const official=document.getElementById("officialChangelogLink");
 const pcUrl="https://github.com/dvnex0/DVNexPC/releases/tag/BrowserPC";
 const androidUrl="https://github.com/DVTech0/DVNex/releases/tag/Browser";
 if(android && pc){
  const isPc=type==="pc";
  android.style.display=isPc ? "none" : "block";
  pc.style.display=isPc ? "block" : "none";
  if(official){
   official.href=isPc ? pcUrl : androidUrl;
  }
 }
}
