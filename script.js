const API_KEY = "AIzaSyAOep7x9IPMUaiRUVCt0K0aWU5IvRHvDc8";

// Function to translate text using the Google Cloud Translation API
async function translateText(text, targetLanguage) {
    // Send a GET request to the Google Cloud Translation API
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?q=${text}&target=${targetLanguage}&key=${API_KEY}`
    );
    
    // Parse the JSON response from the API
    const data = await response.json();
    
    // Return the translated text from the API response
    return data.data.translations[0].translatedText;
  }
  
  // Add a click event listener to the translate button
  document.getElementById("translateButton").addEventListener("click", async function() {
    // Get the input text and target language from the HTML form
    const inputText = document.getElementById("inputText").value;
    const targetLanguage = document.getElementById("language").value;
    
    // Translate the input text and store the result in a variable
    const translatedText = await translateText(inputText, targetLanguage);
    
    // Display the translated text in the HTML page
    document.getElementById("outputText").innerText = translatedText;
  });