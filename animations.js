document.getElementById('wordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const word = document.getElementById('wordInput').value;
    // drawWordOnCanvas(word);
    // renderInDiv(word);

    // add word to cloud
    addWordToCloud(word);
});

// let wordCloud = document.getElementById('wordCloudCanvas') 

function renderInDiv(word) {
    console.log("deeznuts")
}

function addWordToCloud(word) {
    // This function would add the word to the visual word cloud
    // For the purposes of this example, we'll just append it to the div
    var wordCloud = document.getElementById('wordCloudCanvas');
    var newWordSpan = document.createElement('span');
    newWordSpan.textContent = word + " "; // Add space after word
    wordCloud.appendChild(newWordSpan);
  }
  

// function drawWordOnCanvas(word) {
//     // let canvas = document.getElementById('canvas'); //wont work because this selects the id of canvas
//     const canvas = document.querySelector('canvas');
//     let ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
//     ctx.font = '30px Arial';
//     ctx.fillText(word, 10, 50); // Draw the word
// }