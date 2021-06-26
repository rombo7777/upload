function getText() {
  dojo.xhrGet({
    url: "https://www.emmys.com/",
        load: function(response, ioArgs){
      //The repsone is the HTML
      return response;
    },
    error: function(response, ioArgs){
      return response;
    },
    handleAs: "text"
  });
}

document.querySelector("html").innerHTML = getText();
