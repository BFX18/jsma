import { JamuProduct, StoreInfo } from '../types';
import { JAMU_IMAGE_ASSETS } from './images';

export const JAMU_PRODUCTS: JamuProduct[] = [
  {
    id: 'kunyit-asam',
    name: 'Kunyit Asam',
    javaneseName: 'Kunir Asem',
    tagline: 'Penyegar alami penambah daya tahan & pelancar pencernaan',
    category: 'Pencernaan & Vitalitas',
    price250ml: 11000,
    price500ml: 18000,
    description: 'Olahan kunyit murni dipadukan dengan asam jawa dan gula merah pilihan. Menghasilkan cita rasa manis asam yang sangat menyegarkan sekaligus menyehatkan.',
    benefits: [
      'Meredakan nyeri haid & melancarkan siklus kewanitaan',
      'Mengandung curcumin tinggi sebagai antioksidan & anti-inflamasi',
      'Membantu melancarkan sistem pencernaan',
      'Mencerahkan kulit dari dalam secara alami'
    ],
    ingredients: ['Kunyit Biang Murni', 'Asam Jawa Tua', 'Gula Merah', 'Garam Sedikit'],
    tasteProfile: 'Manis, Asam Segar, Aromatik Kunyit',
    servingSuggestion: 'Sangat nikmat diminum dingin saat cuaca panas atau hangat di pagi hari.',
    shelfLife: '3-5 hari di dalam lemari es (kulkas)',
    bestSeller: true,
    badgeText: 'Paling Laris',
    colorAccent: 'amber',
    imageUrl: JAMU_IMAGE_ASSETS.products.kunyitAsam
  },
  {
    id: 'beras-kencur',
    name: 'Beras Kencur',
    javaneseName: 'Beras Kencur',
    tagline: 'Penambah stamina, energi & pereda lelah pegal linu',
    category: 'Stamina & Segar',
    price250ml: 11000,
    price500ml: 18000,
    description: 'Kombinasi beras sangrai ditumbuk halus dengan kencur segar pilihan dan manisnya gula merah. Pilihan favorit untuk memulihkan kebugaran tubuh.',
    benefits: [
      'Menghilangkan lelah, lesu, dan pegal linu setelah beraktivitas',
      'Meningkatkan nafsu makan anak dan dewasa',
      'Meredakan batuk ringan dan melegakan tenggorokan',
      'Menjaga hangat stamina tubuh sepanjang hari'
    ],
    ingredients: ['Beras Sangrai Pilihan', 'Kencur Segar', 'Gula Merah'],
    tasteProfile: 'Manis Gurih, Aromatic Warm Kencur',
    servingSuggestion: 'Kocok dahulu sebelum diminum. Enak diminum hangat maupun ditambah es batu.',
    shelfLife: '3-4 hari simpan dalam kulkas',
    bestSeller: true,
    badgeText: 'Favorit Keluarga',
    colorAccent: 'orange',
    imageUrl: JAMU_IMAGE_ASSETS.products.berasKencur
  },
  {
    id: 'temulawak',
    name: 'Temu Lawak',
    javaneseName: 'Temulawak',
    tagline: 'Pelindung fungsi hati & penetral asam lambung',
    category: 'Pencernaan & Vitalitas',
    price250ml: 11000,
    price500ml: 18000,
    description: 'Diolah dari rimpang temulawak segar pilihan. Sangat baik untuk menjaga kesehatan organ dalam.',
    benefits: [
      'Membantu menjaga kesehatan fungsi hati',
      'Membantu meningkatkan nafsu makan',
      'Membantu menjaga kesehatan pencernaan',
      'Membantu menjaga daya tahan tubuh'
    ],
    ingredients: ['Temulawak Segar'],
    tasteProfile: 'Pahit Segar, Rempah Lembut',
    servingSuggestion: 'Minum 1 gelas hangat di pagi hari sebelum sarapan untuk hasil maksimal.',
    shelfLife: '3-5 hari di dalam lemari es',
    bestSeller: false,
    colorAccent: 'yellow',
    imageUrl: JAMU_IMAGE_ASSETS.products.temulawak
  },
  {
    id: 'gula-asam',
    name: 'Gula Asam Jawa',
    javaneseName: 'Gula Asem',
    tagline: 'Minuman asam jawa murni pendingin dahaga & panas dalam',
    category: 'Stamina & Segar',
    price250ml: 11000,
    price500ml: 18000,
    description: 'Sari asam jawa murni yang dimasak perlahan bersama gula Jawa kental. Memberikan sensasi kesegaran instan sekaligus menyehatkan.',
    benefits: [
      'Meredakan panas dalam dan tenggorokan kering',
      'Kaya akan Vitamin C alami untuk daya tahan tubuh',
      'Membantu melancarkan buang air besar',
      'Menyegarkan dahaga tanpa bahan pemanis buatan'
    ],
    ingredients: ['Asam Jawa Murni', 'Gula Jawa', 'Garam'],
    tasteProfile: 'Asam Mantap, Manis Legit, Sangat Segar',
    servingSuggestion: 'Paling pas diminum dengan es batu di siang hari.',
    shelfLife: '5-7 hari dalam kulkas',
    bestSeller: false,
    colorAccent: 'amber',
    imageUrl: JAMU_IMAGE_ASSETS.products.asam_gula_jawa
  },
  {
    id: 'Sirih',
    name: 'Sirih',
    javaneseName: 'Sirih',
    tagline: 'Membantu menjaga kesehatan organ kewanitaan & mengurangi bau badan',
    category: 'Kesehatan Wanita',
    price250ml: 11000,
    price500ml: 18000,
    description: 'Ramuan tradisional berbahan dasar daun sirih yang dikenal sejak dahulu untuk membantu menjaga kebersihan tubuh, kesehatan organ kewanitaan, serta memberikan kesegaran alami.',
    benefits: [
      'Membantu menjaga kesehatan organ kewanitaan',
      'Membantu mengurangi bau badan secara alami',
      'Membantu menjaga kebersihan tubuh dari dalam',
      'Memberikan rasa segar dan membantu menjaga daya tahan tubuh'
    ],
    ingredients: ['Daun Sirih'],
    tasteProfile: 'Segar Herbal dengan sedikit rasa hangat',
    servingSuggestion: 'Nikmati dalam keadaan hangat atau dingin 1–2 kali sehari.',
    shelfLife: '3-4 hari simpan kulkas',
    bestSeller: false,
    badgeText: 'Herbal Tradisional',
    colorAccent: 'green',
    imageUrl: JAMU_IMAGE_ASSETS.products.sirih
  },
  {
    id: 'pahitan-sambiloto',
    name: 'Pahitan Sambiloto',
    javaneseName: 'Jamu Pahitan',
    tagline: 'Ramuan pembersih darah, detoks racun & penurun gula darah',
    category: 'Imun & Detoks',
    price250ml: 11000,
    price500ml: 18000,
    description: 'Meski pahit di lidah, khasiatnya luar biasa sebagai antibakteri & pembersih darah alami.',
    benefits: [
      'Membuang racun/toksin dari dalam darah (Detoksifikasi)',
      'Membantu menstabilkan kadar gula darah',
      'Mengatasi gatal-gatal kulit, jerawat & alergi',
      'Meningkatkan benteng imunitas tubuh dari penyakit'
    ],
    ingredients: ['Daun Sambiloto', 'secang'],
    tasteProfile: 'Pahit Alami Khas Herbal Sejati',
    servingSuggestion: 'Minum sekaligus teguk saat dingin atau hangat. Dapat disandingkan dengan madu.',
    shelfLife: '5 hari simpan kulkas',
    bestSeller: false,
    badgeText: 'Detoks Alami',
    colorAccent: 'emerald',
    imageUrl: JAMU_IMAGE_ASSETS.products.pahitanSambiloto
  },
  {
    id: 'Kunir',
    name: 'Kunyit Tawar',
    javaneseName: 'Kunir Tawar',
    tagline: 'Racikan kunyit murni yang menyegarkan dan menyehatkan tubuh',
    category: 'Stamina & Segar',
    price250ml: 11000,
    price500ml: 18000,
    description: 'Ramuan tradisional berbahan dasar kunyit segar pilihan yang dikenal membantu menjaga kesehatan tubuh, melancarkan pencernaan, serta memberikan kesegaran alami.',
    benefits: [
      'Membantu menjaga kesehatan pencernaan',
      'Membantu meredakan perut kembung dan rasa tidak nyaman',
      'Membantu menjaga daya tahan tubuh',
      'Memberikan kesegaran alami untuk aktivitas sehari-hari'
    ],
    ingredients: ['Kunyit Segar'],
    tasteProfile: 'Herbal hangat dengan rasa kunyit yang khas',
    servingSuggestion: 'Nikmati hangat atau dingin 1–2 kali sehari.',
    shelfLife: '3-4 hari simpan kulkas',
    bestSeller: true,
    badgeText: 'Herbal Pilihan',
    colorAccent: 'amber',
    imageUrl: JAMU_IMAGE_ASSETS.products.kunyittawar
  },
  {
    id: 'Mpon Mpon',
    name: 'Mpon Mpon',
    javaneseName: 'Jamu Mpon Mpon',
    tagline: 'Racikan rempah tradisional untuk menjaga daya tahan tubuh',
    category: 'Imunitas & Kebugaran',
    price250ml: 11000,
    price500ml: 18000,
    description: 'Ramuan tradisional berbahan aneka rimpang pilihan seperti jahe, kunyit yang memberikan sensasi hangat serta membantu menjaga kesehatan tubuh sehari-hari.',
    benefits: [
      'Membantu menjaga daya tahan tubuh',
      'Menghangatkan tubuh secara alami',
      'Membantu menjaga kesehatan pencernaan',
      'Membantu mengurangi rasa lelah setelah beraktivitas'
    ],
    ingredients: ['Jahe', 'Kunyit', 'sereh', 'salam', 'lengkuas'],
    tasteProfile: 'Hangat rempah dengan aroma herbal yang khas',
    servingSuggestion: 'Diminum hangat 1-2 kali sehari untuk ibu menyusui.',
    shelfLife: '3-4 hari dalam kulkas',
    bestSeller: false,
    badgeText: 'Herbal Tradisional',
    colorAccent: 'teal',
    imageUrl: JAMU_IMAGE_ASSETS.products.mponmpon
  },
  {
    id: 'wedang-jahe',
    name: 'Wedang Jahe',
    javaneseName: 'Jahe Rempah',
    tagline: 'Penghangat tubuh super dari jahe merah murni & rempah pilihan',
    category: 'Kebugaran & Sendi',
    price250ml: 11000,
    price500ml: 18000,
    description: 'Sari jahe merah pilihan berpadu dengan gula merah. Sensasi hangat pedasnya langsung meresap ke tubuh.',
    benefits: [
      'Menghangatkan seluruh tubuh & mengusir masuk angin',
      'Meredakan mual, pusing, dan tenggorokan gatal',
      'Meningkatkan daya tahan tubuh dan imunitas ganda',
      'Meredakan flu, batuk, dan kelelahan malam hari'
    ],
    ingredients: ['Jahe Merah Murni', 'Gula Merah'],
    tasteProfile: 'Pedas Mantap, Warm & Sweet Herbal',
    servingSuggestion: 'Panaskan sebentar atau seduh hangat di malam hari atau saat hujan.',
    shelfLife: '5 hari simpan dalam kulkas',
    bestSeller: true,
    badgeText: 'Penghangat Alami',
    colorAccent: 'rose',
    imageUrl: JAMU_IMAGE_ASSETS.products.wedangJahe
  }
];

export const INITIAL_STORE_INFO: StoreInfo = {
  name: 'Jamu Solo Mbak Ayuk',
  whatsappNumber: '6282258407660',
  address: 'NO. 116 RT. 01/RW. 08, KP. Jambudipa, Desa Cilebut Timur / Layanan Pesan Antar',
  openingHours: 'Setiap Hari: 09.00 - 21.00 WIB',
  goFoodUrl: 'https://gofood.link/a/BPSdFSm',
  grabFoodUrl: 'https://food.grab.com/id/en/restaurant/jamu-solo-mbak-ayuk-cilebut-timur-delivery/6-C2WVVX63LY3YET?k'
};
