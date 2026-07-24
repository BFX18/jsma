import React, { useState } from 'react';
import { JamuProduct, JamuSize, CustomerDetails, StoreInfo } from '../types';
import { formatRupiah, generateWhatsAppLink } from '../utils/formatters';
import { X, Send, User, Phone, MapPin, Truck, FileText } from 'lucide-react';

interface QuickOrderModalProps {
  product: JamuProduct | null;
  initialSize: JamuSize;
  initialQuantity: number;
  onClose: () => void;
  storeInfo: StoreInfo;
}

export const QuickOrderModal: React.FC<QuickOrderModalProps> = ({
  product,
  initialSize,
  initialQuantity,
  onClose,
  storeInfo,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<JamuSize>(initialSize);
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: '',
    phone: '',
    address: '',
    deliveryMethod: 'instant',
    notes: '',
  });

  const unitPrice = selectedSize === '250ml' ? product.price250ml : product.price500ml;
  const subtotal = unitPrice * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cartItems = [{ product, size: selectedSize, quantity }];
    const link = generateWhatsAppLink(
      storeInfo.whatsappNumber,
      cartItems,
      customer,
      storeInfo.name
    );
    window.open(link, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-stone-900 border border-amber-900/50 text-stone-100 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-800 text-stone-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 pr-6">
          <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
            Pemesanan Cepat via WhatsApp
          </span>
          <h3 className="font-serif font-bold text-xl text-amber-100">
            {product.name}
          </h3>
        </div>

        {/* Product summary card */}
        <div className="bg-stone-950 p-3.5 rounded-2xl border border-stone-800 flex items-center gap-3">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-14 h-14 rounded-xl object-cover border border-stone-700"
            referrerPolicy="no-referrer"
          />
          <div className="flex-1 text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-200">{product.name}</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                {selectedSize === '250ml' ? '250 ML' : '500 ML'}
              </span>
            </div>
            <div className="text-stone-400">
              {quantity} botol x {formatRupiah(unitPrice)} = <strong className="text-amber-400">{formatRupiah(subtotal)}</strong>
            </div>
          </div>
        </div>

        {/* Size & Quantity selection */}
        <div className="grid grid-cols-2 gap-3 bg-stone-950/60 p-3 rounded-xl border border-stone-800 text-xs">
          <div>
            <label className="block text-stone-400 mb-1 font-semibold">Ukuran Botol:</label>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => setSelectedSize('250ml')}
                className={`flex-1 py-1 px-2 rounded-lg font-bold border ${
                  selectedSize === '250ml'
                    ? 'bg-amber-500 text-stone-950 border-amber-400'
                    : 'bg-stone-800 text-stone-300 border-stone-700'
                }`}
              >
                250 ML
              </button>
              <button
                type="button"
                onClick={() => setSelectedSize('500ml')}
                className={`flex-1 py-1 px-2 rounded-lg font-bold border ${
                  selectedSize === '500ml'
                    ? 'bg-amber-500 text-stone-950 border-amber-400'
                    : 'bg-stone-800 text-stone-300 border-stone-700'
                }`}
              >
                500 ML
              </button>
            </div>
          </div>

          <div>
            <label className="block text-stone-400 mb-1 font-semibold">Jumlah Botol:</label>
            <div className="flex items-center gap-1 bg-stone-800 p-1 rounded-lg border border-stone-700">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded bg-stone-700 font-bold text-stone-200 hover:bg-stone-600 active:scale-95 text-base flex items-center justify-center"
                aria-label="Kurangi jumlah"
              >
                -
              </button>
              <span className="flex-1 text-center font-bold text-amber-200 text-sm">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded bg-stone-700 font-bold text-stone-200 hover:bg-stone-600 active:scale-95 text-base flex items-center justify-center"
                aria-label="Tambah jumlah"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block text-stone-300 font-medium mb-1">Nama Lengkap *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Ibu Ani"
              value={customer.name}
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
              className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-xl text-stone-100"
            />
          </div>

          <div>
            <label className="block text-stone-300 font-medium mb-1">Nomor WhatsApp *</label>
            <input
              type="tel"
              required
              placeholder="Contoh: 081234567890"
              value={customer.phone}
              onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
              className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-xl text-stone-100"
            />
          </div>

          <div>
            <label className="block text-stone-300 font-medium mb-1">Opsi Layanan *</label>
            <select
              value={customer.deliveryMethod}
              onChange={(e) => setCustomer({ ...customer, deliveryMethod: e.target.value as any })}
              className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-xl text-stone-100 font-medium"
            >
              <option value="instant">Pengantaran Toko / Kurir (1-3 KM atau &gt;3 KM)</option>
              <option value="pickup">Ambil Langsung ke Alamat Toko</option>
              <option value="sameday">Kurir Pihak Ke-3 (Grab / Gojek)</option>
            </select>
          </div>

          {customer.deliveryMethod !== 'pickup' ? (
            <div>
              <label className="block text-stone-300 font-medium mb-1">Alamat Pengiriman *</label>
              <textarea
                rows={2}
                required
                placeholder="Alamat lengkap penerima..."
                value={customer.address}
                onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-xl text-stone-100"
              />
            </div>
          ) : (
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200">
              📍 <strong>Alamat Ambil:</strong> Jl. Slamet Riyadi No. 128, Solo (Surakarta). Buka tiap hari.
            </div>
          )}

          <div>
            <label className="block text-stone-300 font-medium mb-1">Catatan Khusus (Opsional)</label>
            <input
              type="text"
              placeholder="Suhu dingin / manis sedang / dll"
              value={customer.notes}
              onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
              className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-xl text-stone-100"
            />
          </div>

          {/* Payment & Delivery Notice */}
          <div className="bg-stone-950 p-3 rounded-xl border border-amber-900/40 space-y-1 text-[11px] text-stone-300">
            <div className="font-bold text-amber-300 flex items-center justify-between">
              <span>💳 Transfer Bank BCA:</span>
              <span className="font-mono text-amber-200">0380557991</span>
            </div>
            <p className="text-stone-400">A/N Syekh Guntur Amara Putra. Validasi dilakukan oleh toko setelah konfirmasi WA.</p>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Kirim Pesanan Ke WhatsApp ({formatRupiah(subtotal)})</span>
          </button>
        </form>

      </div>
    </div>
  );
};
