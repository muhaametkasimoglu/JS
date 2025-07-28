let url = "https://acibademtech.udemy.com/";
let kursAdi = "komple uygulamalı web geliştirme";
let sonuc;
sonuc = url.length;
sonuc = kursAdi.split("").length;
sonuc = url.startsWith("htpps");
if (sonuc){
    console.log("evet baslıyor");

}
if(kursAdi.indexOf("eğitimi")){
    console.log("evet var");
}
else{
    console.log("hayır yok");
}