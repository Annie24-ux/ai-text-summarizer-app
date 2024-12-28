const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const listenButton = document.getElementById("audio");

//TextToSpeech
let speech = new SpeechSynthesisUtterance();
let voiceSelect = document.querySelector("select");
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  // voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// voiceSelect.addEventListener("change", () => {
//   speech.voice = voices[voiceSelect.value]; // Get the voice object based on index
//   speech.lang = voices[voiceSelect.value].lang; // Set language explicitly
//   console.log("Chosen voice: " + speech.voice.name + " (" + speech.lang + ")");
// });

listenButton.addEventListener("click", () => {
  speech.text = document.getElementById("summary").value;
  console.log("Text to speak:", speech.text);
  // console.log("Voice:", speech.voice.name);
  console.log("Language:", speech.lang);
  console.log("Attempting to speak...");

  // Check if the speech synthesis engine is already speaking
  if (window.speechSynthesis.speaking) {
    console.log("Previous utterance is still speaking. Skipping this one.");
    return;
  }

  try {
    window.speechSynthesis.speak(speech);
  } catch (error) {
    console.error("Error speaking:", error);
  }
});

// Disable the submit button initially
submitButton.disabled = true;

// Listen for input changes and enable/disable the submit button
const summarizedTextArea = document.getElementById("summary");
textArea.addEventListener("input", verifyTextLength);

// Handle form submission
submitButton.addEventListener("click", submitData);


// Verify the length of the input text
function verifyTextLength(e) {
  const textarea = e.target;
  const textLength = textarea.value.length;

  if (textLength > 200 && textLength < 100000) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// Submit the data to the server
function submitData(e) {
  submitButton.classList.add("submit-button--loading");

  const text_to_summarize = textArea.value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer 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");

  const raw = JSON.stringify({
    "text_to_summarize": text_to_summarize
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch('/summarize', requestOptions)
    .then(response => response.text()) // Response will be summarized text
    .then(summary => {
      // Update the output text area with the new summary
      summarizedTextArea.value = summary;

      // Stop the spinning loading animation
      submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
      console.error("Error:", error.message);
    });
}