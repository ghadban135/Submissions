function change() {
  hide.addEventListener("click", function() {
    document.getElementById("texte").style.display = "none";
  });
  show.addEventListener("click", function() {
    document.getElementById("texte").style.display = "initial";
  });
}
change();
