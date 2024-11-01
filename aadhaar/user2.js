document.getElementById("updateForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect selected update option
    const updateOption = document.getElementById("updateOption").value;
    const ticketId = generateTicketId();

    // Display the ticket ID and update option
    const ticketInfo = document.getElementById("ticketInfo");
    ticketInfo.classList.remove("hidden");
    ticketInfo.innerHTML = `Your request to update <strong>${updateOption}</strong> has been submitted. Your Ticket ID is: <strong>${ticketId}</strong>`;
});

// Function to generate a random Ticket ID
function generateTicketId() {
    return 'TICKET-' + Math.floor(Math.random() * 10000); // Simple random ticket ID generator
}
