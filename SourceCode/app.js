const mainNav = document.getElementById("mainNav")

document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 0) {
        mainNav.classList.add("bg-black")
        mainNav.classList.add("txt-white")
        mainNav.style.height = "40px"
    } else {
        mainNav.classList.remove("bg-black")
        mainNav.classList.remove("txt-white")
        mainNav.style.height = "60px"
    }
})