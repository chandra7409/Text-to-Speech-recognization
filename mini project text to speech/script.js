var speechRecognition = Window.webkitSpeechRecognition
var recognition = new speechRecognition()
var textbox = $("#textbox")
var instructions = $("#instructions")
var content = ''
recognition.continuos = true
//recognition its start

recognition.onstart = function(){
    instructions.text("voice recognition is on ")
}
recognition.onspeechend = function (){
    instructions.text("No Activity")
}
recognition.onerror = function (){
    instructions.text("Try Again")
}


recognition.onresult = function (){
    var current = Event.result[current][0].transcript
    content += transcript
    textbox.val(content)
}
$("#start-btn").click(function(events){
    if(content.length){
        content +=''
    }
    recognition.start()
})


textbox.on('input', function (){
    content = $(this).val()
})