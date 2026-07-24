import { CartItem, CustomerDetails } from '../types';

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getItemPrice(item: CartItem): number {
  return item.size === '250ml' ? item.product.price250ml : item.product.price500ml;
}

export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => {
    const unitPrice = getItemPrice(item);
    return sum + unitPrice * item.quantity;
  }, 0);
}

export function generateWhatsAppMessageText(
  items: CartItem[],
  customer: CustomerDetails,
  storeName: string
): string {
  const total = calculateCartTotal(items);

  let message = `*HALO ${storeName.toUpperCase()}! Saya mau pesan jamu segar:*\n`;
  message += `-------------------------------------------\n\n`;

  message += `*📋 DETAIL PESANAN:* \n`;
  items.forEach((item, index) => {
    const sizeLabel = item.size === '250ml' ? '250 ML' : '500 ML';
    const unitPrice = getItemPrice(item);
    const subtotal = unitPrice * item.quantity;
    message += `${index + 1}. *${item.product.name}* (${sizeLabel})\n`;
    message += `   • Jumlah: ${item.quantity} botol @ ${formatRupiah(unitPrice)}\n`;
    message += `   • Subtotal: ${formatRupiah(subtotal)}\n\n`;
  });

  message += `-------------------------------------------\n`;
  message += `💰 *TOTAL HARGA PRODUK:* *${formatRupiah(total)}*\n`;
  message += `-------------------------------------------\n\n`;

  message += `*👤 DATA PEMESAN:* \n`;
  message += `• *Nama:* ${customer.name || '-'}\n`;
  message += `• *No. WhatsApp:* ${customer.phone || '-'}\n`;
  message += `• *Alamat Pengiriman:* ${customer.address || '-'}\n`;

  const deliveryLabels: Record<string, string> = {
    instant: 'Gojek/Grab Instant (Sampai dalam 1-2 jam)',
    sameday: 'Same Day Express (Sampai di hari yang sama)',
    pickup: 'Ambil Langsung di Kedai/Toko',
    express: 'Kurir Reguler / Luar Kota'
  };
  message += `• *Metode Pengiriman:* ${deliveryLabels[customer.deliveryMethod] || customer.deliveryMethod}\n`;

  if (customer.notes && customer.notes.trim()) {
    message += `• *Catatan Khusus:* ${customer.notes.trim()}\n`;
  } else {
    message += `• *Catatan:* Tidak ada (Manis & dingin standar)\n`;
  }

  message += `\nMohon informasi total beserta ongkos kirim dan rekening pembayarannya ya. Terima kasih! 🙏🌿`;

  return message;
}

export function formatPhoneNumber(rawNumber: string): string {
  if (!rawNumber) return '6281234567890';
  let phone = rawNumber.replace(/\D/g, '');
  if (phone.startsWith('0')) {
    phone = '62' + phone.substring(1);
  }
  return phone;
}

export function generateWhatsAppLink(
  rawNumber: string,
  items: CartItem[],
  customer: CustomerDetails,
  storeName: string
): string {
  const phone = formatPhoneNumber(rawNumber);
  const messageText = generateWhatsAppMessageText(items, customer, storeName);
  const encodedMessage = encodeURIComponent(messageText);

  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
