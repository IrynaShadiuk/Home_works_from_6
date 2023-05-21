let users = [];
let userIndex = -1;
let userForm = document.getElementById('userForm');
let loginInput = document.getElementById('login');
let passwordInput = document.getElementById('password');
let emailInput = document.getElementById('email');
let addUserBtn = document.getElementById('addUserBtn');
let editUserBtn = document.getElementById('editUserBtn');
let userTableBody = document.querySelector('#userTable tbody');
function addUser() {
    let login = loginInput.value;
    let password = passwordInput.value;
    let email = emailInput.value;
    let user = {
        login: login,
        password: password,
        email: email
    };
    users.push(user);
    loginInput.value = '';
    passwordInput.value = '';
    emailInput.value = '';
    render();
}
function deleteUser(index) {
    users.splice(index, 1);
    render();
}
function editUser(index) {
    let user = users[index];
    loginInput.value = user.login;
    passwordInput.value = user.password;
    emailInput.value = user.email;
    userIndex = index;
    addUserBtn.style.display = 'none';
    editUserBtn.style.display = 'block';
}
function saveEditUser() {
    let login = loginInput.value;
    let password = passwordInput.value;
    let email = emailInput.value;
    let editedUser = {
        login: login,
        password: password,
        email: email
    };
    users[userIndex] = editedUser;
    loginInput.value = '';
    passwordInput.value = '';
    emailInput.value = '';
    userIndex = -1;
    addUserBtn.style.display = 'block';
    editUserBtn.style.display = 'none';
    render();
}
function render() {
    userTableBody.innerHTML = '';
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let row = document.createElement('tr');
        let numberCell = document.createElement('td');
        let loginCell = document.createElement('td');
        let passwordCell = document.createElement('td');
        let emailCell = document.createElement('td');
        let editCell = document.createElement('td');
        let deleteCell = document.createElement('td');
        let editButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        numberCell.textContent = (i + 1).toString();
        loginCell.textContent = user.login;
        passwordCell.textContent = user.password;
        emailCell.textContent = user.email;
        editButton.textContent = 'Edit';
        editButton.className = 'edit-btn';
        editButton.addEventListener('click', createEditButtonHandler(i));
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', createDeleteButtonHandler(i));
        editCell.appendChild(editButton);
        deleteCell.appendChild(deleteButton);
        row.appendChild(numberCell);
        row.appendChild(loginCell);
        row.appendChild(passwordCell);
        row.appendChild(emailCell);
        row.appendChild(editCell);
        row.appendChild(deleteCell);
        userTableBody.appendChild(row);
    }
}
function createEditButtonHandler(index) {
    return function () {
        editUser(index);
    };
}
function createDeleteButtonHandler(index) {
    return function () {
        deleteUser(index);
    };
}
addUserBtn.addEventListener('click', addUser);
editUserBtn.addEventListener('click', saveEditUser);
render();
