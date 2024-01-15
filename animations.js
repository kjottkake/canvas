document.getElementById('wordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const word = document.getElementById('wordInput').value;
    // add word to cloud
    addWordToCloud(word);
    this.reset();
});

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
}

function getRandomSize() {
    // Define the range for your font sizes, e.g., between 12px and 36px
    const minSize = 36;
    const maxSize = 64;
    return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
}


function addWordToCloud(word) {
    // This function would add the word to the visual word cloud
    // For the purposes of this example, we'll just append it to the div
    var wordCloud = document.getElementById('wordCloudBoard');
    var newWordSpan = document.createElement('span');
    newWordSpan.style.color = getRandomColor();
    newWordSpan.style.fontSize = `${getRandomSize()}px`;
    newWordSpan.textContent = word + " "; // Add space after word
    wordCloud.appendChild(newWordSpan);
  }
  
