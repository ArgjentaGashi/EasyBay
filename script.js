console.log("JS is running...");

function emptyCard(){
    alert("Your Cart is empty");
}

function changeImage(){
    document.querySelector(".hover-image").src = "images/succulents-2.jpg";
}
function resetImage(){
    document.querySelector(".hover-image").src = "images/succulents-1.jpg";
}
function removeAlert(){
    document.querySelector(".alert").remove();
}
