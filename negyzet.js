function KeruletNegyzet() {
  var aoldal = parseFloat(document.getElementById("ANegyzetK").value);
  var merteknegyzetk = document.getElementById("MertekNegyzetK").value;
  var keruletn = 4 * aoldal;
  document.getElementById("KeruletNegyzett").value = keruletn.toLocaleString() + merteknegyzetk;
}  
  function TeruletNegyzet() {
    var anegyzett = parseFloat(document.getElementById("ANegyzett").value);
    var merteknegyzett = document.getElementById("MertekNegyzett").value;
    var teruletnegyzet = anegyzett * anegyzett;
    document.getElementById("TeruletNegyzett").value = teruletnegyzet.toLocaleString() + merteknegyzett;
  }
