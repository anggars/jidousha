export interface Kotoba {
  id: number;
  kanji: string;
  romaji: string;
  indonesian: string;
  category?: string;
}

export const KOTOBA_LIST: Kotoba[] = [
  { id: 1, kanji: "自動車", romaji: "Jidousha", indonesian: "Mobil / Kendaraan roda empat", category: "Umum" },
  { id: 2, kanji: "整備", romaji: "Seibi", indonesian: "Perawatan / Pemeliharaan", category: "Umum" },
  { id: 3, kanji: "エンジン", romaji: "Enjin", indonesian: "Mesin", category: "Suku Cadang" },
  { id: 4, kanji: "タイヤ", romaji: "Taiya", indonesian: "Ban", category: "Suku Cadang" },
  { id: 5, kanji: "ブレーキ", romaji: "Bureeki", indonesian: "Rem", category: "Suku Cadang" },
  { id: 6, kanji: "点検", romaji: "Tenken", indonesian: "Pemeriksaan / Inspeksi", category: "Tindakan" },
  { id: 7, kanji: "交換", romaji: "Koukan", indonesian: "Penggantian", category: "Tindakan" },
  { id: 8, kanji: "修理", romaji: "Shuuri", indonesian: "Perbaikan", category: "Tindakan" },
  { id: 9, kanji: "安全", romaji: "Anzen", indonesian: "Keamanan / Keselamatan", category: "Umum" },
  { id: 10, kanji: "確認", romaji: "Kakunin", indonesian: "Konfirmasi / Pengecekan", category: "Tindakan" },
  { id: 11, kanji: "工具", romaji: "Kougu", indonesian: "Peralatan (Tools)", category: "Alat" },
  { id: 12, kanji: "レンチ", romaji: "Renchi", indonesian: "Kunci pas / Wrench", category: "Alat" },
  { id: 13, kanji: "ドライバー", romaji: "Doraibaa", indonesian: "Obeng / Screwdriver", category: "Alat" },
  { id: 14, kanji: "オイル", romaji: "Oiru", indonesian: "Oli / Minyak pelumas", category: "Cairan" },
  { id: 15, kanji: "燃料", romaji: "Nenryou", indonesian: "Bahan Bakar", category: "Cairan" },
  { id: 16, kanji: "ガソリン", romaji: "Gasorin", indonesian: "Bensin", category: "Cairan" },
  { id: 17, kanji: "軽油", romaji: "Keiyu", indonesian: "Solar (Diesel)", category: "Cairan" },
  { id: 18, kanji: "冷却水", romaji: "Reikyakusui", indonesian: "Air pendingin (Coolant)", category: "Cairan" },
  { id: 19, kanji: "異常", romaji: "Ijou", indonesian: "Abnormal / Tidak normal", category: "Kondisi" },
  { id: 20, kanji: "正常", romaji: "Seijou", indonesian: "Normal", category: "Kondisi" },
  { id: 21, kanji: "摩耗", romaji: "Mamou", indonesian: "Aus / Keausan", category: "Kondisi" },
  { id: 22, kanji: "漏れ", romaji: "More", indonesian: "Bocor / Kebocoran", category: "Kondisi" },
  { id: 23, kanji: "測定", romaji: "Sokutei", indonesian: "Pengukuran", category: "Tindakan" },
  { id: 24, kanji: "規定", romaji: "Kitei", indonesian: "Standar / Regulasi", category: "Umum" },
  { id: 25, kanji: "部品", romaji: "Buhin", indonesian: "Suku Cadang / Part", category: "Suku Cadang" }
];
