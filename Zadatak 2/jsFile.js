
$(".remove").on("click", function () {
    $(this).closest('tr').remove();
});

$("#buttonShow").click(function () {
    $("#form-input").toggle("normal");
});

$("td[class=edit]").on("click", function () {
    let newInfo = prompt("Izmena:");

    if (newInfo) {
        $(this).html(newInfo);
    }

    else {
        alert("Kliknuli ste Cancel dugme");
    }
});


$("#addButton").on("click", addRow);

function addRow() {
    var newRow =
        "<tr>" +
        "<td class='editNew'>" + $("#firstname").val() + "</td>" +
        "<td class='editNew'>" + $("#lastname").val() + "</td>" +
        "<td class='editNew'>" + $("#email").val() + "</td>" +
        "<td class='text-secondary fw-bold remove'>x</td>" +
        "</tr>";
    $(newRow).appendTo("#mainTable");
    $(document).on("click", ".remove", function () {
        $(this).closest("tr").remove();
    });
    $(document).on("click", ".editNew", function () {
        let newInfo2 = prompt("Izmena:");

        if (newInfo2) {
            $(this).html(newInfo2);
        }

        else {
            alert("Kliknuli ste Cancel dugme");
        }
    });
    $("#firstname").val('');
    $("#lastname").val('');
    $("#email").val('');
}

