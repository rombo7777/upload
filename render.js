function load_home (e) {
    (e || window.event).preventDefault();

    fetch("https://www.emmys.com/" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.querySelector("html").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
} 

