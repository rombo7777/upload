function load_home () {

    //fetch("https://180.61.190.35" /*, options */)
    fetch("http://www.releasewire.com" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.querySelector("html").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
} 
load_home();
