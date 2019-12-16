function old() {
  var size = document.getElementById("shoe_size").value;
  var year = document.getElementById("year").value;

  var val1 = (size * 2 + 5) * 50 - year + 1766;

  alert(val1);
}
