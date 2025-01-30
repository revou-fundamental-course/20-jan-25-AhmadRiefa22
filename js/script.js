function calculateBMI() {
    let age = document.getElementById('age').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    // Validasi input agar tidak ada yang kosong
    if (age === '' || weight === '' || height === '') {
        alert('Harap isi semua data dengan benar!');
        return;
    }

    height = height / 100; // Konversi tinggi ke meter
    let bmi = (weight / (height * height)).toFixed(1);
    let status = '';

    // Menentukan kategori BMI
    if (bmi < 18.5) {
        status = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal (Ideal)';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Kelebihan berat badan';
    } else {
        status = 'Obesitas';
    }

    // Menampilkan hasil
    document.getElementById('result').innerHTML = `
        <p><strong>Usia:</strong> ${age} tahun</p>
        <p><strong>BMI Anda:</strong> ${bmi}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;
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