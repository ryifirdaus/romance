// script.js
window.onload = function() {
    const message = document.getElementById('message');

    // Menambahkan event listener untuk mengklik pesan
    message.addEventListener('click', () => {
        alert("You clicked the message!"); // Tindakan saat pesan diklik
    });
};