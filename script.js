function showLoveMessage() {
    setTimeout(() => {
        window.location.href = 'response.html';
    }, 10); // Navigate to the response page after 0.1 seconds
}

function showError() {
    alert('SORRY!!YOU CANT UNLOVE ME 😁');
    setTimeout(() => {
        location.reload();
    }, 100); // Refresh the page after 0.1 seconds
}
