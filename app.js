var min=0;
var sec=0;
var msec=0;
var minHead=document.getElementById("min");
var secHead=document.getElementById("sec");
var msecHead=document.getElementById("msec");
var interval;
function timer(){
    msec++
    msecHead.innerHTML=msec
    if(msec>=100){
        sec++
        secHead.innerHTML=sec
        msec=0
        if(sec>=60){
            min++
            minHead.innerHTML=min
            sec=0
        }
    }
}
function start(){
interval=setInterval(timer,10)
}
function stop(){
    clearInterval(interval)

}
function reset(){
    min=0
    sec=0
    msec=0
    msecHead.innerHTML=msec
    secHead.innerHTML=sec
    minHead.innerHTML=min
    stop()
    
    
    


}