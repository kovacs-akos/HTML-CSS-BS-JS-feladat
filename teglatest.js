function terfogatteglatest() {
    var oldala =parseFloat(document.getElementById("OldalA").value);
    var oldalb = parseFloat(document.getElementById("OldalB").value);
    var oldalc = parseFloat(document.getElementById("OldalC").value);
    var felszintegla = document.getElementById("FelszinTeglaM").value;
    var terfogat = oldala * oldalb * oldalc;
  document.getElementById("TerfogatT").value = terfogat.toLocaleString() + felszintegla;
}
function felszinteglatest() {
    var oldala_ = parseFloat(document.getElementById("OldalA_").value);
    var oldalb_ = parseFloat(document.getElementById("OldalB_").value);
    var oldalc_ = parseFloat(document.getElementById("OldalC_").value);
    var terfogattegla = document.getElementById("TerfogatTeglaM").value;
    var felszin = 2 * (oldala_ * oldalb_) + 2 * (oldala_ * oldalc_) + 2 * (oldalb_ * oldalc_);
    document.getElementById("FelszinT").value = felszin.toLocaleString() + terfogattegla;
}