import React, { useState, useEffect } from 'react';
import { JamuProduct, JamuSize, StoreInfo } from './types';
import { JAMU_PRODUCTS, INITIAL_STORE_INFO } from './data/jamuProducts';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuickOrderModal } from './components/QuickOrderModal';
import { StoreInfoModal } from './components/StoreInfoModal';
import { SizeGuideSection } from './components/SizeGuideSection';
import { HeritageStory } from './components/HeritageStory';
import { HowToOrder } from './components/HowToOrder';
import { DeliveryAndPaymentInfo } from './components/DeliveryAndPaymentInfo';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { formatPhoneNumber } from './utils/formatters';

export default function App() {
  // Store info state (saved in localStorage if user edits)
  const [storeInfo, setStoreInfo] = useState<StoreInfo>(() => {
    try {
      const saved = localStorage.getItem('jamu_store_info');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.whatsappNumber) {
          parsed.whatsappNumber = formatPhoneNumber(parsed.whatsappNumber);
        }
        return parsed;
      }
    } catch (e) {
      // fallback
    }
    return {
      ...INITIAL_STORE_INFO,
      whatsappNumber: formatPhoneNumber(INITIAL_STORE_INFO.whatsappNumber),
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem('jamu_store_info', JSON.stringify(storeInfo));
    } catch (e) {}
  }, [storeInfo]);

  // UI States
  const [selectedProduct, setSelectedProduct] = useState<JamuProduct | null>(null);
  
  // Quick WA Order Modal state
  const [quickOrderProduct, setQuickOrderProduct] = useState<{
    product: JamuProduct;
    size: JamuSize;
    quantity: number;
  } | null>(null);

  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const scrollToCatalog = () => {
    const el = document.getElementById('katalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      
      {/* Header Navbar */}
      <Navbar
        onOpenSettings={() => setIsSettingsOpen(true)}
        whatsappNumber={storeInfo.whatsappNumber}
        storeName={storeInfo.name}
      />

      {/* Hero Section */}
      <HeroSection
        onScrollToCatalog={scrollToCatalog}
        onOpenDetail={(prod) => setSelectedProduct(prod)}
        onQuickOrderWA={(prod, size, qty) =>
          setQuickOrderProduct({ product: prod, size, quantity: qty })
        }
      />

      {/* Product Catalog Section */}
      <section id="katalog" className="scroll-mt-20">
        
        {/* Catalog Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <span>Katalog Resmi Jamu Solo Mbak Ayuk</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
            9 Varian Jamu Tradisional Segar
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto">
            Diracik segar dari rempah-rempah alami pilihan. Pilih varian favorit Anda dan klik pesan via WhatsApp.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {JAMU_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetail={(prod) => setSelectedProduct(prod)}
                onQuickOrderWA={(prod, size, qty) =>
                  setQuickOrderProduct({ product: prod, size, quantity: qty })
                }
              />
            ))}
          </div>
        </div>

      </section>

      {/* Delivery & BCA Payment Announcement Section */}
      <DeliveryAndPaymentInfo storeInfo={storeInfo} />

      {/* Size Comparison & Bottle Options Section */}
      <SizeGuideSection />

      {/* Heritage & Health Story */}
      <HeritageStory />

      {/* How To Order 7 Steps */}
      <HowToOrder />

      {/* Footer */}
      <Footer
        storeInfo={storeInfo}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Floating Action Button */}
      <WhatsAppFloatingButton
        whatsappNumber={storeInfo.whatsappNumber}
      />

      {/* Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onQuickOrderWA={(prod, size, qty) =>
          setQuickOrderProduct({ product: prod, size, quantity: qty })
        }
      />

      <QuickOrderModal
        product={quickOrderProduct?.product || null}
        initialSize={quickOrderProduct?.size || '250ml'}
        initialQuantity={quickOrderProduct?.quantity || 1}
        onClose={() => setQuickOrderProduct(null)}
        storeInfo={storeInfo}
      />

      <StoreInfoModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        storeInfo={storeInfo}
        onSaveStoreInfo={(newInfo) => setStoreInfo(newInfo)}
      />

    </div>
  );
}
