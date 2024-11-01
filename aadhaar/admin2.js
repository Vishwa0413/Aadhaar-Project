// Sample data to simulate requests (you may replace this with server data)
const sampleRequests = [
    { ticketId: "TICKET-1234", userName: "John Doe", updateOption: "Phone Number" },
    { ticketId: "TICKET-5678", userName: "Jane Smith", updateOption: "Address" },
];

// Function to display user requests in the table
function displayRequests() {
    const requestsTableBody = document.querySelector("#requestsTable tbody");
    sampleRequests.forEach(request => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${request.ticketId}</td>
            <td>${request.userName}</td>
            <td>${request.updateOption}</td>
        `;
        requestsTableBody.appendChild(row);
    });
}

// Execute the display function on page load
document.addEventListener("DOMContentLoaded", displayRequests);
