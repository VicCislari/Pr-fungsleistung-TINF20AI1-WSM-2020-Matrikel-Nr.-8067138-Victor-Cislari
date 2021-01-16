/*Victor Cislari (DHBW-Mannheim, Matrikel-Nr.: 8067138)*/

function calculate() {
    document.getElementById("solutions").style = "";
}

function clear_table() {
    var inputs = document.getElementById("gauss_table").getElementsByTagName('input'); //get all the inputs from gauss_table
    for (var i = 0; i < inputs.length; i++) inputs[i].value = "0"; //change the value sof all inputs to 0 (default)
    document.getElementById("solutions").style = "display:none"; //hide the results, since the user wants his stuff deleted
}
