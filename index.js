const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

const toggleBtn = document.getElementById("toggleBtn");
const toggleBox = document.getElementById("toggleBox");

const loadBtn = document.getElementById("loadBtn");
const resourceList = document.getElementById("resourceList");

let clickCount = 0;

const resources = [
  "MDN Web Docs",
  "W3Schools JavaScript Tutorial",
  "CodePen",
  "GitHub Pages",
  "JavaScript.info"
];

clickBtn.addEventListener("click", function () {
  clickMessage.textContent = "✅ Click registered!";
  clickCount++;
  clickBtn.textContent = "Clicked " + clickCount + " times";
});

toggleBtn.addEventListener("click", function () {
  if (toggleBox.style.display === "none") {
    toggleBox.style.display = "block";
    toggleBtn.textContent = "Hide More";
  } else {
    toggleBox.style.display = "none";
    toggleBtn.textContent = "Show More";
  }
});

loadBtn.addEventListener("click", function () {
  resourceList.innerHTML = "";

  for (let i = 0; i < resources.length; i++) {
    const li = document.createElement("li");
    li.textContent = resources[i];
    resourceList.appendChild(li);
  }
});