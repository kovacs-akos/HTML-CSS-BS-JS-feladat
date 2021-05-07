function FelszinKocka() {
  var felszinA = parseInt(document.getElementById("FelszinA").value);
  var FelszinKocka = 6 * felszinA * felszinA;
  var FelszinKockaM = document.getElementById("FelszinKockaM").value;
  document.getElementById("FelszinKockaA").value = FelszinKocka.toLocaleString() + FelszinKockaM;
}
function TerfogatKocka() {
  var kockaA = parseFloat(document.getElementById("KockaA").value);
  var TerfogatKockaM = document.getElementById("TerfogatKockaM").value;
  var terfogatkocka = kockaA * kockaA * kockaA;
  document.getElementById("TerfogatKockaA").value = terfogatkocka.toLocaleString() + TerfogatKockaM;
}
