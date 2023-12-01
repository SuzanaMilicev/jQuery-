
function calculate() {
    let first = $("#Text1").val();
    let a = parseFloat(first);
    let second = $("#Text2").val();
    let b = parseFloat(second);
    let addition = a + b;
    let subtraction = a - b;
    let multiplication = a * b;
    let division = a / b;

    if ($("#addition").is(':checked')) {
        $("#span1").html("Rezultat je: " + addition);
    }
    else if ($("#subtraction").is(':checked')) {
        $("#span1").html("Rezultat je: " + subtraction);
    }
    else if ($("#multiplication").is(':checked')) {
        $("#span1").html("Rezultat je: " + multiplication);
    }
    else {
        $("#span1").html("Rezultat je: " + division);
    }
}
