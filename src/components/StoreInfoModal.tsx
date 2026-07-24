import React, { useState, useEffect } from 'react';
import { StoreInfo } from '../types';
import { X, Check, Phone, Store, Clock, MapPin, RotateCcw } from 'lucide-react';
import { formatPhoneNumber } from '../utils/formatters';
import { INITIAL_STORE_INFO } from '../data/jamuProducts';

interface StoreInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  storeInfo: StoreInfo;
  onSaveStoreInfo: (newInfo: StoreInfo) => void;
}

export const StoreInfoModal: React.FC<StoreInfoModalProps> = ({
  isOpen,
  onClose,
  storeInfo,
  onSaveStoreInfo,
}) => {
  const [whatsappNumber, setWhatsappNumber] = useState(storeInfo.whatsappNumber);
  const [storeName, setStoreName] = useState(storeInfo.name);
  const [address, setAddress] = useState(storeInfo.address);
  const [openingHours, setOpeningHours] = useState(storeInfo.openingHours);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setWhatsappNumber(storeInfo.whatsappNumber);
      setStoreName(storeInfo.name);
      setAddress(storeInfo.address);
      setOpeningHours(storeInfo.openingHours);
    }
  }, [isOpen, storeInfo]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedPhone = formatPhoneNumber(whatsappNumber);
    const updated: StoreInfo = {
      name: storeName,
      whatsappNumber: formattedPhone,
      address,
      openingHours,
    };
    onSaveStoreInfo(updated);
    setWhatsappNumber(formattedPhone);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleResetDefault = () => {
    onSaveStoreInfo(INITIAL_STORE_INFO);
    setWhatsappNumber(INITIAL_STORE_INFO.whatsappNumber);
    setStoreName(INITIAL_STORE_INFO.name);
    setAddress(INITIAL_STORE_INFO.address);
    setOpeningHours(INITIAL_STORE_INFO.openingHours);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
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

        <div className="space-y-1">
          <h3 className="font-serif font-bold text-xl text-amber-100 flex items-center gap-2">
            <Phone className="w-5 h-5 text-amber-400" />
            <span>Pengaturan WA Toko Penjual</span>
          </h3>
          <p className="text-xs text-stone-400">
            Ubah nomor WhatsApp tujuan pemesanan untuk pengujian pesan langsung ke HP Anda.
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block text-stone-300 font-semibold mb-1">
              Nomor WA Penjual (Nomor Tujuan Order)
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="6281234567890 atau 081234567890"
                className="w-full pl-9 pr-3 py-2 bg-stone-950 border border-stone-700 rounded-xl text-amber-300 font-mono font-bold"
              />
            </div>
            <p className="text-[11px] text-stone-400 mt-1">
              Format internasional diawali 62 atau 08 (misal: 6281234567890).
            </p>
          </div>

          <div>
            <label className="block text-stone-300 font-semibold mb-1">
              Nama Kedai / Toko Jamu
            </label>
            <div className="relative">
              <Store className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-stone-950 border border-stone-700 rounded-xl text-stone-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-stone-300 font-semibold mb-1">
              Alamat Kedai Fisik
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-stone-950 border border-stone-700 rounded-xl text-stone-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-stone-300 font-semibold mb-1">
              Jam Operasional Toko
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={openingHours}
                onChange={(e) => setOpeningHours(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-stone-950 border border-stone-700 rounded-xl text-stone-100"
              />
            </div>
          </div>

          <div className="flex gap-2 pt-1">
            <button
              type="submit"
              className={`flex-1 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                savedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-500 hover:bg-amber-400 text-stone-950'
              }`}
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Tersimpan!</span>
                </>
              ) : (
                <span>Simpan Pengaturan</span>
              )}
            </button>

            <button
              type="button"
              onClick={handleResetDefault}
              title="Reset ke data awal"
              className="px-3 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-semibold text-xs border border-stone-700 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-stone-400" />
              <span>Reset</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
