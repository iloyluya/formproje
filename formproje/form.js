document.querySelector(".form").addEventListener("submit", function(e) {
    e.preventDefault(); // Form gönderimini engelle

    let isim = document.getElementById("isim").value.trim();
    let soyisim = document.getElementById("soyisim").value.trim();
    let email = document.getElementById("email").value.trim();
    let sifre = document.getElementById("sifre").value;
    let sifretekrar = document.getElementById("sifretekrar").value;
    let dogumgunu = document.getElementById("dogumgunu").value;
    let message = document.getElementById("message");

    // Email kontrolü
    if (!(email.length >= 8 && email.includes("@") && email.includes("."))) {
        message.textContent = "Geçersiz e-posta: En az 8 karakter olmalı, '@' ve '.' içermelidir.";
        message.style.color = "red";
        return;
    }

  
    const büyükHarf = /[A-Z]/.test(sifre);
    const kücükHarf = /[a-z]/.test(sifre);
    const sayi = /[0-9]/.test(sifre);
    const uzunluk = sifre.length >= 8;

    if (!(büyükHarf && kücükHarf && sayi && uzunluk)) {
        message.textContent = "Şifre geçersiz: En az 8 karakter, 1 büyük harf, 1 küçük harf ve 1 sayı içermeli.";
        message.style.color = "red";
        return;
    }

    
    if (!isim) {
        message.textContent = "İsim alanı boş olamaz.";
        message.style.color = "red";
        return;
    }
    if (!soyisim) {
        message.textContent = "Soyisim alanı boş olamaz.";
        message.style.color = "red";
        return;
    }

 
    if (sifre !== sifretekrar) {
        message.textContent = "Şifreler uyuşmuyor.";
        message.style.color = "red";
        return;
    }

 
    if (!dogumgunu) {
        message.textContent = "Lütfen doğum tarihinizi girin.";
        message.style.color = "red";
        return;
    }});