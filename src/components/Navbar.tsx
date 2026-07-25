import React from 'react';
import { Leaf, Settings, PhoneCall, MessageCircle } from 'lucide-react';
import { formatPhoneNumber } from '../utils/formatters';

interface NavbarProps {
  onOpenSettings: () => void;
  whatsappNumber: string;
  storeName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSettings,
  whatsappNumber,
  storeName = 'Jamu Solo Mbak Ayuk',
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-amber-900/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 p-0.5 flex items-center justify-center shadow-lg shadow-amber-900/30 flex-shrink-0">
              <div className="w-full h-full bg-stone-900 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-serif text-sm sm:text-xl lg:text-2xl font-bold tracking-wide text-amber-100 uppercase truncate max-w-[170px] xs:max-w-none">
                  JSMA
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase tracking-widest font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full">
                  Asli Solo
                </span>
              </div>
              <p className="text-xs text-amber-200/70 font-sans hidden sm:block">
                Katalog 9 Jamu Tradisional • Segar 250 ML & 500 ML
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium text-stone-300">
            <a href="#katalog" className="hover:text-amber-400 transition-colors">
              Katalog Jamu
            </a>
            <a href="#pengiriman-pembayaran" className="hover:text-amber-400 transition-colors">
              Pengiriman & pembayaran
            </a>
            <a href="#ukuran-botol" className="hover:text-amber-400 transition-colors">
              Ukuran Botol
            </a>
            <a href="#cara-pesan" className="hover:text-amber-400 transition-colors">
              Cara Pesan WA
            </a>
          </nav>

          {/* Actions: WA Seller Config & Direct WA Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`https://wa.me/${formatPhoneNumber(whatsappNumber)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02] active:scale-95 min-h-[40px]"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Chat WA Toko</span>
            </a>
          </div>

        </div>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden py-2.5 border-t border-stone-800/80 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar text-xs font-medium text-stone-300">
          <a
            href="#katalog"
            className="px-3 py-1 rounded-full bg-stone-800/80 border border-stone-700/60 text-amber-300 whitespace-nowrap hover:bg-stone-700 transition-colors"
          >
            📋 Katalog
          </a>
          <a
            href="#pengiriman-pembayaran"
            className="px-3 py-1 rounded-full bg-stone-800/80 border border-stone-700/60 text-amber-300 whitespace-nowrap hover:bg-stone-700 transition-colors"
          >
            🚚 Pengiriman & pembayaran
          </a>
          <a
            href="#ukuran-botol"
            className="px-3 py-1 rounded-full bg-stone-800/80 border border-stone-700/60 text-amber-300 whitespace-nowrap hover:bg-stone-700 transition-colors"
          >
            🧴 Ukuran
          </a>
          <a
            href="#cara-pesan"
            className="px-3 py-1 rounded-full bg-stone-800/80 border border-stone-700/60 text-amber-300 whitespace-nowrap hover:bg-stone-700 transition-colors"
          >
            📲 Cara Pesan
          </a>
        </div>
      </div>
    </header>
  );
};
