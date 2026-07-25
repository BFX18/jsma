import React from 'react';
import { Sparkles, ShoppingBag, CheckCircle2, MessageCircle, HeartHandshake, ShieldCheck, Zap, Info } from 'lucide-react';
import { JAMU_IMAGE_ASSETS } from '../data/images';
import { JAMU_PRODUCTS } from '../data/jamuProducts';
import { formatRupiah } from '../utils/formatters';
import { JamuProduct, JamuSize } from '../types';

interface HeroSectionProps {
  onScrollToCatalog: () => void;
  onOpenDetail?: (product: JamuProduct) => void;
  onQuickOrderWA?: (product: JamuProduct, size: JamuSize, quantity: number) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToCatalog,
  onOpenDetail,
  onQuickOrderWA,
}) => {
  const featuredProduct = JAMU_PRODUCTS[0]; // Kunyit Asam

  return (
    <div className="relative bg-stone-900 text-stone-100 overflow-hidden border-b border-amber-900/30">
      {/* Warm ambient background image overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={JAMU_IMAGE_ASSETS.heroBackground}
          alt="Traditional Indonesian Jamu Spices"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-stone-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span className="truncate">Jamu Solo Mbak Ayuk • 100% Herbal Alami Murni</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-50 leading-[1.18]">
              Jamu Solo Mbak Ayuk <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Racikan Asli, Segar & Sehat
              </span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-lg leading-relaxed max-w-2xl font-sans">
              Nikmati kebaikan 9 racikan jamu tradisional Indonesia. Diolah dari rempah rimpang segar berkualitas tinggi tanpa pengawet buatan. Tersedia praktis dalam ukuran <strong className="text-amber-300">250 ML</strong> dan <strong className="text-amber-300">500 ML</strong> siap dikirim via WhatsApp!
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              <div className="flex items-center gap-2 bg-stone-800/80 p-2.5 sm:p-3 rounded-xl border border-stone-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-medium text-stone-200">100% Rempah Murni</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-800/80 p-2.5 sm:p-3 rounded-xl border border-stone-700/60">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs font-medium text-stone-200">Tanpa Pengawet</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-800/80 p-2.5 sm:p-3 rounded-xl border border-stone-700/60 col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <span className="text-xs font-medium text-stone-200">250 ML & 500 ML</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onScrollToCatalog}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-stone-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-950/50 flex items-center justify-center gap-2.5 transition-all hover:scale-105 active:scale-95 min-h-[48px]"
              >
                <ShoppingBag className="w-5 h-5 text-stone-950" />
                <span>Lihat 9 Jamu Katalog</span>
              </button>

              <a
                href="#pengiriman-pembayaran"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold text-sm sm:text-base border border-amber-500/40 flex items-center justify-center gap-2.5 transition-all active:scale-95 min-h-[48px]"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
                <span>Info Pengantaran & BCA</span>
              </a>
            </div>

          </div>

          {/* Right Showcase Card Column */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-stone-800 to-stone-900 p-5 sm:p-6 rounded-3xl border border-amber-800/40 shadow-2xl space-y-4">
              
              <div className="relative h-60 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={JAMU_IMAGE_ASSETS.heroShowcase}
                  alt={featuredProduct.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Price badge top left */}
                <div className="absolute top-3 left-3 bg-amber-500 text-stone-950 px-3 py-1 rounded-full text-xs font-black shadow-lg">
                  Mulai {formatRupiah(featuredProduct.price250ml)}
                </div>

                <div className="absolute top-3 right-3 bg-stone-950/85 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full text-xs font-bold border border-amber-500/40">
                  Best Seller #1
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent p-4 flex items-end justify-between">
                  <div>
                    <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">Favorit Nusantara</span>
                    <h3 className="text-white font-serif text-xl font-bold">{featuredProduct.name}</h3>
                  </div>
                  {onOpenDetail && (
                    <button
                      onClick={() => onOpenDetail(featuredProduct)}
                      className="px-2.5 py-1.5 rounded-lg bg-stone-900/80 hover:bg-stone-800 text-amber-300 text-xs font-medium border border-amber-500/30 flex items-center gap-1 transition-colors"
                      title="Lihat Khasiat Lengkap"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Detail</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Price Grid */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-stone-900/90 p-3 rounded-xl border border-stone-700/80">
                  <span className="block text-[11px] text-stone-400 font-medium">Ukuran Botol Sedang</span>
                  <span className="block text-amber-300 font-bold text-base">250 ML</span>
                  <span className="block text-xs font-bold text-stone-200 mt-0.5">
                    Hanya {formatRupiah(featuredProduct.price250ml)}
                  </span>
                </div>

                <div className="bg-stone-900/90 p-3 rounded-xl border border-amber-500/40 bg-amber-950/20">
                  <span className="block text-[11px] text-amber-200 font-medium">Ukuran Botol Hemat</span>
                  <span className="block text-amber-300 font-bold text-base">500 ML</span>
                  <span className="block text-xs font-bold text-amber-300 mt-0.5">
                    Hanya {formatRupiah(featuredProduct.price500ml)}
                  </span>
                </div>
              </div>

              {/* Direct WA Order Button for Featured Product */}
              {onQuickOrderWA && (
                <button
                  onClick={() => onQuickOrderWA(featuredProduct, '250ml', 1)}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.01] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-100" />
                  <span>Pesan {featuredProduct.name} ({formatRupiah(featuredProduct.price250ml)})</span>
                </button>
              )}

              <div className="p-2.5 bg-amber-500/10 rounded-xl border border-amber-500/20 text-[11px] text-amber-200/90 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Pilih dari 9 varian jamu segar lengkap di katalog produk di bawah.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
