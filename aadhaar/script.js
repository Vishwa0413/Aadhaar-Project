// Function to handle User Information form submission
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        aadhaarNumber: document.getElementById("aadhaarNumber").value,
        phone: document.getElementById("phone").value,
        panNumber: document.getElementById("panNumber").value || "Not Provided",
        doorNumber: document.getElementById("doorNumber").value,
        streetName: document.getElementById("streetName").value,
        area: document.getElementById("area").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        pincode: document.getElementById("pincode").value,
        photo: document.getElementById("photo").files[0]?.name || "No file uploaded",
        fingerprint: document.getElementById("fingerprint").files[0]?.name || "No file uploaded"
    };

    // Display the data in an alert box (you can change this to a different action)
    alert(`
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Aadhaar Number: ${formData.aadhaarNumber}
        Phone Number: ${formData.phone}
        PAN Number: ${formData.panNumber}
        Door/Flat No: ${formData.doorNumber}
        Street Name: ${formData.streetName}
        Area: ${formData.area}
        City: ${formData.city}
        State: ${formData.state}
        Pincode: ${formData.pincode}
        Photo: ${formData.photo}
        Fingerprint: ${formData.fingerprint}
    `);

    // You can add logic to send the formData to a server here, if needed.
});


// Function to handle Admin Login form submission
function handleAdminForm(event) {
    event.preventDefault(); // Prevents the default form submission

    // Collect form data
    const adminId = document.getElementById('adminId').value;
    const password = document.getElementById('password').value;

    // Example login validation
    if (adminId === 'admin' && password === 'password123') {
        alert('Admin login successful!');
        
    } else {
        alert('Invalid Admin ID or Password.');
    }
}

// Attach event listeners to the forms
document.addEventListener('DOMContentLoaded', () => {
    // Check if user form exists on the page
    const userForm = document.querySelector('main form');
    if (userForm) {
        userForm.addEventListener('submit', handleUserForm);
    }

    // Check if admin form exists on the page
    const adminForm = document.querySelector('main form');
    if (adminForm && adminForm.querySelector('#adminId') && adminForm.querySelector('#password')) {
        adminForm.addEventListener('submit', handleAdminForm);
    }
});
