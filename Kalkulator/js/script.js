function tambah(){
    let frm = document.getElementById('kalkulator');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);
    let total = a1 + a2;
    let simbol = "+";
    
    
    if(frm.angka1.value == "" && frm.angka2.value == ""){
        alert("Maaf Angka dikolom 1 dan 2 Belum Dimasukkan");
    }
    else if(frm.angka1.value == "" & frm.angka2.value != ""){
        alert("Maaf Angka dikolom ke-1 Belum Dimasukkan");
    }
    else if(frm.angka1.value != "" & frm.angka2.value == ""){
        alert("Maaf Angka dikolom ke-2 Belum Dimasukkan");
    }
    else {
        frm.hasil.value = total;
        frm.math.value = simbol;
    }
}

function kurang(){
    let frm = document.getElementById('kalkulator');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);
    let total = a1 - a2;
    let simbol = "-";
    
    
    if(frm.angka1.value == "" && frm.angka2.value == ""){
        alert("Maaf Angka dikolom 1 dan 2 Belum Dimasukkan");
    }
    else if(frm.angka1.value == "" & frm.angka2.value != ""){
        alert("Maaf Angka dikolom ke-1 Belum Dimasukkan");
    }
    else if(frm.angka1.value != "" & frm.angka2.value == ""){
        alert("Maaf Angka dikolom ke-2 Belum Dimasukkan");
    }
    else {
        frm.hasil.value = total;
        frm.math.value = simbol;
    }
}

function kali(){
    let frm = document.getElementById('kalkulator');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);
    let total = a1 * a2;
    let simbol = "x";
    
    
    if(frm.angka1.value == "" && frm.angka2.value == ""){
        alert("Maaf Angka dikolom 1 dan 2 Belum Dimasukkan");
    }
    else if(frm.angka1.value == "" & frm.angka2.value != ""){
        alert("Maaf Angka dikolom ke-1 Belum Dimasukkan");
    }
    else if(frm.angka1.value != "" & frm.angka2.value == ""){
        alert("Maaf Angka dikolom ke-2 Belum Dimasukkan");
    }
    else {
        frm.hasil.value = total;
        frm.math.value = simbol;
    }
}

function bagi(){
    let frm = document.getElementById('kalkulator');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);
    let total = a1 / a2;
    let simbol = ":";
    
    
    if(frm.angka1.value == "" && frm.angka2.value == ""){
        alert("Maaf Angka dikolom 1 dan 2 Belum Dimasukkan");
    }
    else if(frm.angka1.value == "" & frm.angka2.value != ""){
        alert("Maaf Angka dikolom ke-1 Belum Dimasukkan");
    }
    else if(frm.angka1.value != "" & frm.angka2.value == ""){
        alert("Maaf Angka dikolom ke-2 Belum Dimasukkan");
    }
    else {
        frm.hasil.value = total;
        frm.math.value = simbol;
    }
}

function pangkat(){
    let frm = document.getElementById('kalkulator');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);
    let total = Math.pow(a1,a2);
    let simbol = "∞";
    
    
    if(frm.angka1.value == "" && frm.angka2.value == ""){
        alert("Maaf Angka dikolom 1 dan 2 Belum Dimasukkan");
    }
    else if(frm.angka1.value == "" & frm.angka2.value != ""){
        alert("Maaf Angka dikolom ke-1 Belum Dimasukkan");
    }
    else if(frm.angka1.value != "" & frm.angka2.value == ""){
        alert("Maaf Angka dikolom ke-2 Belum Dimasukkan");
    }
    else {
        frm.hasil.value = total;
        frm.math.value = simbol;
    }
}