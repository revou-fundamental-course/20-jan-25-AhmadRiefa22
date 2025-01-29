function hitungBMI() {
    let gender = document.getElementById("gender").value;
    let usia = document.getElementById("usia").value;
    let berat = document.getElementById("berat").value;
    let tinggi = document.getElementById("tinggi").value / 100; // Konversi cm ke meter
    
    if (usia > 0 && berat > 0 && tinggi > 0) {
        let bmi = (berat / (tinggi * tinggi)).toFixed(1);
        let status = "";
        
        if (bmi < 18.5) {
            status = "Kekurangan berat badan";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = "Normal (ideal)";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            status = "Kelebihan berat badan";
        } else {
            status = "Obesitas";
        }
        
        document.getElementById("hasil").innerHTML = `Jenis Kelamin: ${gender} <br> Usia: ${usia} tahun <br> BMI Anda: ${bmi} (${status})`;
    } else {
        alert("Masukkan semua data dengan valid");
    }
}
