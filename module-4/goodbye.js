(function(window){
    var speakword = "Good Bye"
    var byeSpeaker = (name) => {
        console.log(speakword+" "+name)
    }    
    window.byeSpeaker = byeSpeaker;
})(window);