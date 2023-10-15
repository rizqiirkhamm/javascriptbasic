//  menampilkan javascript
//  console log
//  alert
//  document write
// innerHtml / innerText

// var nama = prompt('masukan nama motor anda');
// var kategori= prompt('masukan kategori motor anda');

//console.log(nama + ' kelas 10 rpl');

// alert(nama + kategori);

// alert('belajar javascript tentang alert')

// function test(){
//     alert("Sedang belajar Javascript");
// }

// var js = document.getElementById('javascript');

// js.innerHTML = "<h1>Tes javascript</h1>"

// prompt('apakah belajar javascript');


alert('selamat datang');

var pengulangan = true;

while( pengulangan === true){
    var nama = prompt('masukkan nama mobil:');
    var warna = prompt('masukan warna mobil')
    alert('mobil anda ' + nama + warna);

    pengulangan = confirm('coba lagi?');
}
alert('terimaksih..');