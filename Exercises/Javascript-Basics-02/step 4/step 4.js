function change() {
  if (
    confirm("click ok to clear all form \nclick cancel to keep the form") ==
    true
  ) {
    document.querySelector("#name").value = "";
    document.querySelector("#surname").value = "";
    document.querySelector("#city").value = "";
  }
}
