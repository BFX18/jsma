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
    description: 'Olahan kunyit murni dipadukan dengan asam jawa tua dan gula aren pilihan. Menghasilkan cita rasa manis asam yang sangat menyegarkan sekaligus menyehatkan.',
    benefits: [
      'Meredakan nyeri haid & melancarkan siklus kewanitaan',
      'Mengandung curcumin tinggi sebagai antioksidan & anti-inflamasi',
      'Membantu melancarkan sistem pencernaan',
      'Mencerahkan kulit dari dalam secara alami'
    ],
    ingredients: ['Kunyit Biang Murni', 'Asam Jawa Tua', 'Gula Aren Organik', 'Garam Sedikit', 'Air Suling'],
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
    description: 'Kombinasi beras sangrai ditumbuk halus dengan kencur segar pilihan, jahe, dan manisnya gula kelapa asli. Pilihan favorit untuk memulihkan kebugaran tubuh.',
    benefits: [
      'Menghilangkan lelah, lesu, dan pegal linu setelah beraktivitas',
      'Meningkatkan nafsu makan anak dan dewasa',
      'Meredakan batuk ringan dan melegakan tenggorokan',
      'Menjaga hangat stamina tubuh sepanjang hari'
    ],
    ingredients: ['Beras Sangrai Pilihan', 'Kencur Segar', 'Jahe Merah', 'Gula Kelapa Asli', 'Kayu Manis'],
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
    description: 'Diolah dari rimpang temulawak segar pilihan dengan sentuhan daun pandan dan gula aren. Sangat baik untuk menjaga kesehatan organ dalam.',
    benefits: [
      'Menjaga dan memulihkan fungsi hati (hepatoprotektor)',
      'Meredakan maag, kembung, dan asam lambung berlebih',
      'Menurunkan kadar kolesterol jahat dalam darah',
      'Meningkatkan daya tahan tubuh terhadap infeksi'
    ],
    ingredients: ['Temulawak Segar', 'Daun Pandan', 'Gula Aren', 'Asam Jawa', 'Air Mineral'],
    tasteProfile: 'Pahit Manis Segar, Rempah Lembut',
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
    ingredients: ['Asam Jawa Murni', 'Gula Jawa Kental', 'Pandan', 'Garam Laut Alami'],
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
    tagline: 'Spesialis pelentur otot, pinggang & pereda pegal sendi',
    category: 'Kebugaran & Sendi',
    price250ml: 11000,
    price500ml: 18000,
    description: 'Ramuan tradisional khas cabe jawa dan lempuyang pahit-pedas yang hangat. Dikenal sejak zaman dahulu ampuh untuk mengatasi keletihan fisik parah.',
    benefits: [
      'Meredakan pegal di pinggang, leher, dan persendian',
      'Melancarkan sirkulasi dan peredaran darah',
      'Mengatasi rasa kesemutan dan capek berlebih',
      'Menghangatkan tubuh dan meredakan demam ringand'
    ],
    ingredients: ['Cabe Jawa', 'Lempuyang Pahit', 'Kunyit', 'Madu Asli', 'Gula Kelapa'],
    tasteProfile: 'Hangat Pedas Rempah, Bittersweet',
    servingSuggestion: 'Nikmati hangat sebelum tidur untuk tidur nyenyak & badan segar esok hari.',
    shelfLife: '3-4 hari simpan kulkas',
    bestSeller: false,
    badgeText: 'Racikan Khusus',
    colorAccent: 'red',
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
    description: 'Ekstrak daun sambiloto, brotowali, dan meniran murni. Meski pahit di lidah, khasiatnya luar biasa sebagai antibakteri & pembersih darah alami.',
    benefits: [
      'Membuang racun/toksin dari dalam darah (Detoksifikasi)',
      'Membantu menstabilkan kadar gula darah',
      'Mengatasi gatal-gatal kulit, jerawat & alergi',
      'Meningkatkan benteng imunitas tubuh dari penyakit'
    ],
    ingredients: ['Daun Sambiloto', 'Brotowali', 'Meniran', 'Widrikudat', 'Air Suling'],
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
    tagline: 'Penyegar pucuk daun asam muda & kunyit manis lembut',
    category: 'Stamina & Segar',
    price250ml: 11000,
    price500ml: 18000,
    description: 'Ramuan lembut menggunakan pucuk daun asam jawa muda (sinom), kunyit halus, dan gula batu. Memiliki rasa asam-manis yang lebih halus dibanding kunyit asam.',
    benefits: [
      'Mendinginkan suhu tubuh & mengatasi seriawan',
      'Membantu proses penderasan detoksifikasi ginjal',
      'Menyegarkan napas dan melancarkan pencernaan',
      'Membantu mencerahkan rona kulit'
    ],
    ingredients: ['Pucuk Daun Asam Muda (Sinom)', 'Kunyit Segar', 'Gula Batu Organik', 'Kayu Manis'],
    tasteProfile: 'Manis Ringan, Asam Halus, Sangat Lembut',
    servingSuggestion: 'Sajikan dingin dengan es batu untuk rasa yang luar biasa segar.',
    shelfLife: '3-4 hari simpan kulkas',
    bestSeller: true,
    badgeText: 'Khas Keraton',
    colorAccent: 'lime',
    imageUrl: JAMU_IMAGE_ASSETS.products.kunyittawar
  },
  {
    id: 'Mpon Mpon',
    name: 'Mpon Mpon',
    javaneseName: 'Jamu Mpon Mpon',
    tagline: 'Pelancar produksi ASI & penjaga kesegaran aroma tubuh',
    category: 'Ibu & Kesehatan',
    price250ml: 11000,
    price500ml: 18000,
    description: 'Racikan daun katuk, temu giring, kencur, dan kunyit. Sangat disukai oleh ibu menyusui maupun wanita yang ingin menjaga aroma tubuh tetap segar.',
    benefits: [
      'Melancarkan dan meningkatkan kualitas produksi ASI ibu',
      'Menghilangkan bau badan & bau mulut tidak sedap',
      'Meredakan perut kembung dan mendinginkan rahim',
      'Menjaga kebugaran dan kesegaran tubuh wanita'
    ],
    ingredients: ['Daun Katuk', 'Temu Giring', 'Kencur', 'Kunyit', 'Pandan', 'Gula Kelapa'],
    tasteProfile: 'Herbal Aromatik Lembut, Gurih Manis Tipis',
    servingSuggestion: 'Diminum hangat 1-2 kali sehari untuk ibu menyusui.',
    shelfLife: '3-4 hari dalam kulkas',
    bestSeller: false,
    badgeText: 'Pelancar ASI',
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
    description: 'Sari jahe merah pilihan berpadu dengan kapulaga, cengkeh, kayu manis, dan gula aren asli. Sensasi hangat pedasnya langsung meresap ke tubuh.',
    benefits: [
      'Menghangatkan seluruh tubuh & mengusir masuk angin',
      'Meredakan mual, pusing, dan tenggorokan gatal',
      'Meningkatkan daya tahan tubuh dan imunitas ganda',
      'Meredakan flu, batuk, dan kelelahan malam hari'
    ],
    ingredients: ['Jahe Merah Murni', 'Kapulaga', 'Cengkeh', 'Kayu Manis', 'Gula Aren Asli'],
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
