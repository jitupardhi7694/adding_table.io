document.getElementById('add').addEventListener('click', () => {
    let rowCount = document.getElementById('table1');
    let rows = rowCount.getElementsByTagName('tr').length;
    let tblBody = document.getElementById('table1');
    if (rows < 7) {
        let addControls = `<td><b>${rows}</b></td>`;
        addControls +=
            "<td><input type='text' class='form-control' name='name' id='name'></td>";
        addControls +=
            "<td><input type='text' class='form-control' name='relation' id='relation'></td>";
        addControls +=
            "<td><input type='text' class='form-control' name='age' id='age'></td>";
        addControls +=
            "<td><input type='text' class='form-control' name='education' id='education'></td>";
        addControls +=
            "<td><input type='text' class='form-control' name='occupation' id='occupation'></td>";
        addControls +=
            "<td><input type='text' class='form-control' name='mobile_number' id='mobile_number'></td>";
        addControls +=
            "<td><div class='btn-group' role='group' aria-label='Basic mixed styles example'><input type='button' class='btn btn-danger' value='Edit' name='edit' id='edit'><input type='button' class='btn btn-warning deleteBtn' value='Delete' name='delete' id='delete' onclick='RemoveRow()'></div></td>";
        addControls += '</tr>';
        tblBody.querySelector('tbody').innerHTML =
            tblBody.querySelector('tbody').innerHTML + addControls;
    } else {
        alert('limit reached');
    }
    console.log(rowCount);
});
// delete script
function RemoveRow() {
    document.getElementById('table1').deleteRow(2);
}

// second table javascript program

document.getElementById('add1').addEventListener('click', () => {
    let rowCount1 = document.getElementById('table2');
    let rows1 = rowCount1.getElementsByTagName('tr').length;
    let tblBody1 = document.getElementById('table2');
    if (rows1 < 7) {
        let addControls1 = `<td><b>${rows1}</b></td>`;
        addControls1 +=
            "<td><input type='text' class='form-control' name='name1' id='name1'></td>";
        addControls1 +=
            "<td><input type='text' class='form-control' name='relation1' id='relation1'></td>";
        addControls1 +=
            "<td><input type='text' class='form-control' name='age1' id='age1'></td>";
        addControls1 +=
            "<td><input type='text' class='form-control' name='education1' id='education1'></td>";
        addControls1 +=
            "<td><input type='text' class='form-control' name='occupation1' id='occupation1'></td>";
        addControls1 +=
            "<td><input type='text' class='form-control' name='mobile_number1' id='mobile_number1'></td>";
        addControls1 +=
            "<td><input type='text' class='form-control' name='located_at' id='located_at'></td>";
        addControls1 +=
            "<td><div class='btn-group' role='group' aria-label='Basic mixed styles example'><input type='button' class='btn btn-danger' value='Edit' name='edit1' id='edit1'><input type='button' class='btn btn-warning' value='Delete' name='delete1' id='delete1' onclick='RemoveRows()'></div></td>";
        addControls1 += '</tr>';
        tblBody1.querySelector('tbody').innerHTML =
            tblBody1.querySelector('tbody').innerHTML + addControls1;
    } else {
        alert('limit reached');
    }
    console.log(rowCount1);
});

// delete script

function RemoveRows() {
    document.getElementById('table2').deleteRow(2);
}
