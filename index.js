$('#add').click(function () {
    $(document).ready(function () {
        var rowCount = $(' #table tr').length;
        if (rowCount < 7) {
            var addcontrols = '<tr>';
            addcontrols += "<td id='count'><b>" + rowCount + '</b></td>';
            addcontrols +=
                "<td><input type='text' class='form-control' name='name' id='name'></td>";
            addcontrols +=
                "<td><input type='text' class='form-control' name='relation' id='relation'></td>";
            addcontrols +=
                "<td><input type='text' class='form-control' name='age' id='age'></td>";
            addcontrols +=
                "<td><input type='text' class='form-control' name='education' id='education'></td>";
            addcontrols +=
                "<td><input type='text' class='form-control' name='occupation' id='occupation'></td>";
            addcontrols +=
                "<td><input type='text' class='form-control' name='mobile_number' id='mobile_number'></td>";
            addcontrols +=
                "<td><div class='btn-group' role='group' aria-label='Basic mixed styles example'><input type='button' class='btn btn-danger' value='Edit' name='edit' id='edit'><input type='button' class='btn btn-warning' value='Delete' name='delete' id='delete'></div></td>";
            addcontrols += '</tr>';

            var tableData = $(' #table tbody').append(addcontrols);
            console.log(tableData);
        } else {
            alert('Limit reached...!!');
        }
    });
});

function editRow(rows) {
    var RowElement = document.getElementById(rows);
    var patientRow = RowElement.querySelectorAll('.form-control');

    var id = patientRow[0];
    var name = patientRow[1].innerHTML;
    var relation = patientRow[2].innerHTML;
    var age = patientRow[3].innerHTML;
    var education = patientRow[5].innerHTML;
    var occupation = patientRow[6].innerHTML;
    var mobile = patientRow[7].innerHTML;

    var btnedit = 'edit' + rowCount;

    patientRow[0].innerHTML = `<td class=""><b>${rows}</b></td>`;
    patientRow[1].innerHTML =
        "<td><input type='text' class='form-control' name='name' id='name' value=" +
        rows +
        '></td>';
    patientRow[2].innerHTML =
        "<td><input type='text' class='form-control' name='relation' id='relation' value=" +
        rows +
        '></td>';
    patientRow[3].innerHTML =
        "<td><input type='text' class='form-control' name='age' id='age' value=" +
        rows +
        '></td>';
    patientRow[4].innerHTML =
        "<td><input type='text' class='form-control' name='education' id='education' value=" +
        rows +
        '></td>';
    patientRow[5].innerHTML =
        "<td><input type='text' class='form-control' name='occupation' id='occupation' value=" +
        rows +
        '></td>';
    patientRow[6].innerHTML =
        "<td><input type='text' class='form-control' name='mobile_number' id='mobile_number' value=" +
        rows +
        '></td>';
    patientRow[7].innerHTML =
        "<button class='btn btn-primary btn-xs btn-updateEmployee' onclick='updateemployees(" +
        rows +
        ")'>" +
        "<i class='fa fa-pencil' aria-hidden='true'></i>Update</button>" +
        "<button class='btn btn-warning btn-xs btn-cancelupdate' onclick='cancelupdate(" +
        rows +
        ")'><i class='fa fa-times' aria-hidden='true'></i>Cancel</button>" +
        "<button class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" +
        rows +
        ")'>" +
        "<i class='fa fa-trash' aria-hidden='true'></i>Delete</button>";
}
// second table jquery

$('#add1').click(function () {
    $(document).ready(function () {
        var rowCount1 = $(' #myTable1 tr').length;
        if (rowCount1 < 7) {
            var addcontrols1 = '<tr>';
            addcontrols1 += "<td id='count1'><b>" + rowCount1 + '</b></td>';
            addcontrols1 +=
                "<td><input type='text' class='form-control' name='name1' id='name1'></td>";
            addcontrols1 +=
                "<td><input type='text' class='form-control' name='relation1' id='relation1'></td>";
            addcontrols1 +=
                "<td><input type='text' class='form-control' name='age1' id='age1'></td>";
            addcontrols1 +=
                "<td><input type='text' class='form-control' name='education1' id='education1'></td>";
            addcontrols1 +=
                "<td><input type='text' class='form-control' name='occupation1' id='occupation1'></td>";
            addcontrols1 +=
                "<td><input type='text' class='form-control' name='mobile_number1' id='mobile_number1'></td>";
            addcontrols1 +=
                "<td><input type='text' class='form-control' name='located_at' id='located_at'></td>";
            addcontrols1 +=
                "<td><div class='btn-group' role='group' aria-label='Basic mixed styles example'><input type='button' class='btn btn-danger' value='Edit' name='edit1' id='edit1'><input type='button' class='btn btn-warning' value='Delete' name='delete1' id='delete1'></div></td>";
            addcontrols1 += '</tr>';

            var tableData1 = $('#myTable1 tbody').append(addcontrols1);
            console.log(tableData1);
        } else {
            alert('Limit reached...!!');
        }
    });
});
