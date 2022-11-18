var modal=document.getElementById("mymodal");
var btn=document.getElementById("mybutton");

var close=document.getElementsByClassName("close")[0];
console.log(close);

btn.onclick=function(){
    modal.style.display="block";
};
close.onclick=function(){
    modal.style.display="none";
}
window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none";
    }
}