var like=document.getElementById("add");
var dislike=document.getElementById("sub");
var int=document.getElementById("display");
var integer=0;



like.addEventListener("click", function(){
                integer=integer+1
                int.innerHTML=integer;

})

dislike.addEventListener("click", function(){
    integer=integer-1
    int.innerHTML=integer;

})


