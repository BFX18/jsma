import React from 'react';
import { Sparkles, Check, Heart, ShieldCheck, GlassWater } from 'lucide-react';

export const SizeGuideSection: React.FC = () => {
  return (
    <section id="ukuran-botol" className="bg-stone-950 py-16 px-4 sm:px-6 lg:px-8 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <GlassWater className="w-3.5 h-3.5 text-amber-400" />
            <span>Fleksibilitas Konsumsi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-100">
            Dua Pilihan Ukuran Kemasan Botol
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Setiap varian dari 9 racikan jamu kami disajikan dalam kemasan botol food-grade higienis dengan pilihan ukuran sesuai kebutuhan Anda.
          </p>
        </div>

        {/* 2 Size Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* 250 ML Card */}
          <div className="bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-800 hover:border-amber-500/40 transition-all shadow-xl space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />

            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">Ukuran Personal</span>
                <h3 className="text-3xl font-serif font-bold text-white">Botol 250 ML</h3>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-serif font-bold text-lg">
                250ml
              </div>
            </div>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Pilihan pas untuk sekali minum atau konsumsi rutin harian secara praktis. Sangat ringan dibawa beraktivitas ke kantor, tempat kerja, atau olahraga.
            </p>

            <ul className="space-y-2.5 text-xs text-stone-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Siap minum tanpa perlu porsi ulang</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Praktis masuk tas / cooler box</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Harga terjangkau hanya <strong>Rp 11.000</strong></span>
              </li>
            </ul>

            <div className="pt-2 border-t border-stone-800 text-[11px] text-amber-200/80 font-medium italic">
              💡 Rekomendasi: Pas untuk konsumsi perorangan setiap pagi atau sore.
            </div>
          </div>

          {/* 500 ML Card */}
          <div className="bg-stone-900 p-6 sm:p-8 rounded-3xl border border-amber-500/50 hover:border-amber-400 transition-all shadow-xl space-y-6 relative overflow-hidden group bg-amber-950/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/30 transition-all" />

            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-300 font-bold block">Ukuran Hemat Keluarga</span>
                <h3 className="text-3xl font-serif font-bold text-amber-100">Botol 500 ML</h3>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-stone-950 font-serif font-bold text-lg flex items-center justify-center shadow-lg">
                500ml
              </div>
            </div>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Botol ukuran besar yang lebih hemat untuk stok persediaan herbal keluarga di rumah atau kantor selama 2-3 hari dalam kulkas.
            </p>

            <ul className="space-y-2.5 text-xs text-stone-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Lebih hemat harga <strong>Rp 18.000</strong> per botol</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Cukup untuk 2-3 kali minum atau berbagi</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Ideal disimpan dingin di dalam kulkas</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-stone-800 text-[11px] text-amber-200 font-medium italic">
              🌟 Paling diminati untuk stok keluarga harian di rumah.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
