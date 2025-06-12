let htmlInput = document.querySelector(".html-editor textarea");
let cssInput = document.querySelector(".css-editor textarea");
let jsInput = document.querySelector(".js-editor textarea");
let output = document.querySelector("#output");
let full = document.querySelector("#fullScreen");
let outputContainer = document.querySelector(".output-container");
let copy = document.querySelectorAll(".copy");

let save = document.querySelector("#save");

save.addEventListener("click", () => {
  output.contentDocument.body.innerHTML = htmlInput.value; // for html //
  output.contentDocument.head.innerHTML = `<style>${cssInput.value}</style>`; // for css //
  output.contentWindow.eval(jsInput.value); // for java script //
});

full.addEventListener("click", () => {
  outputContainer.classList.toggle("output-full-active");
  if (outputContainer.classList.contains("output-full-active")) {
    full.style.transform = "rotate(180deg)";
  } else {
    full.style.transform = "rotate(0deg)";
  }
});

copy.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("copy1")) {
      navigator.clipboard.writeText(htmlInput.value);
      alert("Save");
    } else if (e.classList.contains("copy2")) {
      navigator.clipboard.writeText(cssInput.value);
      alert("Save");
    } else if (e.classList.contains("copy3")) {
      navigator.clipboard.writeText(jsInput.value);
      alert("Save");
    }
  });
});
