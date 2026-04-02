/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBag, 
  ChevronRight, 
  Milk, 
  QrCode, 
  MapPin, 
  Award, 
  Heart, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Phone
} from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Eski Kaşar (Artisanal)",
    price: "₺240",
    image: "https://picsum.photos/seed/cheese1/600/800",
    description: "12 ay dinlendirilmiş, Çatalca meralarından gelen sütle üretilmiştir."
  },
  {
    id: 2,
    name: "Taze Beyaz Peynir",
    price: "₺180",
    image: "https://picsum.photos/seed/cheese2/600/800",
    description: "Günlük taze süt ile geleneksel yöntemlerle mayalanmıştır."
  },
  {
    id: 3,
    name: "Manda Kaymağı",
    price: "₺120",
    image: "https://picsum.photos/seed/cream1/600/800",
    description: "Yoğun kıvamlı, %100 saf manda sütü kaymağı."
  },
  {
    id: 4,
    name: "Çatalca Köy Tereyağı",
    price: "₺210",
    image: "https://picsum.photos/seed/butter1/600/800",
    description: "Yayık usulü, katkısız ve mis kokulu gerçek tereyağı."
  }
];

const farms = [
  { name: "Yeşil Vadi Çiftliği", location: "Çatalca Kuzey", milk: "İnek Sütü" },
  { name: "Güneşli Mera", location: "Çatalca Batı", milk: "Manda Sütü" },
  { name: "Hilal'in Kendi Ağılı", location: "Merkez", milk: "Keçi Sütü" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-beige-50/80 backdrop-blur-md border-b border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Milk className="text-farm-blue w-8 h-8" />
              <span className="text-xl font-serif font-bold tracking-tight text-farm-blue">
                Hilal’in Mandırası
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#story" className="text-farm-blue hover:text-wood-warm transition-colors font-medium">Hikayemiz</a>
              <a href="#gallery" className="text-farm-blue hover:text-wood-warm transition-colors font-medium">Ürünler</a>
              <a href="#traceability" className="text-farm-blue hover:text-wood-warm transition-colors font-medium">İzlenebilirlik</a>
              <button className="bg-farm-blue text-beige-50 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-farm-blue-light transition-all shadow-lg hover:shadow-xl">
                <ShoppingBag size={18} />
                <span>Mağaza</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-farm-blue">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-beige-100 border-b border-beige-200 px-4 py-6 space-y-4"
          >
            <a href="#story" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Hikayemiz</a>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Ürünler</a>
            <a href="#traceability" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">İzlenebilirlik</a>
            <button className="w-full bg-farm-blue text-beige-50 py-3 rounded-xl flex justify-center items-center gap-2">
              <ShoppingBag size={20} />
              <span>Mağazaya Git</span>
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/dairy-boutique/1920/1080" 
            alt="Hilal in her boutique dairy" 
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-farm-blue/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-beige-50"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-wood-warm/80 backdrop-blur-sm text-sm font-medium mb-6">
              Çatalca’dan Saf Lezzetler
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Doğanın Kalbinden, <br />
              <span className="italic text-beige-200">Hilal’in Eliyle.</span>
            </h1>
            <p className="text-lg md:text-xl text-beige-100 mb-10 leading-relaxed max-w-lg">
              Çatalca'nın bereketli meralarından toplanan en saf sütler, modern butik mandıramızda geleneksel ustalıkla buluşuyor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-beige-50 text-farm-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-beige-200 transition-all flex items-center justify-center gap-2">
                Şimdi Keşfet <ChevronRight size={20} />
              </button>
              <button className="border-2 border-beige-50 text-beige-50 px-8 py-4 rounded-full font-bold text-lg hover:bg-beige-50/10 transition-all">
                Hikayemiz
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section id="story" className="py-24 bg-beige-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/milk-story/800/1000" 
                  alt="Local milk collection" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-wood-warm p-8 rounded-2xl text-beige-50 shadow-xl hidden lg:block max-w-xs">
                <Award className="mb-4 w-10 h-10" />
                <h3 className="text-xl font-serif font-bold mb-2">Kadın Emeği, Saf Lezzet</h3>
                <p className="text-sm opacity-90">Hilal, her bir peynir tekerleğini kendi elleriyle mühürler.</p>
              </div>
            </motion.div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-farm-blue">
                Yerel Sütümüzün <br />Saf Hikayesi
              </h2>
              <div className="space-y-6 text-lg text-farm-blue/80 leading-relaxed">
                <p>
                  Her sabah gün doğarken, Çatalca’nın seçkin çiftliklerinden gelen taze sütleri bizzat kontrol ederek teslim alıyoruz. Bizim için süt, sadece bir hammadde değil; toprağın ve doğanın bize sunduğu en kıymetli emanettir.
                </p>
                <p>
                  "Az ama öz" felsefesiyle, endüstriyel üretimden uzak, her bir ürünün karakterini koruduğu butik bir mandıra deneyimi sunuyoruz. Hijyen ve modern teknolojiyi, annelerimizden miras kalan sabır ve ustalıkla harmanlıyoruz.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-beige-200 rounded-lg text-wood-warm">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Katkısız</h4>
                    <p className="text-sm text-farm-blue/60">Sadece süt, maya ve tuz.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-beige-200 rounded-lg text-wood-warm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">%100 Yerel</h4>
                    <p className="text-sm text-farm-blue/60">Çatalca meralarından.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Artizan Peynir Galerisi</h2>
            <p className="text-lg text-farm-blue/60 max-w-2xl mx-auto italic">
              "Her bir dilimde Çatalca'nın rüzgarını ve meraların tazeliğini hissedeceksiniz."
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="group bg-beige-100 rounded-2xl overflow-hidden border border-beige-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <button className="absolute bottom-4 right-4 bg-beige-50/90 backdrop-blur-sm p-3 rounded-full text-farm-blue shadow-lg hover:bg-farm-blue hover:text-beige-50 transition-colors">
                    <ShoppingBag size={20} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-farm-blue/60 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-wood-warm">{product.price}</span>
                    <span className="text-xs font-mono uppercase tracking-widest text-farm-blue/40">Sınırlı Üretim</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability Section */}
      <section id="traceability" className="py-24 bg-farm-blue text-beige-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <QrCode className="w-full h-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-beige-50/10 border border-beige-50/20 text-sm mb-8">
                <QrCode size={16} />
                <span>Şeffaf Üretim Teknolojisi</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Sütünüzün Yolculuğunu <br />Takip Edin
              </h2>
              <p className="text-lg text-beige-200 mb-10 leading-relaxed">
                Her bir paketimizin üzerindeki QR kodu taratarak, o sütün hangi çiftlikten geldiğini, hangi saatte sağıldığını ve mandıramıza ne zaman ulaştığını görebilirsiniz. Biz güveni teknolojiyle pekiştiriyoruz.
              </p>
              
              <div className="space-y-4">
                {farms.map((farm, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-beige-50/5 rounded-xl border border-beige-50/10">
                    <div>
                      <h4 className="font-bold">{farm.name}</h4>
                      <p className="text-sm text-beige-200/60">{farm.location}</p>
                    </div>
                    <span className="text-xs font-mono bg-wood-warm/40 px-3 py-1 rounded-full border border-wood-warm/60">
                      {farm.milk}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="relative p-8 bg-beige-50 rounded-3xl shadow-2xl max-w-sm w-full"
              >
                <div className="aspect-square bg-farm-blue/5 rounded-2xl flex items-center justify-center mb-6 border-2 border-dashed border-farm-blue/20">
                  <QrCode size={200} className="text-farm-blue" />
                </div>
                <div className="text-center text-farm-blue">
                  <p className="font-bold text-lg mb-2">Tazelik Sertifikası</p>
                  <p className="text-sm opacity-60">Kodu taratın ve Çatalca'nın kalbine yolculuk yapın.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-wood-warm/10 rounded-full text-wood-warm mb-8">
            <MapPin size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Çatalca’dan Kapınıza</h2>
          <p className="text-xl text-farm-blue/70 max-w-3xl mx-auto mb-12">
            Özel soğutmalı araçlarımızla, ürünlerimizin tazeliğini ve soğuk zincirini bozmadan doğrudan Çatalca'daki mandıramızdan İstanbul'un her noktasına ulaştırıyoruz.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-beige-50 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Hızlı Teslimat</h3>
              <p className="text-farm-blue/60">Siparişinizden sonraki 24 saat içinde kapınızda.</p>
            </div>
            <div className="p-8 bg-beige-50 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Soğuk Zincir</h3>
              <p className="text-farm-blue/60">Isı kontrollü paketleme ile ilk günkü tazelik.</p>
            </div>
            <div className="p-8 bg-beige-50 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Güvenli Ödeme</h3>
              <p className="text-farm-blue/60">Kapıda ödeme veya online güvenli alışveriş.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-farm-blue text-beige-50 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Milk className="w-8 h-8" />
                <span className="text-2xl font-serif font-bold">Hilal’in Mandırası</span>
              </div>
              <p className="text-beige-200/70 max-w-md mb-8 leading-relaxed">
                Çatalca'nın bereketli topraklarından gelen saf lezzeti, kadın emeği ve modern butik üretim anlayışıyla sofralarınıza taşıyoruz. Kalite, bizim için bir tercih değil, bir sözdür.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-beige-50/10 rounded-full hover:bg-beige-50/20 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-beige-50/10 rounded-full hover:bg-beige-50/20 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-3 bg-beige-50/10 rounded-full hover:bg-beige-50/20 transition-colors">
                  <Phone size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Hızlı Bağlantılar</h4>
              <ul className="space-y-4 text-beige-200/70">
                <li><a href="#story" className="hover:text-beige-50 transition-colors">Hikayemiz</a></li>
                <li><a href="#gallery" className="hover:text-beige-50 transition-colors">Ürünlerimiz</a></li>
                <li><a href="#traceability" className="hover:text-beige-50 transition-colors">İzlenebilirlik</a></li>
                <li><a href="#" className="hover:text-beige-50 transition-colors">Sıkça Sorulan Sorular</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">İletişim</h4>
              <ul className="space-y-4 text-beige-200/70">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>Çatalca Mandıra Yolu No:45, İstanbul</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0" />
                  <span>+90 (212) 789 00 00</span>
                </li>
                <li className="flex items-center gap-3">
                  <Milk size={18} className="flex-shrink-0" />
                  <span>bilgi@hilalinmandirasi.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-beige-50/10 pt-10 text-center text-sm text-beige-200/40">
            <p>© 2026 Hilal’in Mandırası. Tüm hakları saklıdır. Çatalca’dan Saf Lezzetler.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
