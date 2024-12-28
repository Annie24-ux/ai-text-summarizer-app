const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const utterance = new SpeechSynthesisUtterance();



const speakButton = document.getElementById("speakButton");

speakButton.addEventListener("click", () => {
  utterance.text = summarizedTextArea.value; 
  console.log("Below voice...");
  window.speechSynthesis.speak(utterance); 
});




submitButton.disabled = true;

const summarizedTextArea = document.getElementById("summary");
textArea.addEventListener("input", verifyTextLength);

submitButton.addEventListener("click", submitData);


function verifyTextLength(e) {
  const textarea = e.target;
  const textLength = textarea.value.length;

  if (textLength > 200 && textLength < 100000) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

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
    .then(response => response.text())
    .then(summary => {
      summarizedTextArea.value = summary;
      console.log("Actual log: "+ summarizedTextArea.value);

      submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
      console.error("Error:", error.message);
    });
}