document.getElementById('wordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const word = document.getElementById('wordInput').value;
    // add word to cloud
    addWordToCloud(word);
});

function addWordToCloud(word) {
    // This function would add the word to the visual word cloud
    // For the purposes of this example, we'll just append it to the div
    var wordCloud = document.getElementById('wordCloudBoard');
    var newWordSpan = document.createElement('span');
    newWordSpan.textContent = word + " "; // Add space after word
    wordCloud.appendChild(newWordSpan);
  }
  
