const inputColor = document.getElementById("input-color");
const generateColorBtn = document.getElementById("generate-color-btn");
const randomColorBtn = document.getElementById("random-color-btn");
const copyColor = document.getElementById("copy-color");
const alertBox = document.getElementById("alert-box");

function setBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

generateColorBtn.addEventListener("click", () => {
  if (inputColor.value.trim() === "") {
    showAlert("Please enter a valid color code!");
    return;
  } else {
    setBackgroundColor(inputColor.value);
  }
});

randomColorBtn.addEventListener("click", () => {
  const randomColor = generateRandomColor();
  setBackgroundColor(randomColor);
  inputColor.value = randomColor;
});

copyColor.addEventListener("click", () => {
  navigator.clipboard
    .writeText(inputColor.value)
    .then(() => {
      if (inputColor.value.trim() === "") {
        showAlert("Please enter a color before copying!");
        return;
      } else {
        showAlert(`Color copied: ${inputColor.value}`, "success");
      }
    })
    .catch((err) => showAlert("Failed to copy: " + err));
});

function generateRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function showAlert(message, type = "danger") {
  alertBox.innerHTML = message;
  alertBox.className = `alert alert-${type} py-2 position-absolute w-75 text-center mt-2 top-0 start-50 translate-middle-x`;
  setTimeout(() => {
    alertBox.classList.add("d-none");
  }, 3000);
}
