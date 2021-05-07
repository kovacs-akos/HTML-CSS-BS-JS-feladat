function KeruletTeglalap() {
  var a_oldal = parseFloat(document.getElementById("AOldal").value);
  var b_oldal = parseFloat(document.getElementById("BOldal").value);
  var mertektteglalapk = document.getElementById("MertektTeglalapK").value;
  var kerulet = 2 * (a_oldal + b_oldal);
  document.getElementById("Kerulet").value = kerulet.toLocaleString() + mertektteglalapk;
}
function TeruletTeglalap() {
  var aoldal = parseFloat(document.getElementById("AOldalT").value);
  var boldal = parseFloat(document.getElementById("BOldalT").value);
  var mertektteglalapt = document.getElementById("MertektTeglalapT").value;
  if (aoldal < 0) {
    kerulet = 0;
  }
  else if (boldal < 0) {
    kerulet = 0;
  }
  var terulet = aoldal * boldal;
  document.getElementById("Terulet").value = terulet.toLocaleString() + mertektteglalapt;
  }