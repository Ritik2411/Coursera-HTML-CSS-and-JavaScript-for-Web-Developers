(function(window){
    var speakWord = "Hello";
    var helloWord = (name) => {
		console.log(speakWord + " " + name);
	}

    window.helloWord = helloWord;
})(window)