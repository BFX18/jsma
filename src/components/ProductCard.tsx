import React, { useState } from 'react';
import { JamuProduct, JamuSize } from '../types';
import { formatRupiah } from '../utils/formatters';
import { Info, Plus, ShoppingBag, Check, MessageCircle, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: JamuProduct;
  onOpenDetail: (product: JamuProduct) => void;
  onQuickOrderWA: (product: JamuProduct, size: JamuSize, quantity: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetail,
  onQuickOrderWA,
}) => {
  const [selectedSize, setSelectedSize] = useState<JamuSize>('250ml');
  const [quantity, setQuantity] = useState<number>(1);

  const currentPrice = selectedSize === '250ml' ? product.price250ml : product.price500ml;

  return (
    <div className="group bg-stone-900 rounded-2xl border border-amber-900/40 hover:border-amber-500/60 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between relative">
      
      {/* Top Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-stone-950">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-black/40" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[11px] font-semibold">
            {product.category}
          </span>
          {product.badgeText && (
            <span className="px-2.5 py-1 rounded-full bg-amber-500 text-stone-950 font-bold text-[11px] shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-stone-950" />
              <span>{product.badgeText}</span>
            </span>
          )}
        </div>

        {/* Javanese Traditional Sub-title overlay */}
        {product.javaneseName && (
          <div className="absolute bottom-2 left-3">
            <span className="text-stone-300/80 font-serif text-xs italic bg-stone-950/60 px-2 py-0.5 rounded">
              "{product.javaneseName}"
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        
        <div className="space-y-2">
          {/* Header Title & Taste */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-serif font-bold text-amber-50 group-hover:text-amber-300 transition-colors">
              {product.name}
            </h3>
            <button
              onClick={() => onOpenDetail(product)}
              className="text-stone-400 hover:text-amber-400 p-1 rounded-lg hover:bg-stone-800 transition-colors"
              title="Lihat Detail & Khasiat"
            >
              <Info className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          <div className="inline-block px-2.5 py-1 rounded-md bg-stone-800/80 text-[11px] text-amber-200/90 border border-stone-700/60">
            👅 Taste: {product.tasteProfile}
          </div>
        </div>

        {/* Size Selection Toggle (Mandatory 250 ML / 500 ML feature) */}
        <div className="bg-stone-950/80 p-2.5 rounded-xl border border-stone-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-stone-400 font-medium">
            <span>Pilihan Ukuran Botol:</span>
            <span className="text-amber-300 font-semibold">{selectedSize === '250ml' ? '250 ML' : '500 ML'}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setSelectedSize('250ml')}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center border min-h-[44px] ${
                selectedSize === '250ml'
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                  : 'bg-stone-800 border-stone-700 text-stone-400 hover:text-stone-200 hover:bg-stone-750'
              }`}
            >
              <span>250 ML</span>
              <span className="text-[10px] font-semibold opacity-90">{formatRupiah(product.price250ml)}</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedSize('500ml')}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center border min-h-[44px] ${
                selectedSize === '500ml'
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                  : 'bg-stone-800 border-stone-700 text-stone-400 hover:text-stone-200 hover:bg-stone-750'
              }`}
            >
              <span>500 ML</span>
              <span className="text-[10px] font-semibold opacity-90">{formatRupiah(product.price500ml)}</span>
            </button>
          </div>
        </div>

        {/* Price & Quantity & Actions */}
        <div className="pt-1 space-y-3">
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase text-stone-400 font-semibold tracking-wider block">Harga Per Botol</span>
              <div className="text-xl font-bold text-amber-400 font-sans">
                {formatRupiah(currentPrice)}
              </div>
            </div>

            {/* Quantity Stepper */}
            <div className="flex items-center gap-1.5 bg-stone-800 p-1 rounded-xl border border-stone-700">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 rounded-lg bg-stone-700 hover:bg-stone-600 text-stone-200 flex items-center justify-center font-bold text-base transition-colors active:scale-95"
                aria-label="Kurangi jumlah"
              >
                -
              </button>
              <span className="w-8 text-center text-sm font-bold text-amber-100">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 rounded-lg bg-stone-700 hover:bg-stone-600 text-stone-200 flex items-center justify-center font-bold text-base transition-colors active:scale-95"
                aria-label="Tambah jumlah"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Button - WhatsApp Direct */}
          <div>
            <button
              type="button"
              onClick={() => onQuickOrderWA(product, selectedSize, quantity)}
              title="Pesan Langsung via WhatsApp"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-95 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100" />
              <span>Pesan via WhatsApp ({formatRupiah(currentPrice * quantity)})</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
