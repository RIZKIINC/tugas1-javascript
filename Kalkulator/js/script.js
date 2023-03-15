function tambah(){
    let frm = document.getElementById('kalkulator');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);
    let total = a1 + a2;
    let simbol = "+";
    
    
    if(frm.angka1.value == "" || frm.angka2.value == ""){
        alert("Maaf Angka Belum Dimasukkan");

    }
    else {}
    
    frm.math.value = simbol;
    frm.hasil.value = total;
}

function kurang(){
    let frm = document.getElementById('kalkulator');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);
    let total = a1 - a2;
    let simbol = "-";
    
    
    if(frm.angka1.value == "" || frm.angka2.value == ""){
        alert("Maaf Angka Belum Dimasukkan");
    }
    else {}
    
    frm.math.value = simbol;
    frm.hasil.value = total;
}

function kali(){
    let frm = document.getElementById('kalkulator');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);
    let total = a1 * a2;
    let simbol = "x";
    
    
    if(frm.angka1.value == "" || frm.angka2.value == ""){
        alert("Maaf Angka Belum Dimasukkan");
    }
    else {}
    
    frm.math.value = simbol;
    frm.hasil.value = total;
}

function bagi(){
    let frm = document.getElementById('kalkulator');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);
    let total = a1 / a2;
    let simbol = ":";
    
    
    if(frm.angka1.value == "" || frm.angka2.value == ""){
        alert("Maaf Angka Belum Dimasukkan");
    }
    else {}
    
    frm.math.value = simbol;
    frm.hasil.value = total;
}

function pangkat(){
    let frm = document.getElementById('kalkulator');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);
    let total = Math.pow(a1,a2);
    let simbol = "∞";
    
    
    if(frm.angka1.value == "" || frm.angka2.value == ""){
        alert("Maaf Angka Belum Dimasukkan");
    }
    else {}
    
    frm.math.value = simbol;
    frm.hasil.value = total;
}