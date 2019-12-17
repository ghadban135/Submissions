function change() {
  document.querySelector(".green").addEventListener("click", function() {
    document.getElementById("text").style.color = "green";
  });
  document.querySelector(".red").addEventListener("click", function() {
    document.getElementById("text").style.color = "red";
  });
  document.querySelector(".blue").addEventListener("click", function() {
    document.getElementById("text").style.color = "blue";
  });
}
change();
