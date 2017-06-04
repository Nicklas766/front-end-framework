window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("wrap-header").className = "wrap-header scroll-header";
    } else {
        document.getElementById("wrap-header").className = "wrap-header";
    }
}
