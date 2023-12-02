
$(".remove").on("click", function () {
    $(this).closest('tr').remove();
});

$("#buttonShow").click(function () {
    $("#form-input").toggle("normal");
});


$("#addButton").on("click", addRow);

function addRow() {
    var newRow = "<tr>" + "<td>" + $("#firstname").val() +
        "</td>" + "<td>" + $("#lastname").val() + "</td>" + "<td>" + $("#email").val() +
        "</td>" + "<td class='text-secondary fw-bold remove'>x</td>" + "</tr>";
    $(newRow).appendTo("#mainTable");
    $("#firstname").val('');
    $("#lastname").val('');
    $("#email").val('');
}

