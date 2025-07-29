function selamlama(msg) {
  console.log(msg);
}
selamlama();
selamlama("selam");
selamlama("iyi günler");
function yasHesapla(dogumYili) {
  console.log(new Date().getFullYear() - dogumYili);
}
yasHesapla(1985);
yasHesapla(1987);
function emekliligeKacyilKaldi(dogumYili, isim) {
  let yas = yasHesapla(dogumYili);
  if (yas > 65) {
    console.log(emekliligeKacyilKaldi);
  }
}
