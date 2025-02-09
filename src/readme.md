# E-Commerce Site Lite

Bu proje, temel bir e-ticaret web sitesi örneğidir. Kullanıcılar ürünleri görüntüleyebilir, sepete ekleyebilir ve giriş yaparak hesaplarını yönetebilirler. Proje, React ve Redux kullanılarak geliştirilmiştir.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzünü oluşturmak için
- **Redux Toolkit**: Global durum yönetimi için
- **React Router DOM**: Sayfalar arası gezinme için
- **Formik & Yup**: Form yönetimi ve doğrulama için
- **Bootstrap & React-Bootstrap**: Stil ve bileşenler için
- **Axios**: API istekleri için
- **Vite**: Hızlı geliştirme ortamı için

## Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

### 1. Depoyu Kopyalayın
```
git clone https://github.com/kullanici/e-commerce-site-lite.git
cd e-commerce-site-lite
```

### 2. Bağımlılıkları Yükleyin
```
npm install
```

### 3. Geliştirme Ortamında Çalıştırın
```
npm run dev
```

## Proje Yapısı

```
├── src
│   ├── assets          # Statik dosyalar (logolar vb.)
│   ├── components      # Tekrar kullanılabilir bileşenler (Header, Footer, vb.)
│   ├── pages           # Sayfa bileşenleri (Home, Cart, Login, vb.)
│   ├── redux           # Redux store ve slice dosyaları
│   ├── schemas         # Form doğrulama şemaları
│   ├── services        # API servisleri
│   ├── App.jsx         # Ana bileşen
│   ├── main.jsx        # Giriş noktası
│   ├── store.js        # Redux store yapılandırması
├── public              # HTML şablonu ve diğer statik varlıklar
├── package.json        # Bağımlılıklar ve scriptler
├── vite.config.js      # Vite yapılandırması
└── README.md           # Proje hakkında bilgiler
```

## Özellikler

- **Kullanıcı Kimlik Doğrulama**: Kullanıcılar giriş yapabilir ve hesaplarını yönetebilir.
- **Ürün Listesi ve Detay Sayfası**: Ürünleri listeleyebilir ve detaylarını görüntüleyebilir.
- **Sepet Yönetimi**: Ürünleri sepete ekleyebilir ve kaldırabilirsiniz.
- **Form Doğrulama**: Yup ile form doğrulama işlemleri bulunmaktadır.
- **Yerel Depolama**: Kullanıcı oturum bilgileri localStorage içinde saklanır.


