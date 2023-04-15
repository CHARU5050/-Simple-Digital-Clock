let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let sec=document.getElementById("seconds");
let ap=document.getElementById("ampm")
 
function updateclock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    if (h>12)
    {
        h=h-12;
        ap.innerText="PM";
    }
    hour.innerText=h;
    minute.innerText=m;
    sec.innerText=s;
 setTimeout(()=>{
    updateclock()
 },1000);

}
updateclock();