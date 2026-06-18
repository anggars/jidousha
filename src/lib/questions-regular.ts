export type QuestionType = {
  id: string;
  japanese: string;
  indonesian: string;
  english: string;
  options: string[];
  optionsIndonesian?: string[];
  optionsEnglish?: string[];
  optionImages?: string[];
  correctAnswer: number;
  explanationJp: string;
  explanationId: string;
  explanationEn: string;
  imageUrl?: string;
};

export const REGULAR_QUESTIONS: QuestionType[] = [
  {
    "id": "q95",
    "japanese": "シリンダ・ヘッドの取り外しについて、注意することは、どれか。",
    "indonesian": "Saat melepas cylinder head, apa yang harus diperhatikan?",
    "english": "When removing the cylinder head, what should be noted?",
    "options": [
      "シリンダ・ヘッド・ガスケットは、交換しないので取り外しに注意する。",
      "シリンダ・ヘッド・ボルトは、長さや太さが違うものがあるので、組み立て時に分かるように注意する。"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q96",
    "japanese": "シリンダ・ヘッドの取り付けについて、注意することは、どれか。",
    "indonesian": "Saat memasang cylinder head, apa yang harus diperhatikan?",
    "english": "When installing the cylinder head, what should be noted?",
    "options": [
      "シリンダ・ブロックのボルト穴にたまった冷却水やオイルなどは、こぼさないように注意する。",
      "シリンダ・ヘッド・ボルトのねじ部に薄くオイルを塗る。"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q97",
    "japanese": "シリンダ・ヘッド・ボルトを締め付ける正しい順番は、どれか。",
    "indonesian": "Urutan yang benar untuk mengencangkan baut cylinder head adalah?",
    "english": "Which is the correct order to tighten the cylinder head bolts?",
    "options": [
      "Opsi 1",
      "Opsi 2"
    ],
    "optionImages": [
      "/regular/p97a.jpg",
      "/regular/p97b.jpg"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q98",
    "japanese": "バッテリの端子電圧の測定の準備について、正しいものはどれか。",
    "indonesian": "Persiapan yang benar untuk mengukur tegangan terminal baterai adalah?",
    "english": "Which is the correct preparation for measuring battery terminal voltage?",
    "options": [
      "プローブの赤色は、測定用ターミナルの「＋」に取り付ける。",
      "プローブの赤色は、測定用ターミナルの「－」に取り付ける。"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q99",
    "japanese": "マイクロメータは、どれか。",
    "indonesian": "Manakah yang merupakan mikrometer?",
    "english": "Which one is a micrometer?",
    "options": [
      "Opsi 1",
      "Opsi 2"
    ],
    "optionImages": [
      "/regular/p99a.jpg",
      "/regular/p99b.jpg"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q100",
    "japanese": "バルブ・ステムの外径は、どこか。",
    "indonesian": "Di manakah diameter luar valve stem?",
    "english": "Where is the outer diameter of the valve stem?",
    "options": [
      "Opsi 1",
      "Opsi 2"
    ],
    "optionImages": [
      "/regular/p100a.jpg",
      "/regular/p100b.jpg"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q101",
    "japanese": "マイクロメータによるバルブ・ステムの外径の測定値について、正しいものは、どれか。",
    "indonesian": "Nilai pengukuran diameter luar valve stem dengan mikrometer yang benar adalah?",
    "english": "Which is the correct measurement of the valve stem's outer diameter using a micrometer?",
    "options": [
      "5.85mm",
      "5.35mm"
    ],
    "imageUrl": "/regular/p101.jpg",
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q102",
    "japanese": "ノギス測定の結果はどうですか？",
    "indonesian": "Bagaimana hasil pengukuran jangka sorong?",
    "english": "What is the result of the vernier caliper measurement?",
    "options": [
      "09.65mm",
      "11.65mm"
    ],
    "imageUrl": "/regular/p102.jpg",
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  }
];
