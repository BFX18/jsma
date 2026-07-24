import React from 'react';
import { ShoppingBag, MessageCircle, MapPin, CheckCircle2, CreditCard, ShieldCheck, Sparkles } from 'lucide-react';

export const HowToOrder: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Lihat Katalog Jamu',
      desc: 'Lihat 9 racikan jamu tradisional khas Solo pada katalog dan pilih ukuran botol 250 ML atau 500 ML.',
      icon: ShoppingBag,
    },
    {
      step: '02',
      title: 'Hubungi Toko via WA',
      desc: 'Klik tombol "Pesan via WA" untuk langsung terhubung dengan admin Toko Jamu Solo Mbak Ayuk.',
      icon: MessageCircle,
    },
    {
      step: '03',
      title: 'Pilih Pengambilan / Pengantaran',
      desc: 'Pilih apakah pesanan diambil langsung ke kedai toko atau diantar ke alamat Anda.',
      icon: MapPin,
    },
    {
      step: '04',
      title: 'Konfirmasi Pesanan & Total',
      desc: 'Konfirmasi rincian varian jamu, jumlah botol, dan total tagihan beserta biaya ongkos kirim.',
      icon: CheckCircle2,
    },
    {
      step: '05',
      title: 'Pembayaran Transfer BCA',
      desc: 'Lakukan pembayaran terlebih dahulu via transfer Bank BCA No. Rek 0380557991 A/N Syekh Guntur Amara Putra.',
      icon: CreditCard,
    },
    {
      step: '06',
      title: 'Validasi Pembayaran',
      desc: 'Kirimkan bukti transfer ke WhatsApp. Toko akan mengkonfirmasi dan memvalidasi pembayaran Anda.',
      icon: ShieldCheck,
    },
    {
      step: '07',
      title: 'Pesanan Siap & Dikirim',
      desc: 'Jamu segar siap racik diproses, dikemas rapi, dan siap diminum untuk kesehatan tubuh Anda!',
      icon: Sparkles,
    },
  ];

  return (
    <section id="cara-pesan" className="bg-stone-950 py-16 px-4 sm:px-6 lg:px-8 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Sistem Pemesanan Mudah & Terpercaya
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
            7 Langkah Cara Pemesanan Jamu via WhatsApp
          </h2>
          <p className="text-xs sm:text-sm text-stone-400">
            Alur pemesanan langsung dari katalog ke WhatsApp tanpa perlu mendaftar akun.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-stone-900 p-5 rounded-2xl border border-stone-800 space-y-3.5 relative group hover:border-amber-500/50 transition-all shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold text-amber-500/50 group-hover:text-amber-400 transition-colors">
                      Langkah {s.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-stone-100 text-base leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs text-stone-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

