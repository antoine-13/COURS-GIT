window.onresize = function(){
    getScroll();

}

var headerHeight = document.getElementById("header").scrollHeight;
var img = document.getElementById("image-transition");
var caractHeight = document.getElementById("caracteristique").scrollHeight;
var animationDiv = document.getElementById("animation");
var totalHeight = headerHeight + (caractHeight/1.25);
var windowHeight = window.innerHeight;
console.log(windowHeight/2);
function getScroll(){
    var windowHeight = window.innerHeight;
    var headerHeight = document.getElementById("header").scrollHeight;
    var img = document.getElementById("image-transition");
    var caractHeight = document.getElementById("caracteristique").scrollHeight;
    var animationDiv = document.getElementById("animation");
    var totalHeight = headerHeight + (caractHeight/2)
}

window.addEventListener('scroll', () =>{
    if(window.scrollY >= totalHeight){
        animationDiv.style.position = "fixed";
        animationDiv.style.top = '300px';

        if(window.scrollY >= (totalHeight + 250)){
            img.setAttribute("src", "..\\..\\assets\\img\\YAMAHA_IMG4.jpg");

            if(window.scrollY >= (totalHeight + 500)){
                img.setAttribute("src", "..\\..\\assets\\img\\YAMAHA_IMG2.jpg");

                if(window.scrollY >= (totalHeight + 750)){
                    img.setAttribute("src", "..\\..\\assets\\img\\YAMAHA_IMG3.jpg");
                }
                else{
                    img.setAttribute("src", "..\\..\\assets\\img\\YAMAHA_IMG2.jpg");
                }
            }
            else{
                img.setAttribute("src", "..\\..\\assets\\img\\YAMAHA_IMG4.jpg");
            }
        }

        else{
            img.setAttribute("src", "..\\..\\assets\\img\\YAMAHA_IMG5.jpg");
        }
    }
    else if(window.scrollY < totalHeight){
        animationDiv.style.position = "relative";
        animationDiv.removeAttribute("top");
    }
})