document.getElementById("publicTour").addEventListener("click", function() {
    document.getElementById("publicTour").classList.add("active");
    document.getElementById("privateTour").classList.remove("active");
    document.getElementById("publicOptions").style.display = "flex";
    document.getElementById("privateOptions").style.display = "none";
});

document.getElementById("privateTour").addEventListener("click", function() {
    document.getElementById("privateTour").classList.add("active");
    document.getElementById("publicTour").classList.remove("active");
    document.getElementById("privateOptions").style.display = "flex";
    document.getElementById("publicOptions").style.display = "none";
});
