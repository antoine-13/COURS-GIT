window.onresize = function(){
    getScroll();

}

var headerHeight = document.getElementById("header").scrollHeight;
var caractHeight = document.getElementById("caracteristique").scrollHeight;
var animationDiv = document.getElementById("animation");
var totalHeight = headerHeight + (caractHeight/1.25);
var windowHeight = window.innerHeight;
console.log(windowHeight/2);
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
        animationDiv.style.top = '300px';

        if(window.scrollY >= (totalHeight + 250)){
            image1.classList.add("hidden");
            image1.classList.remove("show");
            image2.classList.add("show");
            image2.classList.remove("hidden");

            if(window.scrollY >= (totalHeight + 500)){
                image2.classList.add("hidden");
                image2.classList.remove("show");
                image3.classList.add("show");
                image3.classList.remove("hidden");

                if(window.scrollY >= (totalHeight + 750)){
                    image3.classList.add("hidden");
                    image3.classList.remove("show");
                    image4.classList.add("show");
                    image4.classList.remove("hidden");
                }
                else{
                    
                }
            }
            else{
                
            }
        }
        else{
            
            
        }
    }
    else if(window.scrollY < totalHeight){
        animationDiv.style.position = "relative";
        animationDiv.removeAttribute("top");
    }
})