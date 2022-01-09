const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input")

inputSlider.oninput = function () {
  const spanValue = inputSlider.value;
  slideValue.textContent = spanValue;
  slideValue.style.left = (spanValue / 5000) + "%";
  slideValue.classList.add("show");
};

inputSlider.onblur = function () {
  slideValue.classList.remove("show");
}