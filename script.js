let filterInput = document.getElementById("filterInput");

filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  let filterValue = document.getElementById("filterInput").value;
  let ul = document.getElementById("names");
  let li = ul.querySelectorAll("li.contact-item");
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];

    // ვამოწმებთ input ში შეყვანილი სიმბოლო თუ ემთხვევა a ტეგში არსებული სიტყვის რომელიმე სიმბოლოს
    if (a.innerHTML.indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
