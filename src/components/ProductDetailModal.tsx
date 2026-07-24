import React, { useState } from 'react';
import { JamuProduct, JamuSize } from '../types';
import { formatRupiah } from '../utils/formatters';
import { X, Check, ShoppingBag, MessageCircle, Sparkles, ShieldAlert, Clock, Utensils } from 'lucide-react';

interface ProductDetailModalProps {
  product: JamuProduct | null;
  onClose: () => void;
  onQuickOrderWA: (product: JamuProduct, size: JamuSize, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onQuickOrderWA,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<JamuSize>('250ml');
  const [quantity, setQuantity] = useState<number>(1);

  const unitPrice = selectedSize === '250ml' ? product.price250ml : product.price500ml;
  const totalPrice = unitPrice * quantity;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-stone-900 border border-amber-900/50 text-stone-100 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Image & Title */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
          <div className="sm:col-span-5 relative h-56 rounded-2xl overflow-hidden shadow-lg border border-amber-900/30">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-amber-300 text-xs font-semibold">
              {product.category}
            </div>
          </div>

          <div className="sm:col-span-7 space-y-3">
            <div>
              <span className="text-amber-400 text-xs font-serif italic">Racikan Warisan Tradisional</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-50">
                {product.name}
              </h2>
              {product.javaneseName && (
                <p className="text-sm text-stone-400 italic">"{product.javaneseName}"</p>
              )}
            </div>

            <p className="text-sm text-stone-300 leading-relaxed">
              {product.description}
            </p>

            <div className="p-2.5 bg-stone-800/80 rounded-xl border border-stone-700 text-xs text-amber-200">
              👅 <strong>Profil Rasa:</strong> {product.tasteProfile}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-3">
          <h3 className="text-base font-serif font-bold text-amber-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Khasiat & Manfaat Utama:</span>
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-stone-950/60 p-2.5 rounded-xl border border-stone-800 text-xs text-stone-200">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ingredients & Serving Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-stone-950/80 p-3.5 rounded-xl border border-stone-800 space-y-2">
            <span className="text-xs font-bold text-amber-200 flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-amber-400" />
              <span>Komposisi Alami:</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.ingredients.map((ing, i) => (
                <span key={i} className="px-2 py-1 rounded-md bg-stone-800 text-[11px] text-stone-300 border border-stone-700">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-stone-950/80 p-3.5 rounded-xl border border-stone-800 space-y-2">
            <span className="text-xs font-bold text-amber-200 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Saran & Daya Tahan:</span>
            </span>
            <p className="text-xs text-stone-300 leading-normal">
              {product.servingSuggestion}
            </p>
            <div className="text-[11px] text-amber-300/90 font-medium">
              🧊 Daya Tahan: {product.shelfLife}
            </div>
          </div>
        </div>

        {/* Size Selection & Price Calculation Box */}
        <div className="bg-stone-950 p-4 rounded-2xl border border-amber-900/40 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold text-stone-400 block">Pilih Ukuran Botol Jamu:</span>
              <div className="flex items-center gap-2 mt-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedSize('250ml')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    selectedSize === '250ml'
                      ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md'
                      : 'bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-750'
                  }`}
                >
                  250 ML ({formatRupiah(product.price250ml)})
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedSize('500ml')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    selectedSize === '500ml'
                      ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md'
                      : 'bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-750'
                  }`}
                >
                  500 ML ({formatRupiah(product.price500ml)})
                </button>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="space-y-1">
              <span className="text-xs font-semibold text-stone-400 block">Jumlah Botol:</span>
              <div className="flex items-center gap-2 bg-stone-800 p-1 rounded-xl border border-stone-700">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-stone-700 text-stone-200 font-bold flex items-center justify-center hover:bg-stone-600 active:scale-95 text-lg"
                  aria-label="Kurangi jumlah"
                >
                  -
                </button>
                <span className="w-8 text-center font-bold text-amber-200 text-base">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-stone-700 text-stone-200 font-bold flex items-center justify-center hover:bg-stone-600 active:scale-95 text-lg"
                  aria-label="Tambah jumlah"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-stone-800">
            <span className="text-xs text-stone-400 font-medium">Total Harga Produk:</span>
            <span className="text-2xl font-bold text-amber-400">{formatRupiah(totalPrice)}</span>
          </div>
        </div>

        {/* Action CTA */}
        <div className="pt-2">
          <button
            onClick={() => {
              onQuickOrderWA(product, selectedSize, quantity);
              onClose();
            }}
            className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-emerald-950/50 active:scale-95 min-h-[50px]"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Pesan Sekarang via WhatsApp ({formatRupiah(totalPrice)})</span>
          </button>
        </div>

      </div>
    </div>
  );
};
