const rextarea = document.querySelector('textarea');
condt = button = document.querySelector('button');
const readLoud = (message) =>{
    const Speech = new SpeechSynthesisUtterance();
  speechRecognition.text =message;
  Speech.rate = 1;
  Speech.pitcch = 1;
  Speech.volume = 1;
  Window.SpeechSynthesis.speah(speech);

};
button.onclick = () =>{
    const text = textarea.value;
    if(text !="" || text != " "){
        readLoud(text);

    }
};