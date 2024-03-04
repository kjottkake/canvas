const wordsArray = [];

let words = {};

function addWord(original, translation){
    words[original] = translation;
}


document.getElementById('wordForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const word = document.getElementById('wordInput').value;

    try {
        const response = await fetch("http://localhost:5000/translate", {
            method: "POST",
            body: JSON.stringify({
                q: word,
                source: "nb",
                target: "en",
                format: "text",
                api_key: ""
            }),
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json()

        let translatedText = data.translatedText + " " //adds space

        //adds to object
        addWord(word, translatedText);

    // add word to cloud
    addWordToCloud(word, translatedText);
    
    //add word to localArray
    wordsArray.push(word);
    console.log("words array: " + wordsArray);
    console.log("words object: ", words);
    // console.log(`words object: ${JSON.stringify(words)}`);

    this.reset();

    } catch (error) {
        console.error('somethign fucked up during translation', error);
        // translatedTextElement.textContent = 'Translation failed.';
    }
});

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
}

function getRandomSize() {
    // Define the range for your font sizes, e.g., between 12px and 36px
    const minSize = 64;
    const maxSize = 128;
    return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
}


function addWordToCloud(word, tT) {
    // This function would add the word to the visual word cloud
    // For the purposes of this example, we'll just append it to the div
    var wordCloud = document.getElementById('wordCloudBoard');
    var newWordSpan = document.createElement('span');

    var newWordDefSpan = document.createElement('span');
    
    newWordSpan.style.color = getRandomColor();
    newWordSpan.style.fontSize = `${getRandomSize()}px`;
    newWordSpan.textContent = word + "  "; // Add space after word

    newWordDefSpan.textContent = tT

    wordCloud.appendChild(newWordSpan);
    wordCloud.appendChild(newWordDefSpan);
    
  }
  
