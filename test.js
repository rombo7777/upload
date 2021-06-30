function load_home () {

    //fetch("https://180.61.190.35" /*, options */)
    console.log("start code");
    fetch("https://google.com" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        //document.querySelector("html").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
    console.log("start code end");
} 
load_home();
