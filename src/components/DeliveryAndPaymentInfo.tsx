import React, { useState } from 'react';
import { CreditCard, Truck, CheckCircle, Copy, AlertCircle, MapPin, Sparkles, Building2, ExternalLink, ShoppingBag } from 'lucide-react';
import { StoreInfo } from '../types';
import { INITIAL_STORE_INFO } from '../data/jamuProducts';

interface DeliveryAndPaymentInfoProps {
  storeInfo?: StoreInfo;
}

export const DeliveryAndPaymentInfo: React.FC<DeliveryAndPaymentInfoProps> = ({ storeInfo }) => {
  const [copied, setCopied] = useState(false);

  const goFoodUrl = storeInfo?.goFoodUrl || INITIAL_STORE_INFO.goFoodUrl;
  const grabFoodUrl = storeInfo?.grabFoodUrl || INITIAL_STORE_INFO.grabFoodUrl;

  const bankAccount = {
    bank: 'BCA',
    accountNumber: '0380557991',
    accountName: 'Syekh Guntur Amara Putra',
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(bankAccount.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const deliveryRules = [
    {
      id: 1,
      title: 'Jarak 1-3 KM (Pesanan > 4 Botol)',
      badge: 'GRATIS ONGKIR',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      description: 'Jika jarak pengantaran 1-3 KM pertama dengan pesanan di atas 4 botol, biaya ongkir dari toko GRATIS.',
    },
    {
      id: 2,
      title: 'Jarak 1-3 KM (Pesanan < 4 Botol)',
      badge: 'Rp 7.000',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      description: 'Jika jarak pengantaran 1-3 KM pertama dengan pesanan di bawah 4 botol, dikenakan ongkir dasar sebesar Rp 7.000.',
    },
    {
      id: 3,
      title: 'Jarak di atas 3 KM',
      badge: 'Rp 7.000 Dasar',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      description: 'Untuk jarak di atas 3 KM dikenakan biaya ongkir dasar sebesar Rp 7.000 dan tambahan Rp 3.000 per KM(penyesuaian tarif jarak lanjut).',
    },
    {
      id: 4,
      title: 'Ketersediaan Ongkir Toko & Opsi Lain',
      badge: 'Toko / Grab / Gojek',
      badgeColor: 'bg-stone-700 text-stone-200 border-stone-600',
      description: 'Harap tanyakan ketersediaan kurir toko via WhatsApp. Jika kurir toko penuh/tidak tersedia, pelanggan dapat mengambil langsung ke lokasi toko atau menggunakan jasa aplikasi pihak ke-3 (Grab & Gojek).',
    },
  ];

  return (
    <section id="pengiriman-pembayaran" className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-900/60 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Pengumuman Toko & Ketentuan Layanan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
            Ketentuan Pembayaran & Pengantaran Toko
          </h2>
          <p className="text-xs sm:text-sm text-stone-400">
            Sistem pembayaran transfer bank resmi & ketentuan ongkos kirim langsung dari Jamu Solo Mbak Ayuk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card 1: Informasi Rekening Bank (BCA) */}
          <div className="lg:col-span-5 bg-stone-900 p-6 sm:p-8 rounded-3xl border border-amber-900/40 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-amber-100">
                  Rekening Pembayaran Resmi
                </h3>
                <p className="text-xs text-stone-400">Transfer Bank Lakukan Sebelum Diproses</p>
              </div>
            </div>

            {/* Bank Card Graphic */}
            <div className="bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/40 p-5 rounded-2xl border border-amber-500/30 shadow-inner space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-400" />
                  <span className="font-bold text-base text-amber-200 tracking-wider">BANK {bankAccount.bank}</span>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Transfer Bank
                </span>
              </div>

              <div>
                <span className="text-[11px] text-stone-400 block mb-0.5">Nomor Rekening:</span>
                <div className="flex items-center justify-between gap-2 bg-stone-950/80 px-3.5 py-2.5 rounded-xl border border-stone-800">
                  <span className="font-mono text-xl font-bold tracking-widest text-amber-300">
                    {bankAccount.accountNumber}
                  </span>
                  <button
                    onClick={handleCopyAccount}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 active:scale-95 transition-all shadow-sm"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-stone-950" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-950" />
                        <span>Salin No. Rek</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-[11px] text-stone-400 block mb-0.5">Atas Nama (A/N):</span>
                <p className="font-bold text-sm text-stone-100">
                  {bankAccount.accountName}
                </p>
              </div>
            </div>

            <div className="bg-amber-500/10 p-3.5 rounded-2xl border border-amber-500/20 flex items-start gap-2.5 text-xs text-amber-200/90 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>
                Pembayaran dilakukan <strong>setelah konfirmasi pesanan via WhatsApp</strong>. Toko akan langsung memvalidasi bukti transfer dan menyiapkan jamu segar Anda.
              </span>
            </div>

          </div>

          {/* Card 2: Pengumuman Ketentuan Ongkos Kirim / Pengantaran */}
          <div className="lg:col-span-7 bg-stone-900 p-6 sm:p-8 rounded-3xl border border-amber-900/40 shadow-xl space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-amber-100">
                  Pengumuman Ketentuan Ongkos Kirim
                </h3>
                <p className="text-xs text-stone-400">Aturan Pengantaran Toko & Opsi Kurir Pihak Ke-3</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliveryRules.map((rule) => (
                <div
                  key={rule.id}
                  className="bg-stone-950/80 p-4 rounded-2xl border border-stone-800 space-y-2 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-amber-200">
                      {rule.id}. {rule.title}
                    </span>
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${rule.badgeColor}`}>
                      {rule.badge}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Link GoFood & GrabFood / GoSend & GrabExpress */}
            <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 p-4 sm:p-5 rounded-2xl border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <ShoppingBag className="w-4 h-4 text-emerald-400" />
                  <span>Pesan Langsung via Aplikasi Gojek & Grab:</span>
                </span>
                <span className="text-[10px] text-stone-400 bg-stone-800 px-2 py-0.5 rounded-full border border-stone-700">
                  Instant / Food
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Gojek / GoFood Link Button */}
                <a
                  href={goFoodUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#00AA13]/15 hover:bg-[#00AA13]/25 border border-[#00AA13]/50 text-emerald-300 font-bold text-xs transition-all hover:scale-[1.01] group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#00AA13] text-white font-extrabold text-[11px] flex items-center justify-center shadow-md">
                      Go
                    </div>
                    <div>
                      <span className="block text-stone-100 font-bold">GoFood / GoSend</span>
                      <span className="block text-[10px] text-stone-400">Order via Aplikasi Gojek</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#00AA13] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Grab / GrabFood Link Button */}
                <a
                  href={grabFoodUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#00B14F]/15 hover:bg-[#00B14F]/25 border border-[#00B14F]/50 text-emerald-300 font-bold text-xs transition-all hover:scale-[1.01] group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#00B14F] text-white font-extrabold text-[11px] flex items-center justify-center shadow-md">
                      Gr
                    </div>
                    <div>
                      <span className="block text-stone-100 font-bold">GrabFood / GrabExpress</span>
                      <span className="block text-[10px] text-stone-400">Order via Aplikasi Grab</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#00B14F] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <p className="text-xs text-stone-300">
                Alamat Ambil Langsung: <strong className="text-amber-200">{storeInfo?.address || INITIAL_STORE_INFO.address}</strong>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
