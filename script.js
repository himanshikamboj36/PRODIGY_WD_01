function toggleMenu(){
document.getElementById("navLinks").classList.toggle("active");
}

document.querySelector("form").addEventListener("submit",function(e){
e.preventDefault();
alert("Thank you for contacting Coffee Cafe!");
});