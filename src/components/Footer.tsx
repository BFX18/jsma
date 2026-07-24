import React from 'react';
import { StoreInfo } from '../types';
import { Leaf, PhoneCall, MapPin, Clock, MessageCircle } from 'lucide-react';
import { formatPhoneNumber } from '../utils/formatters';

interface FooterProps {
  storeInfo: StoreInfo;
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ storeInfo, onOpenSettings }) => {
  return (
    <footer className="bg-stone-900 border-t border-amber-900/40 text-stone-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-stone-800">
        
        {/* Brand */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-amber-100 block">
                {storeInfo.name}
              </span>
              <span className="text-xs text-amber-400">Warisan Jamu Nusantara</span>
            </div>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
            Toko online spesialis racikan jamu tradisional 100% alami tanpa pengawet. Menyediakan 9 varian jamu lengkap dengan kemasan botol 250 ML & 500 ML higienis.
          </p>

          <div className="pt-1">
            <button
              onClick={onOpenSettings}
              className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold"
            >
              ⚙️ Pengaturan Nomor WA Toko Penjual
            </button>
          </div>
        </div>

        {/* Store Info & Hours */}
        <div className="md:col-span-4 space-y-3 text-xs">
          <h4 className="font-serif font-bold text-amber-200 text-sm">Informasi Kedai</h4>
          
          <div className="flex items-start gap-2.5 text-stone-300">
            <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>{storeInfo.address}</span>
          </div>

          <div className="flex items-center gap-2.5 text-stone-300">
            <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>{storeInfo.openingHours}</span>
          </div>

          <div className="flex items-center gap-2.5 text-stone-300">
            <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>WA Order: +{storeInfo.whatsappNumber}</span>
          </div>
        </div>

        {/* Quick WA CTA */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-serif font-bold text-amber-200 text-sm">Pesan Cepat WA</h4>
          <p className="text-xs text-stone-400">
            Ada pertanyaan atau ingin pemesanan dalam jumlah banyak (catering/acara)?
          </p>

          <a
            href={`https://wa.me/${formatPhoneNumber(storeInfo.whatsappNumber)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp Seller</span>
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
        <p>© {new Date().getFullYear()} {storeInfo.name}. Katalog 9 Jamu Tradisional & Pemesanan WhatsApp.</p>
        <p className="text-stone-400">Dibuat Segar Setiap Hari • Tanpa Pengawet Buatan</p>
      </div>
    </footer>
  );
};
