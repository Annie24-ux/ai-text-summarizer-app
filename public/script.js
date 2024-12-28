const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const utterance = new SpeechSynthesisUtterance();



//NewVoice
const speakButton = document.getElementById("speakButton");

speakButton.addEventListener("click", () => {
  utterance.text = "This is a test message."; 
  console.log("Below voice...");
  window.speechSynthesis.speak(utterance); 
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
      console.log("Actual log: "+ summarizedTextArea.value);

      // Stop the spinning loading animation
      submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
      console.error("Error:", error.message);
    });
}