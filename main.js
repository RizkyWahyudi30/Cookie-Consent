document.addEventListener("DOMContentLoaded", () => {
  const dialogCookie = document.getElementById("cookiePopup");

  if (!sessionStorage.getItem("sudahPopupCookie")) {
    setTimeout(() => {
      dialogCookie.showModal();
      sessionStorage.setItem("sudahPopupCookie", "ya");
    }, 1500);
  }
});
