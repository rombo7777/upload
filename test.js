function load_home () {
    fetch("generatinog.info" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.querySelector("html").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
} 
load_home();
