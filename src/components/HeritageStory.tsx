import React from 'react';
import { Leaf, Award, HeartHandshake, ShieldCheck, Sparkles, Coffee } from 'lucide-react';
import { JAMU_IMAGE_ASSETS } from '../data/images';

export const HeritageStory: React.FC = () => {
  const bgImage = JAMU_IMAGE_ASSETS.heritageBackground || JAMU_IMAGE_ASSETS.heroBackground;

  return (
    <section id="khasiat" className="relative bg-stone-900 py-16 px-4 sm:px-6 lg:px-8 border-t border-amber-900/30 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img
          src={bgImage}
          alt="Latar Belakang Heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-900/70 to-stone-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Rahasia Kebugaran Leluhur</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-50 leading-tight">
              Kebaikan Rempah Asli <br />
              <span className="text-amber-400">Diracik Murni Tanpa Pengawet</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Kami berkomitmen melestarikan keautentikan rasa dan khasiat jamu tradisional Jawa. Setiap botol jamu kami dibuat segar secara berkala dari rimpang kunyit biang, kencur segar, jahe merah, temulawak, dan asam jawa tua tanpa campuran pemanis atau pewarna buatan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-stone-950/80 rounded-2xl border border-stone-800 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
                  🌿
                </div>
                <h4 className="font-serif font-bold text-stone-100 text-sm">Bahan Rempah Segar</h4>
                <p className="text-xs text-stone-400 leading-normal">
                  Rimpang dipanen dari petani lokal dan diolah pada hari yang sama.
                </p>
              </div>

              <div className="p-4 bg-stone-950/80 rounded-2xl border border-stone-800 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
                  🍯
                </div>
                <h4 className="font-serif font-bold text-stone-100 text-sm">Gula Jawa Murni</h4>
                <p className="text-xs text-stone-400 leading-normal">
                  Menggunakan pemanis alami murni yang aman dan nyaman di tenggorokan.
                </p>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-900/40 shadow-2xl">
              <img
                src={JAMU_IMAGE_ASSETS.heritageProcess}
                alt="Proses Pembuatan Jamu Tradisional"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-stone-900/90 backdrop-blur-md rounded-2xl border border-amber-500/30 text-xs text-stone-200 space-y-1">
                <div className="font-serif font-bold text-amber-300 text-sm">
                  ✨ "Satu Tegukan Kebugaran Alami Setiap Hari"
                </div>
                <p className="text-stone-300 text-[11px]">
                  Jamu bukan sekadar minuman, melainkan filosofi gaya hidup sehat seimbang yang telah teruji secara turun-temurun di Nusantara.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
