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

        var storedData = loadStoredData();

        var newData = {
            firstName: firstName,
            lastName: lastName,
            city: city,
            address: address,
            phoneNumber: phoneNumber
        };

        storedData.push(newData);

        saveToLocalStorage(storedData);

        var resultsList = document.createElement('ul');
        resultsList.classList.add('results-list');

        appendResultItem(resultsList, 'Nombre:', `${firstName} ${lastName}`);
        appendResultItem(resultsList, 'Ciudad:', city);
        appendResultItem(resultsList, 'Dirección:', address);
        appendResultItem(resultsList, 'Número de Teléfono:', phoneNumber);

        resultsContainer.appendChild(resultsList);

        successMessage.style.display = 'block';
    });

    function appendResultItem(list, label, value) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${label}</strong> ${value}`;
        list.appendChild(listItem);
    }

    function saveToLocalStorage(data) {
        // Сохраняем каждую запись отдельно
        data.forEach(function(entry, index) {
            localStorage.setItem('profileData_' + index, JSON.stringify(entry));
        });
    }

    function loadStoredData() {
        var storedData = [];
        var index = 0;

        while (true) {
            var entry = localStorage.getItem('profileData_' + index);
            if (entry === null) {
                break;
            }
            storedData.push(JSON.parse(entry));
            index++;
        }

        return storedData;
    }
});
