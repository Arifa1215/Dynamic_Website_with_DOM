function offSwitch(){
    document.getElementById("bulbImage").src= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("offButton").style.backgroundColor = "rgb(184, 179, 179)";
    document.getElementById("onButton").style.backgroundColor = "green"
    document.getElementById("switchHeading").textContent = "Switch Off"

}

function onSwitch(){
    document.getElementById("bulbImage").src= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("offButton").style.backgroundColor = "red";
    document.getElementById("onButton").style.backgroundColor = "rgb(184, 179, 170)";
    document.getElementById("switchHeading").textContent = "Switch On";
}
