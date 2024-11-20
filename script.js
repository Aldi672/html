const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

const navbar1 = document.getElementById('navbar');

// Tambah event listener saat halaman di-scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Jika scroll lebih dari 50px
        navbar1.classList.add('navbar-scroll'); // Tambah kelas navbar-scroll
    } else {
        navbar1.classList.remove('navbar-scroll'); // Hapus kelas navbar-scroll
    }
});

// Menginisialisasi VanillaTilt untuk semua elemen dengan kelas "card"
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
});

const sizes = document.querySelectorAll(".card-content");

// Menambahkan event listener untuk menambah atau menghapus kelas "active"
sizes.forEach((size) => {
    size.addEventListener("click", (event) => {
        event.stopPropagation(); // Mencegah event bubble agar tidak langsung menutup saat di-klik
        sizes.forEach((el) => el.classList.remove("active")); // Menghapus kelas "active" dari semua elemen
        size.classList.toggle("active"); // Menambahkan kelas "active" pada elemen yang diklik
    });
});

// Menambahkan event listener pada dokumen untuk menghilangkan kelas "active" saat klik di luar elemen
document.addEventListener("click", () => {
    sizes.forEach((size) => size.classList.remove("active"));
});
