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
    "id": "q1",
    "japanese": "ガソリン・エンジンでは、うんてんちゅうにカリカリといういおんがはっせいすることがあり、これをノッキングという。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q2",
    "japanese": "ジーゼル・エンジンの排気（はいき）ガス（exhaust gas）には、ＰＭ（Particulate Matter）がふくまれる。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q3",
    "japanese": "図（ず）は、燃焼（ねんしょう）室（しつ）の冷却（れいきゃく）用（よう）のウォータ・ジャケットである。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t3.jpg"
  },
  {
    "id": "q4",
    "japanese": "図（ず）は、直接（ちょくせつ）噴射（ふんしゃ）式（しき）のジーゼル・エンジン（diesel engine）である。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t4.jpg"
  },
  {
    "id": "q5",
    "japanese": "オイル・ポンプ（oil pump）は、オイル・パン（oil pan）のオイル（oil）を各（かく）潤滑（じゅんかつ）部（ぶ）へ圧（圧）送（おく）する。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q6",
    "japanese": "ラジエータ（radiator）のラジエータ・キャップは、冷却（れいきゃく）水（すい）の温度（おんど）が低（ひく）いときにラジエータへの水路（すいろ）を閉（と）じて冷却（れいきゃく）水（すい）を早（はや）く、適温（てきおん）にする。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q7",
    "japanese": "エア・クリーナのエレメントが汚（よご）れて目（め）詰（つ）まりを起（お）こすと吸入（きゅうにゅう）空気（くうき）が減少（げんしょう）し、エンジンの性能（せいのう）が低下（ていか）する。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q8",
    "japanese": "バッテリに使用（しよう）される電解（でんかい）液（えき）は、硫酸（りゅうさん）と水（みず）を混合（こんごう）した希（まれ）硫酸（りゅうさん）で、いずれも純度（じゅんど）の高（たか）いものが使用（しよう）される。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q9",
    "japanese": "オルタネーターでは、ダイオード（レクチファイア）を使用（しよう）して直流（ちょくりゅう）を交流（こうりゅう）に変換（へんかん）している。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q10",
    "japanese": "図（ず）は、ダイアフラム・スプリング式（しき）クラッチで、主（おも）に乗用車（じょうようしゃ）や小型（こがた）トラックなどに使（つか）われている。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t10.jpg"
  },
  {
    "id": "q11",
    "japanese": "Ａは、ドライブシャフト（drive shaft）である。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t11.jpg"
  },
  {
    "id": "q12",
    "japanese": "図（ず）は、リンク型（がた）リヤ・サスペンションである。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t12.jpg"
  },
  {
    "id": "q13",
    "japanese": "リーフ・スプリングは、乗用車（じょうようしゃ）に多（おお）く使（つか）われる。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t13.jpg"
  },
  {
    "id": "q14",
    "japanese": "パワー・ステアリングには、油圧（ゆあつ）式（しき）と電気（でんき）式（しき）がある。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q15",
    "japanese": "タイヤの空気圧（くうきあつ）は、タイヤが高温（こうおん）の状態（じょうたい）で点検（てんけん）する。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q16",
    "japanese": "図（ず）のＡは、フロント・ホイール・アライメント（front wheel alignment）のキャンバ（camber）である。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t16.jpg"
  },
  {
    "id": "q17",
    "japanese": "ブレーキ・ペダルを踏（ふ）むと、油圧（ゆあつ）がホイール・シリンダに伝（つた）わり、ブレーキ・シューをブレーキ・ドラムに圧着（あっちゃく）させることでブレーキがかかる。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t17.jpg"
  },
  {
    "id": "q18",
    "japanese": "ブレーキ液（えき）は、長期間（ちょうきかん）使用（しよう）していると水分（すいぶん）を吸収（きゅうしゅう）し、性能（せいのう）が劣化（れっか）するので、指定（してい）されている期間（きかん）ごとに交換（こうかん）する。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q19",
    "japanese": "図（ず）ＡのノギスA（vernier caliper）の目盛（めも）りの読（よ）みは、46.45mm である。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t19.jpg"
  },
  {
    "id": "q20",
    "japanese": "Ａは、マイクロメータで、隙間（すきま）の測定（そくてい）ができる。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t20.jpg"
  },
  {
    "id": "q21",
    "japanese": "コンプレッション・ゲージは、シリンダの圧縮（あっしゅく）圧力（あつりょく）の測定（そくてい）ができる。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t21.jpg"
  },
  {
    "id": "q22",
    "japanese": "ギヤ・オイルの粘（ねば）度（たび）が高（たか）すぎると粘性（ねんせい）抵抗（ていこう）が大（おお）きくなり、動力（どうりょく）損失（そんしつ）を増大（ぞうだい）させる。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q23",
    "japanese": "グリースは、点検（てんけん）、給油（きゅうゆ）が頻繁（ひんぱん）に行（おこな）えない部分（ぶぶん）に使用（しよう）している。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q24",
    "japanese": "発進（はっしん）時（じ）に異常（いじょう）な振動（しんどう）があったので、クラッチ・フェーシング（clutch facing）を点検（てんけん）した。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q25",
    "japanese": "ホイール・ナットの締（し）め付（づ）けは、１→２→３→４→５の順番（じゅんばん）に締（し）め付（つ）ける。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t25.jpg"
  },
  {
    "id": "q26",
    "japanese": "プロペラ・シャフトの振（ふ）れを点検（てんけん）するため、シャフトを取（と）り外（はず）してシャフト自体（じたい）の振（ふ）れを点検（てんけん）した。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q27",
    "japanese": "油圧（ゆあつ）式（しき）パワー・ステアリングのリザーバ・タンクのオイル（oil）の量（りょう）は、一般（いっぱん）にエンジンをアイドリングの状態（じょうたい）にして点検（てんけん）する。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q28",
    "japanese": "ブレーキ・ペダルを踏（ふ）み込（こ）んだとき、ふわふわした感（かん）じがあったので、ブレーキ液（えき）を補充（ほじゅう）した。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q29",
    "japanese": "塗料（とりょう）には、下塗（したぬ）り用（よう）、中（ちゅう）塗（ぬ）り用（よう）、上塗（うわぬ）り用（よう）のものがある。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q30",
    "japanese": "乗用車（じょうようしゃ）には、独立（どくりつ）したフレーム（frame）を用（もち）いずフレーム（frame）をボデー（body）の一部（いちぶ）として組（く）み立（た）てたモノコック・ボデー（monocoque body）のものが多（おお）い。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q31",
    "japanese": "エア・クリーナは、空気（くうき）中（ちゅう）のごみを取（と）り除（のぞ）く。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q32",
    "japanese": "エンジン・オイルは、定期（ていき）的（てき）に交換（こうかん）する。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q33",
    "japanese": "ブレーキ・パッドは、交換（こうかん）部品（ぶひん）である。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t33.jpg"
  },
  {
    "id": "q34",
    "japanese": "ファン・ベルトの摩耗（まもう）や損傷（そんしょう）は、目視（もくし）や手（て）で触（さわ）って点検（てんけん）する。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t34.jpg"
  },
  {
    "id": "q35",
    "japanese": "タイヤの溝（みぞ）の深（ふか）さは、デプス・ゲージなどで２カ所（しょ）測定（そくてい）すればよい。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t35.jpg"
  },
  {
    "id": "q36",
    "japanese": "はいきガスの色（いろ）は、エンジンが冷（ひ）えた状態（じょうたい）で点検（てんけん）する。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t36.jpg"
  },
  {
    "id": "q37",
    "japanese": "ホイール・ナットの締（し）め付（づ）けは、１→２→３→４→５の順番（じゅんばん）に締（し）め付（つ）ける。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t37.jpg"
  },
  {
    "id": "q38",
    "japanese": "Ａは、プロペラシャフトである。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t38.jpg"
  },
  {
    "id": "q39",
    "japanese": "図（ず）は、リンク型（がた）リヤ・サスペンションである。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t39.jpg"
  },
  {
    "id": "q40",
    "japanese": "リーフ・スプリングは、きしみ音（おん）が発生（はっせい）しやすい。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t40.jpg"
  },
  {
    "id": "q41",
    "japanese": "Ａは、フロント・ホイール・アライメントのキャスタである。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t41.jpg"
  },
  {
    "id": "q42",
    "japanese": "てんけんハンマでホイール・ナットが緩（ゆる）んでいないか点検（てんけん）した。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q43",
    "japanese": "サーキット・テスタは、電圧（でんあつ）、電流（でんりゅう）、抵抗（ていこう）を測定（そくてい）するときに使用（しよう）する。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t43.jpg"
  },
  {
    "id": "q44",
    "japanese": "Ａは、トルク・レンチで、ボルト、ナットを規定（きてい）のトルクで締（し）め付（つ）けることができる。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t44.jpg"
  },
  {
    "id": "q45",
    "japanese": "さぎょう着（ちゃく）のボタンは、確実（かくじつ）にかける。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q46",
    "japanese": "共同（きょうどう）作業（さぎょう）を行（おこな）う場合（ばあい）は、声（こえ）を掛（か）け、合図（あいず）をして確認（かくにん）をする。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q47",
    "japanese": "充電（じゅうでん）中（ちゅう）のバッテリは、水素（すいそ）ガスを発生（はっせい）するので、絶対（ぜったい）に火気（かき）を近（ちか）づけない。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q48",
    "japanese": "ディーゼルエンジンの燃料（ねんりょう）は、軽油（けいゆ）です。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q49",
    "japanese": "冷却（れいきゃく）装置（そうち）のラジエータは、ファンで温（あたた）めます。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t49.jpg"
  },
  {
    "id": "q50",
    "japanese": "Ａは、油圧（ゆあつ）式（しき）ブレーキです。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t50.jpg"
  },
  {
    "id": "q51",
    "japanese": "Ａは、クラッチです。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t51.jpg"
  },
  {
    "id": "q52",
    "japanese": "Ａは、プロペラ・シャフトです。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t52.jpg"
  },
  {
    "id": "q53",
    "japanese": "Ａは、カムシャフトです。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t53.jpg"
  },
  {
    "id": "q54",
    "japanese": "ブレーキ・フルード（brake fluid）は、MAX よりおおく入（い）れます。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t54.jpg"
  },
  {
    "id": "q55",
    "japanese": "ブレーキ・ドラム（brake drum）は、ハンマー（hammer）で叩（たた）いて点検（てんけん）します。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t55.jpg"
  },
  {
    "id": "q56",
    "japanese": "ファン・ベルト（fan belt）は、ハンマー（hammer）で叩（たた）いて点検（てんけん）します。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t56.jpg"
  },
  {
    "id": "q57",
    "japanese": "イラストは、ドライバー（screwdriver）の正（ただ）しい使（つか）い方（かた）です。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t57.jpg"
  },
  {
    "id": "q58",
    "japanese": "ペンチ（pliers / cutting pliers）は、イラストのように使（つか）います。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t58.jpg"
  },
  {
    "id": "q59",
    "japanese": "バイス（vice）は、ハンマー（hammer）で締（し）めます。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t59.jpg"
  },
  {
    "id": "q60",
    "japanese": "タイヤ・ゲージ（tire pressure gauge）で、タイヤの空気圧（くうきあつ）を測定（そくてい）します。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q61",
    "japanese": "デプス・ゲージ（depth gauge）で、タイヤの空気圧（くうきあつ）を測定（そくてい）します。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q62",
    "japanese": "ハンマー（hammer）は、イラストのように使（つか）います。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t62.jpg"
  },
  {
    "id": "q63",
    "japanese": "けがを防（ふせ）ぐために帽子（ぼうし）をかぶり、安全（あんぜん）靴（くつ）をはきます。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q64",
    "japanese": "フロアにこぼれたオイル（oil）は、すぐに拭（ふ）きます。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q65",
    "japanese": "1kgのガソリン（gasoline）を燃焼（ねんしょう）させるのに必要（ひつよう）な空気（くうき）量（りょう）は、理論（りろん）上（じょう）約（やく）10kgとされている。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q66",
    "japanese": "ジーゼル・ノック（diesel knock）は、噴射（ふんしゃ）時期（じき）が早（はや）過（す）ぎるときや圧縮（あっしゅく）圧力（あつりょく）が低（ひく）いときなどに発生（はっせい）しやすい。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q67",
    "japanese": "シリンダ・ヘッド（cylinder head）は、鋳鉄（ちゅうてつ）製（せい）のものが用（もち）いられている。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q68",
    "japanese": "直接（ちょくせつ）噴射（ふんしゃ）式（しき）の特徴（とくちょう）は、燃焼（ねんしょう）圧力（あつりょく）が低（ひく）いので、運転（うんてん）中（ちゅう）の騒音（そうおん）・振動（しんどう）が小（ちい）さくなる傾向（けいこう）がある。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q69",
    "japanese": "潤滑（じゅんかつ）装置（そうち）の潤滑（じゅんかつ）方式（ほうしき）は、オイル・ポンプ（oil pump）から圧（圧）送（おく）されたオイル（oil）の全（すべ）てをろ過（か）して各（かく）潤滑（じゅんかつ）部（ぶ）に供給（きょうきゅう）する全（ぜん）流（ながれ）ろ過（か）圧（圧）送（おく）式（しき）が用（もち）いられている。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q70",
    "japanese": "ウォータ・ポンプ（water pump）は、冷却（れいきゃく）水（すい）を強制（きょうせい）的（てき）に循環（じゅんかん）させるためのものである。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q71",
    "japanese": "インジェクタ（injector）は、燃料（ねんりょう）を噴射（ふんしゃ）するもので、一般（いっぱん）にニードル・バルブ（needle valve）、プランジャ（plunger）及（およ）びソレノイド・コイル（solenoid coil）などで構成（こうせい）されている。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q72",
    "japanese": "N型（がた）半導体（はんどうたい）は、自由（じゆう）電子（でんし）が多（おお）くあるようにつくられた不純物（ふじゅんぶつ）半導体（はんどうたい）をいう。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q73",
    "japanese": "オルタネータ（alternator）は、ロータ・コイル（rotor coil）に電気（でんき）を供給（きょうきゅう）する機構（きこう）から、ブラシ型（がた）（brush type）とブラシレス型（がた）（brushless type）に分類（ぶんるい）される。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q74",
    "japanese": "クラッチ・ディスク（clutch disc）は、一般（いっぱん）に複（ふく）板（いた）式（しき）クラッチ（clutch）である。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q75",
    "japanese": "プロペラ・シャフト（propeller shaft）は、トランスミッション（transmission）の動力（どうりょく）をリヤ・アクスル（rear axle）へ伝（つた）える。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q76",
    "japanese": "Aは、ナックル・スピンドル（knuckle spindle）である。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t76.png"
  },
  {
    "id": "q77",
    "japanese": "リーフ・スプリング（leaf spring）のばね定数（ていすう）は、スパン（span）の長（なが）さ、リーフ（leaf）の幅（はば）、厚（あつ）さ、枚数（まいすう）及（およ）び材質（ざいしつ）などにより定（さだ）まる。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q78",
    "japanese": "Aは、ボール・ナット（ball nut）である。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t78.jpg"
  },
  {
    "id": "q79",
    "japanese": "ディスク・ホイール（disc wheel）には、一般（いっぱん）に、鋼（はがね）製（せい）ホイールと軽（けい）合金（ごうきん）製（せい）ホイールがある。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q80",
    "japanese": "図（ず）のAは、フロント・ホイール・アライメント（front wheel alignment）のキャスタ（caster）である。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t80.png"
  },
  {
    "id": "q81",
    "japanese": "油圧（ゆあつ）式（しき）ブレーキ（brake）は、一般（いっぱん）に大型（おおがた）トラック（large sized truck）などに用（もち）いられている。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q82",
    "japanese": "ブレーキ液（えき）（brake fluid）は、液（えき）圧（圧）系（けい）に水（みず）が入（はい）ると沸点（ふってん）が低下（ていか）し、フェード（fade）現象（げんしょう）発生（はっせい）の原因（げんいん）となるので、洗車（せんしゃ）の際（さい）などは注意（ちゅうい）する。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q83",
    "japanese": "図（ず）のAは、バーニヤ（vernier）である。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": "",
    "imageUrl": "/regular/t83.png"
  },
  {
    "id": "q84",
    "japanese": "シックネス・ゲージ（thickness gauge）のリーフ（leaf）を隙間（すきま）に入（い）れて、やや抵抗（ていこう）を感（かん）じながら抜（ぬ）き差（さ）しできるときのリーフ（leaf）の厚（あつ）さを、測定（そくてい）値（ち）とする。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q85",
    "japanese": "コンプレッション・ゲージ（compression gauge）の測定（そくてい）範囲（はんい）は、一般（いっぱん）にガソリン・エンジン用（よう）では0〜7MPa、ジーゼル・エンジン用（よう）では0〜2.5MPaである。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q86",
    "japanese": "ギヤ・オイル（gear oil）は、鉱物（こうぶつ）油（ゆ）や合成（ごうせい）油（ゆ）に、各種（かくしゅ）添加（てんか）剤（ざい）を加（くわ）えて耐水（たいすい）性（せい）、耐圧（たいあつ）性（せい）、粘着（ねんちゃく）性（せい）などを向上（こうじょう）させたオイルである。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q87",
    "japanese": "シャシ・グリース（chassis grease）は、耐水（たいすい）性（せい）、耐圧（たいあつ）性（せい）、粘着（ねんちゃく）性（せい）などに優（すぐ）れている。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q88",
    "japanese": "クラッチ・ペダル（clutch pedal）の高（たか）さが規定（きてい）値（ち）を外（はず）れていたので、ロッド（rod）やワイヤ（wire）などを調整（ちょうせい）した。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q89",
    "japanese": "ホイール（wheel）の損傷（そんしょう）について、ホイール・ナット（wheel nut）が当（あ）たるテーパー（taper）面（めん）の磨耗（まもう）及（およ）び変形（へんけい）の有無（うむ）を点検（てんけん）した。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q90",
    "japanese": "ドライブ・シャフト（drive shaft）取（と）り付（つ）けナット（nut）に緩（ゆる）みがないか、点検（てんけん）した。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q91",
    "japanese": "ステアリング・ホイール（steering wheel）にがたがあったため、ステアリング・ホイール（steering wheel）の各（かく）取（と）り付（つ）け部（ぶ）の緩（ゆる）みを点検（てんけん）した。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q92",
    "japanese": "ブレーキ・ペダル（brake pedal）を踏（ふ）み込（こ）んだとき、踏（ふ）み代（だい）が増加（ぞうか）していたので、ブレーキ液（えき）（brake fluid）を補充（ほじゅう）した。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q93",
    "japanese": "冷却（れいきゃく）水（すい）の量（りょう）をサブタンク（sub tank）で点検（てんけん）したところ、不足（ふそく）していたので、規定（きてい）のレベル（level）まで補充（ほじゅう）した。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q94",
    "japanese": "オイル・フィルタ（oil filter）は、エレメント（element）の汚（よご）れや、取（と）り付（つ）け部（ぶ）からのオイル（oil）漏（も）れについて点検（てんけん）する。",
    "indonesian": "Soal Regulasi SSW (Terjemahan akan ditambahkan jika tersedia)",
    "english": "SSW Regulation Question (Translation will be added if available)",
    "options": [
      "O",
      "X"
    ],
    "optionsIndonesian": [
      "Benar",
      "Salah"
    ],
    "optionsEnglish": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q95",
    "japanese": "シリンダ・ヘッドの取（と）り外（はず）しについて、注意（ちゅうい）することは、どれか。",
    "indonesian": "Saat melepas cylinder head, apa yang harus diperhatikan?",
    "english": "When removing the cylinder head, what should be noted?",
    "options": [
      "シリンダ・ヘッド・ガスケットは、交換（こうかん）しないので取（と）り外（はず）しに注意（ちゅうい）する。",
      "シリンダ・ヘッド・ボルトは、長（なが）さや太（ふと）さが違（ちが）うものがあるので、組（く）み立（た）て時（じ）に分（わ）かるように注意（ちゅうい）する。"
    ],
    "optionsIndonesian": [
      "Karena cylinder head gasket tidak diganti, berhati-hatilah saat melepasnya.",
      "Karena panjang dan ketebalan baut cylinder head berbeda-beda, berhati-hatilah agar dapat dibedakan saat perakitan."
    ],
    "optionsEnglish": [
      "Since the cylinder head gasket is not replaced, be careful when removing it.",
      "Since the length and thickness of the cylinder head bolts differ, be careful so they can be identified during assembly."
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q96",
    "japanese": "シリンダ・ヘッドの取（と）り付（つ）けについて、注意（ちゅうい）することは、どれか。",
    "indonesian": "Saat memasang cylinder head, apa yang harus diperhatikan?",
    "english": "When installing the cylinder head, what should be noted?",
    "options": [
      "シリンダ・ブロックのボルト穴（あな）にたまった冷却（れいきゃく）水（すい）やオイルなどは、こぼさないように注意（ちゅうい）する。",
      "シリンダ・ヘッド・ボルトのねじ部（ぶ）に薄（うす）くオイルを塗（ぬ）る。"
    ],
    "optionsIndonesian": [
      "Berhati-hatilah agar air pendingin atau oli yang terkumpul di lubang baut blok silinder tidak tumpah.",
      "Oleskan sedikit oli pada bagian berulir dari baut cylinder head."
    ],
    "optionsEnglish": [
      "Be careful not to spill cooling water or oil that has accumulated in the bolt holes of the cylinder block.",
      "Apply a thin layer of oil to the threaded portion of the cylinder head bolts."
    ],
    "correctAnswer": 1,
    "explanationJp": "",
    "explanationId": "",
    "explanationEn": ""
  },
  {
    "id": "q97",
    "japanese": "シリンダ・ヘッド・ボルトを締（し）め付（つ）ける正（ただ）しい順番（じゅんばん）は、どれか。",
    "indonesian": "Urutan yang benar untuk mengencangkan baut cylinder head adalah?",
    "english": "Which is the correct order to tighten the cylinder head bolts?",
    "options": [
      "A",
      "B"
    ],
    "optionsIndonesian": [
      "Pilihan A",
      "Pilihan B"
    ],
    "optionsEnglish": [
      "Option A",
      "Option B"
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
    "japanese": "バッテリの端子（たんし）電圧（でんあつ）の測定（そくてい）の準備（じゅんび）について、正（ただ）しいものはどれか。",
    "indonesian": "Persiapan yang benar untuk mengukur tegangan terminal baterai adalah?",
    "english": "Which is the correct preparation for measuring battery terminal voltage?",
    "options": [
      "プローブの赤色（あかいろ）は、測定（そくてい）用（よう）ターミナルの「＋」に取（と）り付（つ）ける。",
      "プローブの赤色（あかいろ）は、測定（そくてい）用（よう）ターミナルの「－」に取（と）り付（つ）ける。"
    ],
    "optionsIndonesian": [
      "Probe merah dipasang ke terminal ukur '+'.",
      "Probe merah dipasang ke terminal ukur '-'."
    ],
    "optionsEnglish": [
      "The red probe is attached to the '+' measuring terminal.",
      "The red probe is attached to the '-' measuring terminal."
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
      "A",
      "B"
    ],
    "optionsIndonesian": [
      "Pilihan A",
      "Pilihan B"
    ],
    "optionsEnglish": [
      "Option A",
      "Option B"
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
    "japanese": "バルブ・ステムの外（そと）径（径）は、どこか。",
    "indonesian": "Di manakah diameter luar valve stem?",
    "english": "Where is the outer diameter of the valve stem?",
    "options": [
      "A",
      "B"
    ],
    "optionsIndonesian": [
      "Pilihan A",
      "Pilihan B"
    ],
    "optionsEnglish": [
      "Option A",
      "Option B"
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
    "japanese": "マイクロメータによるバルブ・ステムの外（そと）径（径）の測定（そくてい）値（ち）について、正（ただ）しいものは、どれか。",
    "indonesian": "Nilai pengukuran diameter luar valve stem dengan mikrometer yang benar adalah?",
    "english": "Which is the correct measurement of the valve stem's outer diameter using a micrometer?",
    "options": [
      "5.85mm",
      "5.35mm"
    ],
    "optionsIndonesian": [
      "5.85mm",
      "5.35mm"
    ],
    "optionsEnglish": [
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
    "japanese": "ノギス測定（そくてい）の結果（けっか）はどうですか？",
    "indonesian": "Bagaimana hasil pengukuran jangka sorong?",
    "english": "What is the result of the vernier caliper measurement?",
    "options": [
      "09.65mm",
      "11.65mm"
    ],
    "optionsIndonesian": [
      "09.65mm",
      "11.65mm"
    ],
    "optionsEnglish": [
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
