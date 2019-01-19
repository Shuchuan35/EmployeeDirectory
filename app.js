
const render = function () {
    $('.content').empty();

    for (let i = 0; i < employeeList.length; i++) {
        // console.log(employeeList[i].name);
        let nameIn = employeeList[i].name;
        let officeNum = employeeList[i].officeNum;
        let phoneNum = employeeList[i].phoneNum;

        $('.content').append(`<p>${nameIn}<br>${officeNum}<br>${phoneNum}</p>`);
    }
}
render();

const addEmployee = function () {
    const nameVal = $('#nameInput').val();
    const officeVal = $('#officeInput').val();
    const phoneVal = $('#phoneInput').val();

    employeeList.push({
        name: nameVal,
        officeNum: officeVal,
        phoneNum: phoneVal
    });

    $('#nameInput').val('');
    $('#officeInput').val('');
    $('#phoneInput').val('');
    render();
}
$('#addNew').on('click', addEmployee);

const verifyName = function () {
    const nameVal = $('#nameSearch').val();
    // console.log(`name input Val: ${nameVal}`);
    const nameList = [];
    for (let i = 0; i < employeeList.length; i++) {
        nameList.push(employeeList[i].name);
    }
    // console.log(nameList);
    if (nameList.includes(nameVal)) {
        $('#result').text('Yes');
    } else {
        $('#result').text('No');
    }
}
$('#search').on('click', verifyName);

const updateData = function () {
    const nameVal = $('#nametoUpdate').val();
    const officeVal = $('#officeUpdate').val();
    const phoneVal = $('#phoneUpdate').val();
    // const nameList = [];
    let index = -1;
    for (let i = 0; i < employeeList.length; i++) {
        // console.log(employeeList[i].name);
        if (employeeList[i].name === nameVal) {
            index = i;
        }
        console.log(index);
        if (index > -1) {
            employeeList.splice(index, 1, {
                name: nameVal,
                officeNum: officeVal,
                phoneNum: phoneVal
            });
        }

        $('#nametoUpdate').val('');
        $('#officeUpdate').val('');
        $('#phoneUpdate').val('');
        render();
    }
}
$('#updateEmp').on('click', updateData);

(function () {
    $('#viewpage').hide();
    $('#addpage').hide();
    $('#verifypage').hide();
    $('#updatepage').hide();
})();

const showView = function () {
    $('section').hide();
    $('#viewpage').show();
}

const showAdd = function () {
    $('section').hide();
    $('#addpage').show();
}

const showVerify = function () {
    $('#nameSearch').val('');
    $('#result').empty();

    $('section').hide();
    $('#verifypage').show();
}

const showUpdate = function () {
    $('section').hide();
    $('#updatepage').show();
}

$('#view').on('click', showView);
$('#add').on('click', showAdd);
$('#verify').on('click', showVerify);
$('#update').on('click', showUpdate);
