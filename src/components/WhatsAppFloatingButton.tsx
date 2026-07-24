import React from 'react';
import { MessageCircle } from 'lucide-react';
import { formatPhoneNumber } from '../utils/formatters';

interface WhatsAppFloatingButtonProps {
  whatsappNumber: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  whatsappNumber,
}) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating Direct WA Contact */}
      <a
        href={`https://wa.me/${formatPhoneNumber(whatsappNumber)}`}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-2xl transition-all hover:scale-105 active:scale-95 border border-emerald-400/40"
        title="Chat WhatsApp Penjual Jamu"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span>Pesan / Tanya via WA</span>

        {/* Pulse ring animation */}
        <span className="absolute -inset-0.5 rounded-full bg-emerald-500/30 animate-ping opacity-60 pointer-events-none" />
      </a>
    </div>
  );
};
