(function(){
    var name = ["Yamoto", "Isabella", "John", "Jenny", "Jason", "Paul", "Franklin", "Lord", "Pablo", "Lisbon", "Juice Wrld"];
    
    for(var i=0; i<name.length; i++){
        var firstletter = name[i].charAt(0).toLowerCase();

        if(firstletter === 'j' || firstletter === 'i'){
            byeSpeaker(name[i])
        }

        else{
            helloWord(name[i])
        }
    }
})()