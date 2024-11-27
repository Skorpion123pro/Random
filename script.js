const questionSets = [
  ["Implementation of logistic regression for any dataset", "Rotate an image 90° clockwise using OpenCV"],
  ["SVM", "Image properties using OpenCV"],
  ["Gray scale conversion", "Smoothing techniques"],
  ["Harris corner detection using OpenCV", 
   "Create a dictionary and a dataframe from it, then plot a graph with dashed lines (green, width 1.5cm, linear shape)"],
  ["Print adjacent nodes of a given node using a dictionary", "BFS implementation"],
  ["Implement DFS", 
   "Visualize student marks in multiple subjects using Matplotlib and Pandas (line chart and histogram)"],
  ["Shi-Tomasi corner detection", "Display each color channel (R, G, B) individually"],
  ["Calculate Euclidean distance", "Face and eye detection using Haar cascades"],
  ["Linear regression", 
   "Visualize student marks (line chart and histogram) using Matplotlib and Pandas"],
  ["SIFT algorithm", "Reverse a list"],
];

document.getElementById("randomButton").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * questionSets.length);
  const selectedSet = questionSets[randomIndex];

  const questionBox = document.getElementById("questionSet");
  questionBox.innerHTML = `
    <h3>Set ${randomIndex + 1}</h3>
    <ol>
      <li>${selectedSet[0]}</li>
      <li>${selectedSet[1]}</li>
    </ol>
  `;
});
