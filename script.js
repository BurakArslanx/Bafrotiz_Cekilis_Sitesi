function cekilisYap() {
    const metin = document.getElementById("isimler").value;
    const hamListe = metin.split('\n').filter(isim => isim.trim() !== "");
    const liste = [...new Set(hamListe)];

    if (liste.length === 0) {
        alert("Lütfen isimleri girin!");
        return;
    }

    const sonucEkrani = document.getElementById("kazanan");
    sonucEkrani.innerText = "Çekiliyor... 🎲";

    // 1.5 saniye bekle ve sonra sonucu göster
    setTimeout(() => {
        const rastgeleIndeks = Math.floor(Math.random() * liste.length);
        const kazananIsim = liste[rastgeleIndeks];

        sonucEkrani.innerText = "🏆 " + kazananIsim;

        const listeElemani = document.createElement("li");
        listeElemani.innerText = kazananIsim;

        confetti({
            particleCount: 200,
            spread: 80,
            origin: { y: 0.6 }
        });
    }, 1500); 
}
function sayiGuncelle() {
    const metin = document.getElementById("isimler").value;
    const hamListe = metin.split('\n').filter(isim => isim.trim() !== "");
    const benzersizListe = [...new Set(hamListe)];
    
    // Sayacı güncelle
    document.getElementById("sayac").innerText = "Toplam Kişi: " + benzersizListe.length;
}