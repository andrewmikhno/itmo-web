// profile.js

document.addEventListener('DOMContentLoaded', function () {
    var profileForm = document.getElementById('profileForm');
    var resultsContainer = document.getElementById('resultsContainer');
    var successMessage = document.getElementById('successMessage');

    profileForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var city = document.getElementById('city').value;
        var address = document.getElementById('address').value;
        var phoneNumber = document.getElementById('phoneNumber').value;

        var resultsList = document.createElement('ul');
        resultsList.classList.add('results-list');

        appendResultItem(resultsList, 'Nombre:', `${firstName} ${lastName}`);
        appendResultItem(resultsList, 'Ciudad:', city);
        appendResultItem(resultsList, 'Dirección:', address);
        appendResultItem(resultsList, 'Número de Teléfono:', phoneNumber);

        resultsContainer.innerHTML = '';

        resultsContainer.appendChild(resultsList);

        successMessage.style.display = 'block';

        saveToLocalStorage({
            firstName: firstName,
            lastName: lastName,
            city: city,
            address: address,
            phoneNumber: phoneNumber
        });
    });

    function appendResultItem(list, label, value) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${label}</strong> ${value}`;
        list.appendChild(listItem);
    }

    function saveToLocalStorage(data) {
        localStorage.setItem('profileData', JSON.stringify(data));
    }

    var storedProfileData = localStorage.getItem('profileData');
    if (storedProfileData) {
        storedProfileData = JSON.parse(storedProfileData);

        document.getElementById('firstName').value = storedProfileData.firstName;
        document.getElementById('lastName').value = storedProfileData.lastName;
        document.getElementById('city').value = storedProfileData.city;
        document.getElementById('address').value = storedProfileData.address;
        document.getElementById('phoneNumber').value = storedProfileData.phoneNumber;
    }
});
