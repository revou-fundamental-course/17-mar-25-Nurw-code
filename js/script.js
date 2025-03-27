// Fungsi untuk menghitung luas persegi
function hitungLuas() {
    let sisi = document.getElementById("sisiLuas").value;
    let hasil = document.getElementById("hasilLuas");

    if (sisi === "" || sisi <= 0) {
        hasil.innerHTML = "<p style='color:red;'>Masukkan angka yang valid!</p>";
        return;
    }

    let luas = sisi * sisi;
    hasil.innerHTML = `<p>L = S × S</p>
                       <p>L = ${sisi} × ${sisi}</p>
                       <p>L = ${luas} cm²</p>`;
}

// Fungsi untuk mereset input dan hasil luas
function resetLuas() {
    document.getElementById("sisiLuas").value = "";
    document.getElementById("hasilLuas").innerHTML = "";
}

// Fungsi untuk menghitung keliling persegi
function hitungKeliling() {
    let sisi = document.getElementById("sisiKeliling").value;
    let hasil = document.getElementById("hasilKeliling");

    if (sisi === "" || sisi <= 0) {
        hasil.innerHTML = "<p style='color:red;'>Masukkan angka yang valid!</p>";
        return;
    }

    let keliling = 4 * sisi;
    hasil.innerHTML = `<p>K = 4 × S</p>
                       <p>K = 4 × ${sisi}</p>
                       <p>K = ${keliling} cm</p>`;
}

// Fungsi untuk mereset input dan hasil keliling persegi
function resetKeliling() {
    document.getElementById("sisiKeliling").value = "";
    document.getElementById("hasilKeliling").innerHTML = "";
}
