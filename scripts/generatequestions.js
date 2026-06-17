const fs = require('fs');

const questions = [
  {
    id: "q1",
    japanese: "ガソリンエンジンの燃料は、軽油（けいゆ）です。",
    indonesian: "Bahan bakar mesin bensin adalah solar (light oil).",
    options: ["O", "X"],
    correctAnswer: 1
  },
  {
    id: "q2",
    japanese: "これはダイヤルゲージです。",
    indonesian: "Ini adalah dial gauge.",
    options: ["O", "X"],
    correctAnswer: 0,
    imageUrl: "/images/2.png"
  },
  {
    id: "q3",
    japanese: "ブレーキライニングは、交換部品（こうかんぶひん）です。",
    indonesian: "Brake lining (kampas rem) adalah suku cadang yang diganti (replacement part).",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q4",
    japanese: "冷却装置（れいきゃくそうち）のラジエータは、ファンで温めます。",
    indonesian: "Radiator pada sistem pendingin dihangatkan dengan kipas.",
    options: ["O", "X"],
    correctAnswer: 1
  },
  {
    id: "q5",
    japanese: "Aは、シックネス・ゲージで長さ、外径（がいけい）、内径（ないけい）などの測定に使用する。",
    indonesian: "A adalah thickness gauge (feeler gauge) yang digunakan untuk mengukur panjang, diameter luar, dan diameter dalam.",
    options: ["O", "X"],
    correctAnswer: 1,
    imageUrl: "/images/5.png"
  },
  {
    id: "q6",
    japanese: "タイヤ・ゲージ（tire pressure gauge）で、タイヤのくうきあつを測定します。",
    indonesian: "Gunakan tire pressure gauge untuk mengukur tekanan udara ban.",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q7",
    japanese: "次のものはエンジンオイルの粘度（ねんど）を示しています：SAE 5W-30, 10W-30, 10W-40",
    indonesian: "Berikut ini adalah yang menunjukkan kekentalan oli mesin: SAE 5W-30, 10W-30, 10W-40.",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q8",
    japanese: "オイル・フィルタ（oil filter）は、交換部品（こうかんぶひん）です。",
    indonesian: "Oil filter adalah suku cadang yang diganti.",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q9",
    japanese: "オイルフィルターの中にオイルエレメントが入っています。",
    indonesian: "Di dalam filter oli terdapat elemen oli.",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q10",
    japanese: "スタートボタン（またはスタータ）はバッテリーに充電します。",
    indonesian: "Tombol start (atau starter) mengisi daya baterai.",
    options: ["O", "X"],
    correctAnswer: 1
  },
  {
    id: "q11",
    japanese: "タイミングライトは、点火時期（てんかじき）を点検・調整するために使用します。",
    indonesian: "Timing light digunakan untuk memeriksa dan menyetel waktu pengapian.",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q12",
    japanese: "これはシリンダーブロックです。",
    indonesian: "Ini adalah blok silinder.",
    options: ["O", "X"],
    correctAnswer: 0,
    imageUrl: "/images/12.png"
  },
  {
    id: "q13",
    japanese: "Aはオルタネーターである。",
    indonesian: "A adalah alternator.",
    options: ["O", "X"],
    correctAnswer: 0,
    imageUrl: "/images/13.png"
  },
  {
    id: "q14",
    japanese: "ブレーキキャリパーはサンドペーパーできれいにします。",
    indonesian: "Brake caliper dibersihkan dengan amplas (sandpaper).",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q15",
    japanese: "エアガン（エアブロー）でグリースを圧送（あっそう）する。",
    indonesian: "Gunakan air gun untuk menekan gemuk (grease).",
    options: ["O", "X"],
    correctAnswer: 1
  },
  {
    id: "q16",
    japanese: "図は、燃焼室（ねんしょうしつ）の冷却用（れいきゃくよう）のウォータ・ジャケットである。",
    indonesian: "Gambar menunjukkan water jacket untuk pendinginan ruang bakar.",
    options: ["O", "X"],
    correctAnswer: 1,
    imageUrl: "/images/16.png"
  },
  {
    id: "q17",
    japanese: "Aは、マイクロメータで、隙間（すきま）の測定（そくてい）ができる。",
    indonesian: "A adalah mikrometer, yang dapat digunakan untuk mengukur celah.",
    options: ["O", "X"],
    correctAnswer: 1,
    imageUrl: "/images/17.png"
  },
  {
    id: "q18",
    japanese: "ファン・ベルトの摩耗（まもう）や損傷（そんしょう）は、目視（もくし）や手（て）で触（さわ）って点検する。",
    indonesian: "Keausan dan kerusakan fan belt diperiksa secara visual dan dengan rabaan tangan.",
    options: ["O", "X"],
    correctAnswer: 0,
    imageUrl: "/images/18.png"
  },
  {
    id: "q19",
    japanese: "サーキット・テスタは、電圧（てんあつ）、電流（でんりゅう）、抵抗（ていこう）を測定するときに使用する。",
    indonesian: "Circuit tester (multimeter) digunakan untuk mengukur tegangan, arus, dan hambatan.",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q20",
    japanese: "ブレーキドラムは交換部品（こうかんぶひん）です。",
    indonesian: "Brake drum (tromol rem) adalah suku cadang yang diganti.",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q21",
    japanese: "レシプロ・エンジンは4サイクルと2サイクルがあります。",
    indonesian: "Reciprocating engine memiliki 4-cycle dan 2-cycle.",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q22",
    japanese: "レシプロ・エンジン（4ストローク）は、4工程（ストローク）で1サイクルを完了します。",
    indonesian: "Reciprocating engine (4-stroke) menyelesaikan 1 siklus dalam 4 langkah.",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q23",
    japanese: "ブレーキ・キャリパはブレーキドラムに使われている。",
    indonesian: "Brake caliper digunakan pada rem tromol.",
    options: ["O", "X"],
    correctAnswer: 1
  },
  {
    id: "q24",
    japanese: "トーインゲージ（toe-in gauge）は、バルブの隙間（バルブクリアランス）を測定するものである。",
    indonesian: "Toe-in gauge digunakan untuk mengukur celah katup.",
    options: ["O", "X"],
    correctAnswer: 1
  },
  {
    id: "q25",
    japanese: "これはラジエータです。",
    indonesian: "Ini adalah radiator.",
    options: ["O", "X"],
    correctAnswer: 0,
    imageUrl: "/images/25.png"
  },
  {
    id: "q26",
    japanese: "これはおふせっと・れんち（めがねレンチ）です。",
    indonesian: "Ini adalah offset wrench (kunci ring).",
    options: ["O", "X"],
    correctAnswer: 0,
    imageUrl: "/images/26.png"
  },
  {
    id: "q27",
    japanese: "車両をジャッキアップする際、前輪に輪止め（ガンジァル）を設置しているイラスト。",
    indonesian: "Ilustrasi mengganjal roda depan saat mendongkrak kendaraan.",
    options: ["O", "X"],
    correctAnswer: 0,
    imageUrl: "/images/27.png"
  },
  {
    id: "q28",
    japanese: "グロープラグはガソリンエンジンに使われている。",
    indonesian: "Glow plug (busi pijar) digunakan pada mesin bensin.",
    options: ["O", "X"],
    correctAnswer: 1
  },
  {
    id: "q29",
    japanese: "スパークプラグ（spark plug）はガソリンエンジンに使われている。",
    indonesian: "Spark plug (busi) digunakan pada mesin bensin.",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q30",
    japanese: "ブレーキ液（リザーバタンク）の量は、目視により外部からレベルの基準線（MAX/MIN）を確認する。",
    indonesian: "Ketinggian minyak rem (pada reservoir tank) diperiksa secara visual dari luar sesuai garis batas level (MAX/MIN).",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q31",
    japanese: "エンジン警告灯（チェックエンジンランプ）は、エンジンシステムに異常（アブノーマル）が発生したことを検出するためのものである。",
    indonesian: "Lampu check engine berfungsi untuk mendeteksi ketidaknormalan pada sistem mesin.",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q32",
    japanese: "マスタシリンダを取り外す際、ハンマで叩いて取り外す。",
    indonesian: "Saat melepas master silinder, pukul menggunakan palu untuk melepaskannya.",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q33",
    japanese: "ディスクホイールの材質は、主にステンレスまたはアルミニウムである。",
    indonesian: "Material disc wheel utamanya adalah stainless steel atau aluminium.",
    options: ["O", "X"],
    correctAnswer: 1
  },
  {
    id: "q34",
    japanese: "ノギスを用いた測定結果の読み取りに関する画像問題。",
    indonesian: "Soal gambar mengenai pembacaan hasil pengukuran jangka sorong.",
    options: ["O", "X"],
    correctAnswer: 0,
    imageUrl: "/images/34.png"
  },
  {
    id: "q35",
    japanese: "スパナ（オープンエンドレンチ）を二本つなぎ合わせて（延長して）使用することは、正しい使用方法である。",
    indonesian: "Menyambungkan dua buah spanner (kunci pas) untuk menambah tuas merupakan cara penggunaan yang benar.",
    options: ["O", "X"],
    correctAnswer: 1
  },
  {
    id: "q36",
    japanese: "タイヤの溝（みぞ）の深（ふかさ）は、デプス・ゲージなどを用いて2カ所（かしょ）だけ測定すれば十分である。",
    indonesian: "Kedalaman alur ban cukup diukur pada 2 titik saja menggunakan depth gauge.",
    options: ["O", "X"],
    correctAnswer: 1,
    imageUrl: "/images/36.png"
  },
  {
    id: "q37",
    japanese: "これはタイヤのトレッド・パターン（tread pattern）のリブ（rib）型である。",
    indonesian: "Ini adalah tipe rib dari pola tapak ban.",
    options: ["O", "X"],
    correctAnswer: 0,
    imageUrl: "/images/37.png"
  },
  {
    id: "q38",
    japanese: "バイス（万力）のハンドルを締め付ける際、ハンマ（パル）で叩いて強く締め付ける。",
    indonesian: "Saat mengencangkan tuas ragum (vise), pukul menggunakan palu agar lebih kuat.",
    options: ["O", "X"],
    correctAnswer: 1,
    imageUrl: "/images/38.png"
  },
  {
    id: "q39",
    japanese: "ボルトやナットを規定（きてい）のトルクで締め付けることができる工具は、トルク・レンチである。",
    indonesian: "Alat yang dapat mengencangkan baut dan mur sesuai torsi standar adalah torque wrench (kunci momen).",
    options: ["O", "X"],
    correctAnswer: 0
  },
  {
    id: "q40",
    japanese: "サーキットテスタによる12Vバッテリの端子電圧の測定において、正しい準備作業はどれですか？",
    indonesian: "Pada pengukuran tegangan terminal baterai 12V menggunakan circuit tester, persiapan manakah yang benar?",
    options: ["プローブの赤色（＋）を、バッテリの「＋」端子に取り付ける。", "プローブの赤色（＋）を、バッテリの「ー」端子に取り付ける。"],
    optionImages: ["/images/40a.png", "/images/40b.png"],
    correctAnswer: 0
  },
  {
    id: "q41",
    japanese: "水温センサ（Water temperature sensor）の抵抗値を測定する際、回路計（テスタ）の適切な測定レンジ（倍率）を選びなさい。",
    indonesian: "Pilih rentang ukur (pengali) yang tepat pada tester saat mengukur nilai hambatan water temperature sensor.",
    options: ["1x", "100x"],
    correctAnswer: 1
  },
  {
    id: "q42",
    japanese: "前問の設定（x100レンジ）で水温センサを測定した際、アナログテスタの指針が「20」を指していました。実際の抵抗値（Ω）を求めなさい。",
    indonesian: "Saat mengukur water temperature sensor dengan pengaturan sebelumnya (skala x100), jarum tester analog menunjukkan '20'. Tentukan nilai hambatan aktual (Ω).",
    options: ["20 Ω", "2000 Ω"],
    correctAnswer: 1,
    imageUrl: "/images/42.png"
  },
  {
    id: "q43",
    japanese: "ピストンピンの正しい測定方法（外径測定）を示している画像はどちらですか？",
    indonesian: "Gambar manakah yang menunjukkan cara pengukuran pin piston yang benar (mengukur diameter luar)?",
    options: ["画像1", "画像2"],
    optionImages: ["/images/43a.png", "/images/43b.png"],
    correctAnswer: 0
  },
  {
    id: "q44",
    japanese: "次の画像のうち、「トルクレンチ」はどちらですか？",
    indonesian: "Di antara gambar berikut, manakah yang merupakan 'torque wrench' (kunci momen)?",
    options: ["画像1", "画像2"],
    optionImages: ["/images/44a.png", "/images/44b.png"],
    correctAnswer: 0
  },
  {
    id: "q45",
    japanese: "長さ、幅、厚さ、高さ、穴の深さなどを広く測定できる測定工具はどれですか？",
    indonesian: "Alat ukur mana yang dapat mengukur secara luas mulai dari panjang, lebar, ketebalan, tinggi, hingga kedalaman lubang?",
    options: ["ノギス", "マイクロメータ"],
    correctAnswer: 0
  },
  {
    id: "q46",
    japanese: "自動車のホイールナット（またはホイールボルト）を取り付ける際、どのような順序で締め付けるべきですか？",
    indonesian: "Saat memasang mur roda mobil (atau baut roda), urutan pengencangan seperti apa yang harus dilakukan?",
    options: ["対角線上に十字（ menyilang ）に締め付ける。", "時計回り（ berurutan ）に順番に締め付ける。"],
    correctAnswer: 0
  },
  {
    id: "q47",
    japanese: "ホイールナットを最終的にしっかりと規定トルクまで締め付ける際、何回に分けて締め付けを行うのが正しいですか？",
    indonesian: "Saat mengencangkan mur roda secara maksimal sesuai standar torsi, berapa kali tahapan pengencangan yang benar?",
    options: ["1回で一気に締め付ける。", "2〜3回に分けて段階的に締め付ける。"],
    correctAnswer: 1
  },
  {
    id: "q48",
    japanese: "画像のノギス（副尺）の目盛りが示す正しい測定値を読み取りなさい。",
    indonesian: "Bacalah nilai pengukuran yang benar dari skala jangka sorong (vernier caliper) pada gambar.",
    options: ["26.35 mm", "36.35 mm"],
    correctAnswer: 0,
    imageUrl: "/images/48.png"
  },
  {
    id: "q49",
    japanese: "シリンダーヘッドボルトを脱着（緩める・締める）する際の手順として正しいものはどちらですか？",
    indonesian: "Manakah prosedur yang benar saat melepas/memasang (mengencangkan/mengendurkan) baut silinder head?",
    options: ["端から順番に行う。", "中央から外側へ向かって対角線（クロス）順に行う。"],
    correctAnswer: 1,
    imageUrl: "/images/49.png"
  }
];

const output = "export type QuestionType = {\n" +
"  id: string;\n" +
"  japanese: string;\n" +
"  indonesian: string;\n" +
"  english?: string;\n" +
"  options: string[];\n" +
"  optionImages?: string[];\n" +
"  correctAnswer: number;\n" +
"  explanation?: string;\n" +
"  imageUrl?: string;\n" +
"};\n\n" +
"export const ALL_QUESTIONS: QuestionType[] = " + JSON.stringify(questions, null, 2) + ";\n";

fs.writeFileSync('src/lib/questions.ts', output);
