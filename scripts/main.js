let myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/make.jpeg") {
        myImage.setAttribute("src", "images/image.jpg");
    } else {
        myImage.setAttribute("src", "images/make.jpeg");
    }

};//yes


let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello WangHan";