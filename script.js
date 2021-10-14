function hide(Element) {
    Element.remove();
}

function turnlogoff(element){
    if(element.innerText=="Login"){
    element.innerText = "Logout";
    }   else {
        element.innerText= "Login";
    }
}