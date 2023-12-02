
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
        "<td class='edit'>" + $("#firstname").val() + "</td>" +
        "<td class='edit'>" + $("#lastname").val() + "</td>" +
        "<td class='edit'>" + $("#email").val() + "</td>" +
        "<td class='text-secondary fw-bold remove'>x</td>" +
        "</tr>";
    $(newRow).appendTo("#mainTable");
    $(document).on("click", ".remove", function () {
        $(this).closest("tr").remove();
    });
    $(document).on("click", ".edit", function () {
        let newInfo = prompt("Izmena:");

        if (newInfo) {
            $(this).html(newInfo);
        }
    
        else {
            alert("Kliknuli ste Cancel dugme");
        }
    });
    $("#firstname").val('');
    $("#lastname").val('');
    $("#email").val('');
}

