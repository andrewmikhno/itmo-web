document.addEventListener('DOMContentLoaded', function () {
    var resultsContainer = document.getElementById('resultsContainer');

    var storedData = loadStoredData();

    storedData.forEach(function (data) {
        var resultsList = document.createElement('ul');
        resultsList.classList.add('results-list');

        appendResultItem(resultsList, 'Nombre:', `${data.firstName} ${data.lastName}`);
        appendResultItem(resultsList, 'Ciudad:', data.city);
        appendResultItem(resultsList, 'Dirección:', data.address);
        appendResultItem(resultsList, 'Número de Teléfono:', data.phoneNumber);

        resultsContainer.appendChild(resultsList);
    });

    function appendResultItem(list, label, value) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${label}</strong> ${value}`;
        list.appendChild(listItem);
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
