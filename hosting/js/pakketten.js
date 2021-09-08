var p1 = document.querySelector("#pakketten1")
var p2 = document.querySelector("#pakketten2")
var p3 = document.querySelector("#pakketten3")
var btn = document.querySelector("#pakkettenBtn")
var pStatus = 0;

function showMore(){
    console.log(pStatus)
    if (pStatus == 0) {
        pStatus = 1
        p1.classList.remove("hidden")
        p1.classList.add("animation")
    } else if (pStatus == 1) {
        pStatus = 2
        p2.classList.remove("hidden")
        p2.classList.add("animation")
    } else if (pStatus == 2) {
        pStatus = 3
        p3.classList.remove("hidden")
        p3.classList.add("animation")
        btn.classList.add("hidden")
    } else {
        return
    }
}

btn.addEventListener("click", showMore)