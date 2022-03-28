var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('input');
var voiceSelect = document.querySelector('select');
var rate = document.querySelector("#rate");
  ratevalue = document.querySelector("#rate-Value");
  pitch = document.querySelector("#pitch"); 
  pitchValue = document.querySelector("#pitch-value");
   body = document.querySelector('body');





var voices = synth.getVoices();

  let voices = [];
  const getVoices = () => {
      voices = synth.getVoices();
      //loop through voices and create an option one  
      voices.forEach(voice => {
          //create an element
          const option = document.createElement("option");
          //fill option with voice and language
          option.textContent = voice.name + '(' + voice.long + ')';
          // set needed option attribute
          option.setAttribute('data-lang', voice.lang);
          option.setAttribute('data-name', voice.name);
          voiceSelect.appendChild(option);
  
  
  
  
      });
  
      //};
      getVoices();
      if (synth.onvoiceschanged !== undefined) {
          synth.onvoiceschanged = getVoicea;
      }
      //speak
      const speak = () => {
          //check if speaking
          
          if (synth.speaking) {
              console.error('already speaking....');
              return;
          }
          if (textInput.value !== '') {
              // add backgroud animation
          body.style.background = '#141414 url(Ui.jpg)';
          body.style.backgroundRepeat = 'repeat-x';
          body.style.backgroundSize = '100% 100%';
              // get speak text
              const speakText = new SpeechSynthesisUtterance(textInput.value);
              //speak text end
              speakText.onend = e => {
                  console.log('Done speaking......');
                  body.style.background = '#141414';
  
              };
              //speak error
              speakText.onerror = e => {
                  console.log('Something went wrong');
              };
  
              // selected voice
              const selectedVoices = voiceSelect.selectedOption[0].getattribute('data-name');
          };
  
          //loop through voice
          voices.forEach(voice => {
              if (voice.name === selectedVoices) {
                  speakText.voice = voice;
  
              }
          });
          speakText.rate = rate.value;
          speakText.pitch = pitch.value;
          //speak
          synth.speak(speakText);
  
      }
  };
  //Event listen
  //Text form submit
  textForm.addEventListener('submit', e =>{
      speak();
      textInput.blur();
  });
  //Rate value change
  rate.addEventListener('change',e => ratevalue.textContent = rate.value)
  
  //pitch value change
  pitch.addEventListener('change',e => pitchvalue.textContent = pitch.value)
  //voice select change
  voiceSelect.addEventListener('change', e => speak());

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
}
