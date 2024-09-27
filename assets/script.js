const dialog = document.getElementById("loginDialog");
const showButton = document.getElementById("showLogin");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
