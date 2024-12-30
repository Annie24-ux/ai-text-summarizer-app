# AI Text Summarizer

## Project Overview
The AI Text Summarizer is a web-based application designed to help users generate concise summaries of large text inputs. It leverages modern AI-powered text summarization techniques, providing a seamless and user-friendly experience. With features like real-time character and word counting, text-to-speech (TTS) playback, and more planned enhancements, this tool is ideal for students, researchers, content creators, and anyone looking to simplify complex information.

---

## Key Features

1. **Text Summarization**:
   - Input text ranging from **200 characters to 100,000 characters**.
   - Generate accurate and meaningful summaries.

2. **Character and Word Counter**:
   - Displays live updates on the number of characters and words in the input.

3. **Text-to-Speech (TTS)**:
   - Listen to the generated summary with a single click.

4. **Server-Client Architecture**:
   - Backend powered by **Node.js**.
   - Frontend developed using **JavaScript**, **HTML**, and **CSS**.

5. **Future Enhancements**:
   - Ability to **save** and **share summaries**.
   - Generate **image summaries** (visual representation of the summary).
   - Extract and display **keywords** from the summary.

---

## Prerequisites

Before running the project, ensure you have the following:

- **Node.js** installed on your system.
- A modern web browser (e.g., Chrome, Firefox).

---

## Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone <https://github.com/Annie24-ux/ai-text-summarizer-app.git>
   cd ai-text-summarizer
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Server**:
   ```bash
   node summarizer.js
   ```

4. **Access the Application**:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Usage Instructions

1. **Enter Text**:
   - Paste or type your text input into the provided text box (minimum 200 characters, maximum 100,000 characters).

2. **View Character and Word Count**:
   - Real-time counters update as you type.

3. **Generate Summary**:
   - Click the **"Summarize"** button to generate a summary.

4. **Listen to Summary**:
   - Use the **"Listen"** button to play a text-to-speech version of the summary.

---

## File Structure

```
.
|-- summarizer.js         # Backend server implementation (Node.js)
|-- public/
|   |-- index.html    # Main HTML file
|   |-- styles.css    # Styling for the application
|   |-- script.js     # Frontend JavaScript logic
|-- package.json      # Node.js dependencies and scripts
|-- README.md         # Project documentation
```

---

## Technologies Used

- **Backend**: Node.js
- **Frontend**: JavaScript, HTML, CSS
- **AI Summarization**: Integrated using external AI APIs or libraries (e.g., Hugging Face Inference API, OpenAI).
- **Text-to-Speech**: Utilizes modern browser APIs or external libraries.

---

## Future Enhancements

1. **Save and Share Summaries**:
   - Save summaries to your local storage or share them via email or social media.

2. **Image Summaries**:
   - Generate visual representations of summaries for easy sharing or understanding.

3. **Keyword Extraction**:
   - Automatically extract relevant keywords from the summary for indexing or SEO purposes.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your fork.
4. Submit a pull request with a detailed explanation of your changes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Contact

For questions, suggestions, or feedback, please contact:

- **Email**: sibiyasa24@gmail.com


---

Thank you for using the AI Text Summarizer! We hope it makes your work easier and more productive.

