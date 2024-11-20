function sendMessage() {
    // Mendapatkan data dari form
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Buat URL WhatsApp
    const url = "https://api.whatsapp.com/send?phone=6285780541200&text=Halo%20Admin.%0ASaya%20*nama*%0AEmail%20Saya%20*email*%0A%0A*message*"

    location.href = `https://wa.me/6281234567890?text=${encodeURIComponent("Halo, ini pesan uji coba")}`;




}
