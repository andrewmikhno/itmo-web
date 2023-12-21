//profile.js
document.addEventListener('DOMContentLoaded', function () {
    var profileForm = document.getElementById('profileForm');
    var successMessage = document.getElementById('successMessage');

    var savedFormData = JSON.parse(localStorage.getItem('profileData')) || {};
    restoreFormData(savedFormData);

    profileForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var formData = {
            name: document.getElementById('firstName').value,
            surname: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            phone: document.getElementById('phoneNumber').value,
            website: document.getElementById('website').value,
            company: document.getElementById('company').value,
            companyCatchPhrase: document.getElementById('companyCatchPhrase').value
        };

        saveToLocalStorage(formData);

        successMessage.style.display = 'block';
    });

    function saveToLocalStorage(data) {
        localStorage.setItem('profileData', JSON.stringify(data));
    }

    function restoreFormData(data) {
        document.getElementById('firstName').value = data.name || '';
        document.getElementById('lastName').value = data.surname || '';
        document.getElementById('email').value = data.email || '';
        document.getElementById('address').value = data.address || '';
        document.getElementById('city').value = data.city || '';
        document.getElementById('phoneNumber').value = data.phone || '';
        document.getElementById('website').value = data.website || '';
        document.getElementById('company').value = data.company || '';
        document.getElementById('companyCatchPhrase').value = data.companyCatchPhrase || '';
    }
});
