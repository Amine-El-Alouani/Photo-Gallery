function upDate(previewPic) {
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage =
        "url(" + previewPic.src + ")";
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}

function addTabFocus() {
    console.log("Page loaded, adding tabindex and event listeners");

    const images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        images[i].addEventListener("focus", function () {
            upDate(this);
        });
        images[i].addEventListener("blur", function () {
            unDo();
        });
    }
}

window.onload = addTabFocus;
