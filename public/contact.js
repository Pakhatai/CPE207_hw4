
const mycontact = document.querySelector('#my-contact');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const message = document.querySelector('#message');
const GenMale = document.querySelector('#male');
const GenFemale = document.querySelector('#female');
const SubjectInput = document.querySelector('#subject');

mycontact.addEventListener('submit', onSupmit)
function onSupmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '' ||
        phone.value === '' || SubjectInput.value === '' ||
        message.value === ''){
        window.alert('You fill out incomplete information.');
    } else {

        if (GenMale.checked) {
            gender = GenMale.value;
        } else {
            gender = GenFemale.value;
        }

        const list = document.querySelector('#users-list');
        const row = document.createElement('tr');

        row.innerHTML = `
    <td>${nameInput.value}(${gender})<h5>${emailInput.value} - ${phone.value}</h5></td>
    <td>${SubjectInput.value}</td>
    <td>${message.value}</td>
    <td><a class="btn btn-danger btn-sm delete">X</a></td>
  
  `;
        list.appendChild(row);
        nameInput.value = '';
        emailInput.value = '';
        phone.value= '';
        SubjectInput.value = '';
        message.value = '';

    }
}


document.querySelector('#users-list').addEventListener('click', (e) => {
    e.target.parentElement.parentElement.remove();
});

