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

