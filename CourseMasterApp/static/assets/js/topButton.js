document.addEventListener("DOMContentLoaded", function () {
    var topButton = document.getElementById("topButton");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    topButton.addEventListener("click", scrollToTop);
});