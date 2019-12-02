myNavBar = document.querySelector("#myNavbar");
console.log(myNavBar);
myButton = document.getElementsByTagName("button")[0];
console.log(myButton);
myLi = document.getElementsByClassName("navbar-nav")[0].querySelectorAll("li");
console.log(myLi);
myLi.forEach(function(list){
    list.addEventListener("click",function(){
        myButton.classList.toggle("collapsed");
        myNavBar.classList.toggle("in");
        myButton.aria-expanded("false");
    })
})
var myDate = Date.getDay();
console.log(myDate);
