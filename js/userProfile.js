//userProfile.js
document.addEventListener('DOMContentLoaded', function () {
    var fetchDataButton = document.getElementById('fetchDataButton');
    var preloader = document.getElementById('preloader');
    var resultsContainer = document.getElementById('resultsContainer');
    var errorMessage = document.getElementById('errorMessage');

    fetchDataButton.addEventListener('click', function () {
        preloader.style.display = 'block';
        resultsContainer.innerHTML = '';
        errorMessage.style.display = 'none';

        var randomUserId = Math.floor(Math.random() * 10) + 1;

        setTimeout(function () {
            fetchData(randomUserId)
                .then(function (data) {
                    preloader.style.display = 'none';
                    showResults(data);
                })
                .catch(function (error) {
                    preloader.style.display = 'none';
                    showErrorMessage();
                });
        }, 1000);
    });

    function fetchData(userId) {
        var apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
        return fetch(apiUrl)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
    }

    function showResults(data) {
        var resultElement = document.createElement('div');
        resultElement.innerHTML = `
      <p>Nombre: ${data.name}</p>
      <p>Apellido: ${data.username}</p>
      <p>Email: ${data.email}</p>
      <p>Dirección: ${data.address.street}, ${data.address.suite}, ${data.address.city}</p>
      <p>Teléfono: ${data.phone}</p>
      <p>Empresa: ${data.company.name}</p>
    `;
        resultsContainer.appendChild(resultElement);
    }

    function showErrorMessage() {
        errorMessage.style.display = 'block';
    }
});
