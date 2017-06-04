function mySwitcher(x) {
    x.classList.toggle("change");
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("wrap-all").classList.toggle("move");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                document.getElementById("menu").classList.toggle("change");
                document.getElementById("myDropdown").classList.toggle("show");
                document.getElementById("wrap-all").classList.toggle("move");
                openDropdown.classList.remove('show');
            }
        }
    }
};
