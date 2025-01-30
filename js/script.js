document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    let gender = document.querySelector('input[name="gender"]:checked');
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let age = parseInt(document.getElementById("age").value);

    // Validasi Input
    if (!gender || isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Harap isi semua data dengan benar!");
        return;
    }

    height = height / 100; // Konversi cm ke meter
    let bmi = (weight / (height * height)).toFixed(1);

    let category = "";
    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal (Ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Kelebihan berat badan";
    } else {
        category = "Kegemukan (Obesitas)";
    }

    // Tampilkan hasil
    document.getElementById("bmiValue").textContent = `BMI Anda: ${bmi}`;
    document.getElementById("bmiCategory").textContent = `Kategori: ${category}`;
    document.getElementById("result").classList.remove("hidden");
});
    
}
const downloadBtn = document.getElementById('download-btn');
const consultNutritionistBtn = document.getElementById('consult-nutritionist-btn');
const registerNutritionistBtn = document.getElementById('register-nutritionist-btn');
const consultDoctorBtn = document.getElementById('consult-doctor-btn');
const registerNowBtn = document.getElementById('register-now-btn');

downloadBtn.addEventListener('click', () => {
    // Tambahkan fungsi download di sini
    alert('Fitur download belum tersedia.');
});

consultNutritionistBtn.addEventListener('click', () => {
    // Tambahkan fungsi konsultasi ahli gizi di sini
    alert('Fitur konsultasi ahli gizi belum tersedia.');
});

registerNutritionistBtn.addEventListener('click', () => {
    // Tambahkan fungsi registrasi ahli gizi di sini
    alert('Fitur registrasi ahli gizi belum tersedia.');
});

consultDoctorBtn.addEventListener('click', () => {
    // Tambahkan fungsi konsultasi dokter di sini
    alert('Fitur konsultasi dokter belum tersedia.');
});

registerNowBtn.addEventListener('click', () => {
    // Tambahkan fungsi registrasi sekarang di sini
    alert('Fitur registrasi sekarang belum tersedia.');
});