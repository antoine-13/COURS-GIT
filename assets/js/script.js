window.onresize = function(){
    getScroll();

}

var headerHeight = document.getElementById("header").scrollHeight;
var caractHeight = document.getElementById("caracteristique").scrollHeight;
var animationDiv = document.getElementById("animation");
var totalHeight = headerHeight + (caractHeight/2) + 40;
var windowHeight = window.innerHeight;
var scrollDiv = document.getElementById("scroll")

var image1 = document.getElementById("image-1");
var image2 = document.getElementById("image-2");
var image3 = document.getElementById("image-3");
var image4 = document.getElementById("image-4");

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
        animationDiv.style.display = "flex";
        animationDiv.style.top = '0px';
        animationDiv.style.left = '0px';
        scrollDiv.style.display = "block"

        if(window.scrollY >= (totalHeight + windowHeight)){
            image1.classList.remove("show");
            image2.classList.add("show");


            if(window.scrollY >= (totalHeight + windowHeight*2)){
                image2.classList.remove("show");
                image3.classList.add("show");

                if(window.scrollY >= (totalHeight + windowHeight*3)){
                    image3.classList.remove("show");
                    image4.classList.add("show");
                }
                else{
                    image4.classList.remove("show");
                    image3.classList.add("show"); 
                }
            }
            else{
                image3.classList.remove("show");
                image2.classList.add("show");
            }
        }
        else{
            image2.classList.remove("show");
            image1.classList.add("show");
        }
    }
    else if(window.scrollY < totalHeight){
        animationDiv.style.position = "relative";
        animationDiv.style.display = "block";
        animationDiv.style.top = "0px"
        scrollDiv.style.display = "none"
    }
})