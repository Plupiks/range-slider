const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input")

inputSlider.oninput = function () {
  const spanValue = inputSlider.value;
  slideValue.textContent = spanValue;
  slideValue.style.left = `${20 + (this.clientWidth - 20) / 100 * (spanValue / 2)}px`;
  slideValue.classList.add("show");
  console.log(slideValue);
};

inputSlider.onblur = function () {
  slideValue.classList.remove("show");
}
