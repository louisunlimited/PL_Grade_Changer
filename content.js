// get tbody
var tbody = document.getElementsByTagName("tbody")[0];
for (var i = 0; i < tbody.rows.length; i++) {
  if (tbody.rows[i].cells.length > 1) {
    var lastTd = tbody.rows[i].cells[tbody.rows[i].cells.length - 1];
    var div = lastTd.getElementsByTagName("div")[0];
    if (div.children[0].style.width == "90%") {
      div.children[0].style.width = "100%";
      div.children[0].innerHTML = "100%";
    }
    if (div.children[1].style.width == "10%") {
      div.children[1].style.width = "0%";
    }
  }
}
