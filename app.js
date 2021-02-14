const input = document.getElementById("emailinput");
const button = document.getElementById("button");
const notify = document.getElementById("notify");
button.addEventListener("click", run);

function run() {
  const email = input.value;
  const atpos = email.indexOf("@");
  const dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    showsmall();
    setTimeout(() => {
      small.remove();
      input.style.border = "1px solid grey";
    }, 3000);
  } else {
    input.value = "";
  }
}
function showsmall() {
  input.style.border = "2px solid red";
  const small = document.createElement("small");
  small.id = "small";
  small.textContent = "*Please provide a valid email address";
  notify.appendChild(small);
}
