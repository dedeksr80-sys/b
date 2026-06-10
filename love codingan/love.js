/**
 * Professional Interactive Flower Framework
 */

document.addEventListener('DOMContentLoaded', () => {
    const flower = document.getElementById('flower');
    const petalsContainer = document.getElementById('petalsContainer');
    const bloomBtn = document.getElementById('bloomBtn');
    
    // Konfigurasi Bunga
    const TOTAL_PETALS = 12; // Anda bisa mengubah jumlah kelopak di sini
    let isBloomed = false;

    /**
     * Fungsi untuk membuat kelopak bunga secara matematis dan dinamis
     */
    function createPetals() {
        for (let i = 0; i < TOTAL_PETALS; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            
            // Hitung derajat rotasi untuk tiap kelopak agar membentuk lingkaran sempurna
            const angle = (360 / TOTAL_PETALS) * i;
            
            // Simpan data sebagai CSS Variables agar bisa dibaca oleh file style.css
            petal.style.setProperty('--angle', `${angle}deg`);
            petal.style.setProperty('--i', i);
            
            petalsContainer.appendChild(petal);
        }
    }

    /**
     * Fungsi handler untuk memicu status mekar bunga
     */
    function toggleBloom() {
        if (!isBloomed) {
            flower.classList.add('bloomed');
            bloomBtn.textContent = "Reset Bunga";
            bloomBtn.style.background = "#576574";
            isBloomed = true;
        } else {
            flower.classList.remove('bloomed');
            bloomBtn.textContent = "Siram & Mekarkan Bunga";
            bloomBtn.style.background = "#ff6b8b";
            isBloomed = false;
        }
    }

    // Event Listener
    bloomBtn.addEventListener('click', toggleBloom);

    // Inisialisasi awal pembuatan objek kelopak
    createPetals();
});