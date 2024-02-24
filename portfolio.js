let header= document.getElementById("header");
let navbar= document.getElementById("Navbar");
let Name= document.getElementById("Name");
let image= document.getElementById("Image");
let text = document.getElementById("Text");


window.addEventListener('scroll',()=>{
    let value= window.scrollY;

    header.style.marginLeft= value *(-2.5) + 'px';
    navbar.style.marginRight= value* (-2.5) + 'px';
    // image.style.marginRight= value*(-2.5)+ 'px';
    // Name.style.marginLeft= value*(1.5) + 'px';
    // text.style.marginLeft= value*(1.5) + 'px';
}
)