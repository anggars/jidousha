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

export const ALL_QUESTIONS: QuestionType[] = [
  {
    "id": "q1",
    "japanese": "ガソリンエンジンの燃料（ねんりょう）は、軽油（けいゆ）です。",
    "indonesian": "Bahan bakar mesin bensin adalah solar (light oil).",
    "english": "The fuel for a gasoline engine is light oil (diesel).",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "ガソリンエンジンの燃料（ねんりょう）はガソリンです。軽油（けいゆ）はディーゼルエンジンの燃料（ねんりょう）です。",
    "explanationId": "Bahan bakar mesin bensin adalah bensin. Solar (light oil) adalah bahan bakar untuk mesin diesel.",
    "explanationEn": "The fuel for a gasoline engine is gasoline. Light oil (diesel) is the fuel for diesel engines."
  },
  {
    "id": "q2",
    "japanese": "これはダイヤルゲージです。",
    "indonesian": "Ini adalah dial gauge.",
    "english": "This is a dial gauge.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/2.png",
    "explanationJp": "正解（せいかい）です。画像（がぞう）の測定（そくてい）器（き）はダイヤルゲージです。",
    "explanationId": "Benar. Alat ukur pada gambar adalah dial gauge.",
    "explanationEn": "Correct. The measuring instrument in the image is a dial gauge."
  },
  {
    "id": "q3",
    "japanese": "ブレーキライニングは、交換（こうかん）部品（ぶひん）です。",
    "indonesian": "Brake lining (kampas rem) adalah suku cadang yang diganti (replacement part).",
    "english": "The brake lining is a replacement part.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。ブレーキライニングは摩耗（まもう）するため、定期（ていき）的（てき）な交換（こうかん）が必要（ひつよう）です。",
    "explanationId": "Benar. Kampas rem mengalami keausan sehingga memerlukan penggantian berkala.",
    "explanationEn": "Correct. The brake lining wears out and requires periodic replacement."
  },
  {
    "id": "q4",
    "japanese": "冷却（れいきゃく）装置（そうち）のラジエータは、ファンで温（あたた）めます。",
    "indonesian": "Radiator pada sistem pendingin dihangatkan dengan kipas.",
    "english": "The radiator of the cooling system is warmed by a fan.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "ラジエータはファンで冷却（れいきゃく）液（えき）を冷（ひ）やすためのものです。温（あたた）めるのではありません。",
    "explanationId": "Radiator berfungsi untuk mendinginkan cairan pendingin menggunakan kipas, bukan untuk menghangatkan.",
    "explanationEn": "The radiator cools the coolant using a fan; it does not warm it."
  },
  {
    "id": "q5",
    "japanese": "Aは、シックネス・ゲージで長（なが）さ、外（そと）径（径）、内径（ないけい）などの測定（そくてい）に使用（しよう）する。",
    "indonesian": "A adalah thickness gauge (feeler gauge) yang digunakan untuk mengukur panjang, diameter luar, dan diameter dalam.",
    "english": "A is a thickness gauge (feeler gauge) used for measuring length, outer diameter, and inner diameter.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "imageUrl": "/images/5.png",
    "explanationJp": "画像（がぞう）Aはシックネスゲージ（隙間（すきま）ゲージ）であり、微小（びしょう）な隙間（すきま）を測定（そくてい）するためのものです。長（なが）さや外（そと）径（径）の測定（そくてい）にはノギスやマイクロメータを使用（しよう）します。",
    "explanationId": "Gambar A adalah feeler gauge (thickness gauge), yang digunakan untuk mengukur celah kecil. Panjang dan diameter diukur menggunakan vernier caliper atau mikrometer.",
    "explanationEn": "Image A shows a feeler gauge, used for measuring small clearances. Lengths and diameters are measured with a vernier caliper or micrometer."
  },
  {
    "id": "q6",
    "japanese": "タイヤ・ゲージ（tire pressure gauge）で、タイヤのくうきあつを測定（そくてい）します。",
    "indonesian": "Gunakan tire pressure gauge untuk mengukur tekanan udara ban.",
    "english": "Use a tire pressure gauge to measure the tire's air pressure.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。タイヤゲージはタイヤの空気圧（くうきあつ）を測定（そくてい）する専用（せんよう）工具（こうぐ）です。",
    "explanationId": "Benar. Tire pressure gauge adalah alat khusus untuk mengukur tekanan udara ban.",
    "explanationEn": "Correct. A tire pressure gauge is a specialized tool for measuring tire air pressure."
  },
  {
    "id": "q7",
    "japanese": "次（つぎ）のものはエンジンオイルの粘（ねば）度（たび）を示（しめ）しています：SAE 5W-30, 10W-30, 10W-40",
    "indonesian": "Berikut ini adalah yang menunjukkan kekentalan oli mesin: SAE 5W-30, 10W-30, 10W-40.",
    "english": "The following indicate engine oil viscosity: SAE 5W-30, 10W-30, 10W-40.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。SAE番号（ばんごう）はエンジンオイルの粘（ねば）度（たび）グレードを示（しめ）しています。",
    "explanationId": "Benar. Angka SAE menunjukkan tingkat kekentalan (viskositas) oli mesin.",
    "explanationEn": "Correct. The SAE numbers indicate the viscosity grade of the engine oil."
  },
  {
    "id": "q8",
    "japanese": "オイル・フィルタ（oil filter）は、交換（こうかん）部品（ぶひん）です。",
    "indonesian": "Oil filter adalah suku cadang yang diganti.",
    "english": "The oil filter is a replacement part.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。オイルフィルタは汚（よご）れを取（と）り除（のぞ）くため、定期（ていき）的（てき）な交換（こうかん）が必要（ひつよう）です。",
    "explanationId": "Benar. Filter oli menyaring kotoran dan harus diganti secara berkala.",
    "explanationEn": "Correct. The oil filter removes contaminants and must be replaced periodically."
  },
  {
    "id": "q9",
    "japanese": "オイルフィルターの中（なか）にオイルエレメントが入（はい）っています。",
    "indonesian": "Di dalam filter oli terdapat elemen oli.",
    "english": "Inside the oil filter, there is an oil element.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。オイルフィルターの内部（ないぶ）には、実際（じっさい）に汚（よご）れをろ過（か）するオイルエレメントが含（ふく）まれています。",
    "explanationId": "Benar. Di dalam filter oli terdapat elemen oli yang bertugas menyaring kotoran.",
    "explanationEn": "Correct. Inside the oil filter is the oil element that actually filters the contaminants."
  },
  {
    "id": "q10",
    "japanese": "スタートボタン（またはスタータ）はバッテリーに充電（じゅうでん）します。",
    "indonesian": "Tombol start (atau starter) mengisi daya baterai.",
    "english": "The start button (or starter) charges the battery.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "スタータ（セルモーター）はエンジンを始動（しどう）させるものであり、充電（じゅうでん）はしません。充電（じゅうでん）を行（おこな）うのはオルタネーターです。",
    "explanationId": "Starter (motor starter) berfungsi untuk menghidupkan mesin, bukan untuk mengisi daya. Pengisian daya dilakukan oleh alternator.",
    "explanationEn": "The starter cranks the engine to start it, it does not charge the battery. The alternator is responsible for charging."
  },
  {
    "id": "q11",
    "japanese": "タイミングライトは、点火（てんか）時期（じき）を点検（てんけん）・調整（ちょうせい）するために使用（しよう）します。",
    "indonesian": "Timing light digunakan untuk memeriksa dan menyetel waktu pengapian.",
    "english": "A timing light is used to inspect and adjust the ignition timing.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。タイミングライトはエンジンの点火（てんか）時期（じき）を確認（かくにん）するための測定（そくてい）器（き）です。",
    "explanationId": "Benar. Timing light adalah instrumen yang digunakan untuk memeriksa waktu pengapian (ignition timing) mesin.",
    "explanationEn": "Correct. A timing light is an instrument used to check the engine's ignition timing."
  },
  {
    "id": "q12",
    "japanese": "これはシリンダーブロックです。",
    "indonesian": "Ini adalah blok silinder.",
    "english": "This is a cylinder block.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/12.png",
    "explanationJp": "正解（せいかい）です。画像（がぞう）はエンジンの主要（しゅよう）構造（こうぞう）であるシリンダーブロックを示（しめ）しています。",
    "explanationId": "Benar. Gambar tersebut menunjukkan blok silinder, yang merupakan struktur utama mesin.",
    "explanationEn": "Correct. The image shows the cylinder block, which is the main structure of the engine."
  },
  {
    "id": "q13",
    "japanese": "Aはオルタネーターである。",
    "indonesian": "A adalah alternator.",
    "english": "A is an alternator.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/13.png",
    "explanationJp": "正解（せいかい）です。画像（がぞう）Aは発電（はつでん）機（き）であるオルタネーターを示（しめ）しています。",
    "explanationId": "Benar. Gambar A menunjukkan alternator, yang berfungsi sebagai pembangkit listrik kendaraan.",
    "explanationEn": "Correct. Image A shows the alternator, which acts as the vehicle's electrical generator."
  },
  {
    "id": "q14",
    "japanese": "ブレーキキャリパーはサンドペーパーできれいにします。",
    "indonesian": "Brake caliper dibersihkan dengan amplas (sandpaper).",
    "english": "The brake caliper is cleaned with sandpaper.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "キャリパーの錆（さび）や汚（よご）れを落（お）とす際（さい）に、サンドペーパーやワイヤーブラシを使用（しよう）することがあります。（※シールの溝（みぞ）などは専用（せんよう）ツールで慎重（しんちょう）に清掃（せいそう）します）",
    "explanationId": "Amplas (sandpaper) atau sikat kawat sering digunakan untuk membersihkan karat dan kotoran pada kaliper rem.",
    "explanationEn": "Sandpaper or a wire brush is often used to clean rust and dirt from the brake caliper."
  },
  {
    "id": "q15",
    "japanese": "エアガン（エアブロー）でグリースを圧（圧）送（おく）する。",
    "indonesian": "Gunakan air gun untuk menekan gemuk (grease).",
    "english": "Use an air gun to pump grease.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "エアガンは圧縮（あっしゅく）空気（くうき）でゴミを吹（ふ）き飛（と）ばす工具（こうぐ）です。グリースを圧（圧）送（おく）するにはグリースガンを使用（しよう）します。",
    "explanationId": "Air gun digunakan untuk meniup debu dengan udara terkompresi. Untuk menekan gemuk, gunakan grease gun.",
    "explanationEn": "An air gun blows compressed air to remove dust. A grease gun is used to pump grease."
  },
  {
    "id": "q16",
    "japanese": "図（ず）は、燃焼（ねんしょう）室（しつ）の冷却（れいきゃく）用（よう）のウォータ・ジャケットである。",
    "indonesian": "Gambar menunjukkan water jacket untuk pendinginan ruang bakar.",
    "english": "The figure shows a water jacket for cooling the combustion chamber.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "imageUrl": "/images/16.png",
    "explanationJp": "画像（がぞう）はウォータージャケットではなく、他（た）の部品（ぶひん）（ガスケット等（とう））を示（しめ）しています。",
    "explanationId": "Gambar tersebut bukan menunjukkan water jacket, melainkan komponen lain (seperti gasket).",
    "explanationEn": "The image does not show a water jacket; it shows another component (such as a gasket)."
  },
  {
    "id": "q17",
    "japanese": "Aは、マイクロメータで、隙間（すきま）の測定（そくてい）ができる。",
    "indonesian": "A adalah mikrometer, yang dapat digunakan untuk mengukur celah.",
    "english": "A is a micrometer, which can be used to measure clearances.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "imageUrl": "/images/17.png",
    "explanationJp": "マイクロメータは外（そと）径（径）や厚（あつ）さを測定（そくてい）するものであり、隙間（すきま）の測定（そくてい）にはシックネスゲージを使用（しよう）します。また、画像（がぞう）Aの工具（こうぐ）がマイクロメータでない可能（かのう）性（せい）もあります。",
    "explanationId": "Mikrometer digunakan untuk mengukur diameter luar atau ketebalan. Untuk celah, gunakan feeler gauge.",
    "explanationEn": "A micrometer measures outside diameters and thickness. A feeler gauge is used to measure clearances."
  },
  {
    "id": "q18",
    "japanese": "ファン・ベルトの摩耗（まもう）や損傷（そんしょう）は、目視（もくし）や手（て）で触（さわ）って点検（てんけん）する。",
    "indonesian": "Keausan dan kerusakan fan belt diperiksa secara visual dan dengan rabaan tangan.",
    "english": "Wear and damage to the fan belt are inspected visually and by touching it with hands.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/18.png",
    "explanationJp": "正解（せいかい）です。ベルトのひび割（わ）れや摩耗（まもう）は、目視（もくし）と手触（てざわ）りで確認（かくにん）します。",
    "explanationId": "Benar. Keretakan dan keausan pada belt diperiksa dengan melihat langsung dan merabanya.",
    "explanationEn": "Correct. Belt cracks and wear are checked by direct visual inspection and touching."
  },
  {
    "id": "q19",
    "japanese": "サーキット・テスタは、電圧（でんあつ）、電流（でんりゅう）、抵抗（ていこう）を測定（そくてい）するときに使用（しよう）する。",
    "indonesian": "Circuit tester (multimeter) digunakan untuk mengukur tegangan, arus, dan hambatan.",
    "english": "A circuit tester (multimeter) is used to measure voltage, current, and resistance.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。サーキットテスタ（マルチメータ）は電圧（でんあつ）、電流（でんりゅう）、抵抗（ていこう）の3つを測定（そくてい）できる基本（きほん）ツールです。",
    "explanationId": "Benar. Circuit tester (multimeter) adalah alat dasar yang bisa mengukur ketiga besaran listrik tersebut.",
    "explanationEn": "Correct. A circuit tester (multimeter) is a basic tool capable of measuring these three electrical values."
  },
  {
    "id": "q20",
    "japanese": "ブレーキドラムは交換（こうかん）部品（ぶひん）です。",
    "indonesian": "Brake drum (tromol rem) adalah suku cadang yang diganti.",
    "english": "The brake drum is a replacement part.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。ブレーキドラムは使用（しよう）に伴（ともな）い摩耗（まもう）するため、限界（げんかい）値（ち）を超（こ）えたら交換（こうかん）が必要（ひつよう）です。",
    "explanationId": "Benar. Tromol rem akan aus seiring pemakaian, dan harus diganti jika melebihi batas toleransi.",
    "explanationEn": "Correct. The brake drum wears out with use and must be replaced when it exceeds the tolerance limit."
  },
  {
    "id": "q21",
    "japanese": "レシプロ・エンジンは4サイクルと2サイクルがあります。",
    "indonesian": "Reciprocating engine memiliki tipe 4-langkah dan 2-langkah.",
    "english": "Reciprocating engines come in 4-stroke and 2-stroke types.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。レシプロ（往復（おうふく）動（どう））エンジンには4ストローク（サイクル）と2ストロークの方式（ほうしき）が存在（そんざい）します。",
    "explanationId": "Benar. Mesin reciprocating (torak bolak-balik) memiliki tipe 4-langkah dan 2-langkah.",
    "explanationEn": "Correct. Reciprocating engines exist in both 4-stroke and 2-stroke configurations."
  },
  {
    "id": "q22",
    "japanese": "レシプロ・エンジン（4ストローク）は、4工程（こうてい）で1サイクルを完了（かんりょう）します。",
    "indonesian": "Mesin reciprocating (4-langkah) menyelesaikan 1 siklus dalam 4 langkah.",
    "english": "A reciprocating engine (4-stroke) completes 1 cycle in 4 strokes.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。吸入（きゅうにゅう）・圧縮（あっしゅく）・燃焼（ねんしょう）（膨張（ぼうちょう））・排気（はいき）の4工程（こうてい）で1サイクルが完了（かんりょう）します。",
    "explanationId": "Benar. 1 siklus diselesaikan dalam 4 langkah: Hisap, Kompresi, Usaha (Pembakaran), dan Buang.",
    "explanationEn": "Correct. 1 cycle is completed in 4 strokes: Intake, Compression, Power (Combustion), and Exhaust."
  },
  {
    "id": "q23",
    "japanese": "ブレーキ・キャリパはブレーキドラムに使（つか）われている。",
    "indonesian": "Brake caliper digunakan pada rem tromol.",
    "english": "The brake caliper is used in a drum brake.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "ブレーキキャリパは「ディスクブレーキ」の構成（こうせい）部品（ぶひん）です。ドラムブレーキにはホイールシリンダやブレーキシューが使（つか）われます。",
    "explanationId": "Brake caliper adalah komponen dari 'rem cakram' (disc brake). Rem tromol menggunakan wheel cylinder dan sepatu rem (brake shoe).",
    "explanationEn": "The brake caliper is a component of a 'disc brake'. Drum brakes use wheel cylinders and brake shoes."
  },
  {
    "id": "q24",
    "japanese": "トーインゲージ（toe-in gauge）は、バルブの隙間（すきま）を測定（そくてい）するものである。",
    "indonesian": "Toe-in gauge digunakan untuk mengukur celah katup.",
    "english": "A toe-in gauge is used to measure valve clearance.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "トーインゲージはホイールアライメント（トーイン）を測定（そくてい）するものです。バルブクリアランスはシックネスゲージで測定（そくてい）します。",
    "explanationId": "Toe-in gauge digunakan untuk mengukur wheel alignment (toe-in). Celah katup diukur dengan feeler gauge (thickness gauge).",
    "explanationEn": "A toe-in gauge measures wheel alignment (toe-in). Valve clearance is measured with a feeler gauge."
  },
  {
    "id": "q25",
    "japanese": "これはラジエータです。",
    "indonesian": "Ini adalah radiator.",
    "english": "This is a radiator.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/25.png",
    "explanationJp": "正解（せいかい）です。画像（がぞう）は冷却（れいきゃく）液（えき）の熱（ねつ）を放熱（ほうねつ）するためのラジエータです。",
    "explanationId": "Benar. Gambar tersebut adalah radiator, yang berfungsi melepaskan panas cairan pendingin.",
    "explanationEn": "Correct. The image shows a radiator, which dissipates the heat of the coolant."
  },
  {
    "id": "q26",
    "japanese": "これはおふせっと・れんち（めがねレンチ）です。",
    "indonesian": "Ini adalah offset wrench (kunci ring).",
    "english": "This is an offset wrench (box-end wrench).",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/26.png",
    "explanationJp": "正解（せいかい）です。画像（がぞう）はオフセットレンチ（めがねレンチ）を示（しめ）しています。",
    "explanationId": "Benar. Gambar menunjukkan offset wrench atau sering disebut kunci ring.",
    "explanationEn": "Correct. The image shows an offset wrench, also known as a box-end wrench."
  },
  {
    "id": "q27",
    "japanese": "車両（しゃりょう）をジャッキアップする際（さい）、前輪（ぜんりん）に輪（わ）止（と）め（ガンジァル）を設置（せっち）しているイラスト。",
    "indonesian": "Ilustrasi mengganjal roda depan saat mendongkrak kendaraan.",
    "english": "An illustration of placing a wheel chock on the front wheel when jacking up the vehicle.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/27.png",
    "explanationJp": "正解（せいかい）です。車両（しゃりょう）をジャッキアップする際（さい）は、安全（あんぜん）のために必（かなら）ず輪（わ）止（と）め（タイヤストッパー）を使用（しよう）します。",
    "explanationId": "Benar. Saat mendongkrak kendaraan, ganjal roda (wheel chock) wajib dipasang demi keselamatan.",
    "explanationEn": "Correct. When jacking up a vehicle, wheel chocks must always be used for safety."
  },
  {
    "id": "q28",
    "japanese": "グロープラグはガソリンエンジンに使（つか）われている。",
    "indonesian": "Glow plug (busi pijar) digunakan pada mesin bensin.",
    "english": "Glow plugs are used in gasoline engines.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "グロープラグはディーゼルエンジンの始動（しどう）補助（ほじょ）装置（そうち）です。ガソリンエンジンにはスパークプラグが使（つか）われます。",
    "explanationId": "Glow plug (busi pijar) digunakan untuk membantu menghidupkan mesin diesel. Mesin bensin menggunakan busi (spark plug).",
    "explanationEn": "Glow plugs are a starting aid for diesel engines. Gasoline engines use spark plugs."
  },
  {
    "id": "q29",
    "japanese": "スパークプラグ（spark plug）はガソリンエンジンに使（つか）われている。",
    "indonesian": "Spark plug (busi) digunakan pada mesin bensin.",
    "english": "Spark plugs are used in gasoline engines.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。スパークプラグはガソリンエンジンで混合（こんごう）気（き）に点火（てんか）するための部品（ぶひん）です。",
    "explanationId": "Benar. Busi (spark plug) adalah komponen pada mesin bensin untuk memercikkan api dan membakar campuran bahan bakar.",
    "explanationEn": "Correct. Spark plugs are components in gasoline engines that ignite the air-fuel mixture."
  },
  {
    "id": "q30",
    "japanese": "ブレーキ液（えき）の量（りょう）は、目視（もくし）により外部（がいぶ）からレベルの基準（きじゅん）線（せん）（MAX/MIN）を確認（かくにん）する。",
    "indonesian": "Ketinggian minyak rem (pada reservoir tank) diperiksa secara visual dari luar sesuai garis batas level (MAX/MIN).",
    "english": "The brake fluid level (in the reservoir tank) is visually checked from the outside against the reference lines (MAX/MIN).",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。ブレーキ液（えき）の量（りょう）はタンク外部（がいぶ）からMAXとMINの間（ま）にあるかを目視（もくし）で確認（かくにん）します。",
    "explanationId": "Benar. Ketinggian minyak rem selalu diperiksa dari luar tangki transparan, memastikannya berada di antara garis MAX dan MIN.",
    "explanationEn": "Correct. The brake fluid level is checked visually from outside the tank to ensure it's between MAX and MIN."
  },
  {
    "id": "q31",
    "japanese": "エンジン警告（けいこく）灯（とう）は、エンジンシステムに異常（いじょう）が発生（はっせい）したことを検出（けんしゅつ）するためのものである。",
    "indonesian": "Lampu check engine berfungsi untuk mendeteksi ketidaknormalan pada sistem mesin.",
    "english": "The engine warning light (check engine lamp) detects abnormalities occurring in the engine system.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。エンジン制御（せいぎょ）システム（センサー等（とう））に異常（いじょう）があると警告（けいこく）灯（とう）が点灯（てんとう）します。",
    "explanationId": "Benar. Lampu peringatan (check engine) menyala jika ECU mendeteksi adanya malfungsi pada sistem kontrol mesin.",
    "explanationEn": "Correct. The warning light illuminates if the ECU detects a malfunction in the engine control system."
  },
  {
    "id": "q32",
    "japanese": "マスタシリンダを取（と）り外（はず）す際（さい）、ハンマで叩（たた）いて取（と）り外（はず）す。",
    "indonesian": "Saat melepas master silinder, pukul menggunakan palu untuk melepaskannya.",
    "english": "When removing the master cylinder, strike it with a hammer to remove it.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "精密（せいみつ）部品（ぶひん）であるマスタシリンダをハンマで叩（たた）いてはいけません。損傷（そんしょう）の原因（げんいん）となります。",
    "explanationId": "Komponen presisi seperti master silinder tidak boleh dilepas dengan cara dipukul palu karena akan merusaknya.",
    "explanationEn": "Precision parts like the master cylinder must not be struck with a hammer, as this will cause damage."
  },
  {
    "id": "q33",
    "japanese": "ディスクホイールの材質（ざいしつ）は、主（おも）にステンレスまたはアルミニウムである。",
    "indonesian": "Material disc wheel utamanya adalah stainless steel atau aluminium.",
    "english": "The materials for disc wheels are primarily stainless steel or aluminum.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "ディスクホイールの主（おも）な材質（ざいしつ）は「スチール（鉄（てつ））」または「アルミニウム合金（ごうきん）」です。ステンレスは一般（いっぱん）的（てき）ではありません。",
    "explanationId": "Material utama velg mobil (disc wheel) adalah 'baja (steel)' atau 'paduan aluminium'. Stainless steel sangat jarang digunakan.",
    "explanationEn": "The main materials for disc wheels are 'steel' or 'aluminum alloy'. Stainless steel is not commonly used."
  },
  {
    "id": "q34",
    "japanese": "ノギスを用（もち）いた測定（そくてい）結果（けっか）の読（よ）み取（と）りに関（かん）する画像（がぞう）問題（もんだい）。",
    "indonesian": "Soal gambar mengenai pembacaan hasil pengukuran jangka sorong.",
    "english": "An image question regarding reading a measurement result from a vernier caliper.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/34.png",
    "explanationJp": "ノギスの本（ほん）尺（しゃく）と副（ふく）尺（しゃく）の目盛（めも）りを正確（せいかく）に読（よ）み取（と）るスキルは基本（きほん）作業（さぎょう）として必須（ひっす）です。",
    "explanationId": "Kemampuan membaca skala utama dan nonius pada jangka sorong sangat wajib dikuasai untuk pekerjaan dasar.",
    "explanationEn": "The ability to accurately read the main and vernier scales on a caliper is essential for basic work."
  },
  {
    "id": "q35",
    "japanese": "スパナ（オープンエンドレンチ）を二（に）本（ほん）つなぎ合（あ）わせて（延長（えんちょう）して）使用（しよう）することは、正（ただ）しい使用（しよう）方法（ほうほう）である。",
    "indonesian": "Menyambungkan dua buah spanner (kunci pas) untuk menambah tuas merupakan cara penggunaan yang benar.",
    "english": "Connecting two spanners (open-end wrenches) to extend leverage is the correct way to use them.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "工具（こうぐ）をつなぎ合（あ）わせて延長（えんちょう）使用（しよう）することは、工具（こうぐ）の破損（はそん）や怪我（けが）の原因（げんいん）となるため禁止（きんし）されています。",
    "explanationId": "Menyambung kunci (piping/double wrenching) dilarang karena bisa menyebabkan kunci patah dan kecelakaan kerja.",
    "explanationEn": "Connecting tools to extend leverage is prohibited because it can cause tool breakage and injury."
  },
  {
    "id": "q36",
    "japanese": "タイヤの溝（みぞ）の深（ふか）は、デプス・ゲージなどを用（もち）いて2カ所（しょ）だけ測定（そくてい）すれば十分（じゅうぶん）である。",
    "indonesian": "Kedalaman alur ban cukup diukur pada 2 titik saja menggunakan depth gauge.",
    "english": "It is sufficient to measure the tire groove depth at only two locations using a depth gauge.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "imageUrl": "/images/36.png",
    "explanationJp": "タイヤの溝（みぞ）の深（ふか）さは、偏（へん）摩耗（まもう）を確認（かくにん）するためにも複数（ふくすう）箇所（かしょ）（円周（えんしゅう）上（じょう）の均等（きんとう）な場所（ばしょ））で測定（そくてい）する必要（ひつよう）があります。",
    "explanationId": "Kedalaman alur ban harus diukur di beberapa titik merata untuk mendeteksi keausan tidak rata (uneven wear).",
    "explanationEn": "Tire groove depth must be measured at multiple evenly distributed locations to detect uneven wear."
  },
  {
    "id": "q37",
    "japanese": "これはタイヤのトレッド・パターン（tread pattern）のリブ（rib）型（がた）である。",
    "indonesian": "Ini adalah tipe rib dari pola tapak ban.",
    "english": "This is a rib-type tire tread pattern.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/37.png",
    "explanationJp": "正解（せいかい）です。進行（しんこう）方向（ほうこう）に平行（へいこう）な直線（ちょくせん）状（じょう）の溝（みぞ）を持（も）つパターンは「リブ型（がた）」と呼（よ）ばれます。",
    "explanationId": "Benar. Pola tapak dengan alur lurus sejajar arah rotasi disebut tipe 'rib'.",
    "explanationEn": "Correct. A tread pattern with straight grooves parallel to the direction of rotation is called a 'rib' type."
  },
  {
    "id": "q38",
    "japanese": "バイス（万力（まんりき））のハンドルを締（し）め付（つ）ける際（さい）、ハンマ（パル）で叩（たた）いて強（つよ）く締（し）め付（つ）ける。",
    "indonesian": "Saat mengencangkan tuas ragum (vise), pukul menggunakan palu agar lebih kuat.",
    "english": "When tightening the handle of a vise, strike it with a hammer to tighten it strongly.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "imageUrl": "/images/38.png",
    "explanationJp": "バイスのハンドルをハンマで叩（たた）くと、バイス自体（じたい）が破損（はそん）する恐（おそ）れがあるため禁止（きんし）です。手（て）でしっかりと締（し）めます。",
    "explanationId": "Dilarang memukul tuas ragum dengan palu karena bisa mematahkan tuas atau merusak ulir. Kencangkan dengan tangan saja.",
    "explanationEn": "Striking the vise handle with a hammer is prohibited as it can damage the vise. Tighten it firmly by hand."
  },
  {
    "id": "q39",
    "japanese": "ボルトやナットを規定（きてい）のトルクで締（し）め付（つ）けることができる工具（こうぐ）は、トルク・レンチである。",
    "indonesian": "Alat yang dapat mengencangkan baut dan mur sesuai torsi standar adalah torque wrench (kunci momen).",
    "english": "The tool that can tighten bolts and nuts to a specified torque is a torque wrench.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解（せいかい）です。トルクレンチは指定（してい）されたトルク値（ち）で正確（せいかく）に締（し）め付（つ）けるための専用（せんよう）工具（こうぐ）です。",
    "explanationId": "Benar. Kunci momen (torque wrench) adalah alat presisi untuk mengencangkan baut sesuai torsi spesifikasi pabrik.",
    "explanationEn": "Correct. A torque wrench is a precision tool for tightening bolts accurately to a specified torque value."
  },
  {
    "id": "q40",
    "japanese": "サーキットテスタによる12Vバッテリの端子（たんし）電圧（でんあつ）の測定（そくてい）において、正（ただ）しい準備（じゅんび）作業（さぎょう）はどれですか？",
    "indonesian": "Pada pengukuran tegangan terminal baterai 12V menggunakan circuit tester, persiapan manakah yang benar?",
    "english": "When measuring the terminal voltage of a 12V battery with a circuit tester, which is the correct preparatory step?",
    "options": [
      "プローブの赤色（あかいろ）（＋）を、バッテリの「＋」端子（たんし）に取（と）り付（つ）ける。",
      "プローブの赤色（あかいろ）（＋）を、バッテリの「ー」端子（たんし）に取（と）り付（つ）ける。"
    ],
    "optionsIndonesian": [
      "Pasang probe merah (+) ke terminal '+' baterai.",
      "Pasang probe merah (+) ke terminal '-' baterai."
    ],
    "optionsEnglish": [
      "Attach the red probe (+) to the battery's '+' terminal.",
      "Attach the red probe (+) to the battery's '-' terminal."
    ],
    "optionImages": [
      "/images/40a.png",
      "/images/40b.png"
    ],
    "correctAnswer": 0,
    "explanationJp": "電圧（でんあつ）測定（そくてい）の基本（きほん）として、赤色（あかいろ）のプローブ（＋）はバッテリのプラス端子（たんし）に、黒色（こくしょく）はマイナス端子（たんし）に接続（せつぞく）します。",
    "explanationId": "Aturan dasar pengukuran tegangan DC: probe merah (+) selalu dihubungkan ke terminal positif, probe hitam (-) ke negatif.",
    "explanationEn": "As a basic rule of voltage measurement, the red probe (+) goes to the positive terminal, and black (-) to the negative."
  },
  {
    "id": "q41",
    "japanese": "水温（すいおん）センサ（Water temperature sensor）の抵抗（ていこう）値（ち）を測定（そくてい）する際（さい）、回路（かいろ）計（けい）の適切（てきせつ）な測定（そくてい）レンジ（倍率（ばいりつ））を選（えら）びなさい。",
    "indonesian": "Pilih rentang ukur (pengali) yang tepat pada tester saat mengukur nilai hambatan water temperature sensor.",
    "english": "Select the appropriate measurement range (multiplier) on the tester when measuring the resistance value of a water temperature sensor.",
    "options": [
      "1x",
      "100x"
    ],
    "optionsIndonesian": [
      "1x",
      "100x"
    ],
    "optionsEnglish": [
      "1x",
      "100x"
    ],
    "correctAnswer": 1,
    "explanationJp": "水温（すいおん）センサの抵抗（ていこう）値（ち）は数（すう）kΩになることが多（おお）いため、x100やx1kレンジを使用（しよう）するのが適切（てきせつ）です。",
    "explanationId": "Nilai hambatan sensor suhu air biasanya berada di kisaran beberapa kilo-ohm (kΩ), sehingga pengali x100 lebih tepat digunakan.",
    "explanationEn": "Water temperature sensors typically have resistance in the kilo-ohm range, making the x100 range appropriate."
  },
  {
    "id": "q42",
    "japanese": "前（ぜん）問（とい）の設定（せってい）（x100レンジ）で水温（すいおん）センサを測定（そくてい）した際（さい）、アナログテスタの指針（ししん）が「20」を指（さ）していました。実際（じっさい）の抵抗（ていこう）値（ち）（Ω）を求（もと）めなさい。",
    "indonesian": "Saat mengukur water temperature sensor dengan pengaturan sebelumnya (skala x100), jarum tester analog menunjukkan '20'. Tentukan nilai hambatan aktual (Ω).",
    "english": "When measuring the water temperature sensor with the previous setting (x100 range), the analog tester's needle pointed to '20'. Find the actual resistance value (Ω).",
    "options": [
      "20 Ω",
      "2000 Ω"
    ],
    "optionsIndonesian": [
      "20 Ω",
      "2000 Ω"
    ],
    "optionsEnglish": [
      "20 Ω",
      "2000 Ω"
    ],
    "correctAnswer": 1,
    "imageUrl": "/images/42.png",
    "explanationJp": "指示（しじ）値（ち）20に対（たい）して、レンジの倍率（ばいりつ）（x100）を掛（か）けるため、20 × 100 = 2000Ω（2kΩ）となります。",
    "explanationId": "Nilai pada jarum (20) dikalikan dengan pengali range (x100), sehingga 20 x 100 = 2000 Ω (atau 2 kΩ).",
    "explanationEn": "Multiply the needle reading (20) by the range multiplier (x100): 20 × 100 = 2000 Ω (2 kΩ)."
  },
  {
    "id": "q43",
    "japanese": "ピストンピンの正（ただ）しい測定（そくてい）方法（ほうほう）（外（そと）径（径）測定（そくてい））を示（しめ）している画像（がぞう）はどちらですか？",
    "indonesian": "Gambar manakah yang menunjukkan cara pengukuran pin piston yang benar (mengukur diameter luar)?",
    "english": "Which image shows the correct measurement method (outer diameter measurement) for a piston pin?",
    "options": [
      "画像（がぞう）A",
      "画像（がぞう）B"
    ],
    "optionsIndonesian": [
      "Gambar A",
      "Gambar B"
    ],
    "optionsEnglish": [
      "Image A",
      "Image B"
    ],
    "optionImages": [
      "/images/43a.png",
      "/images/43b.png"
    ],
    "correctAnswer": 0,
    "explanationJp": "外（そと）径（径）を正確（せいかく）に測定（そくてい）するためには、マイクロメータのスピンドルとアンビルが測定（そくてい）物（ぶつ）に対（たい）し垂直（すいちょく）に当（あ）たるように保持（ほじ）する必要（ひつよう）があります。",
    "explanationId": "Untuk mengukur diameter luar dengan presisi, mikrometer harus dipegang tegak lurus terhadap objek ukur (pin piston).",
    "explanationEn": "To accurately measure the outer diameter, the micrometer must be held exactly perpendicular to the measured object."
  },
  {
    "id": "q44",
    "japanese": "次（つぎ）の画像（がぞう）のうち、「トルクレンチ」はどちらですか？",
    "indonesian": "Di antara gambar berikut, manakah yang merupakan 'torque wrench' (kunci momen)?",
    "english": "Among the following images, which one is a 'torque wrench'?",
    "options": [
      "画像（がぞう）A",
      "画像（がぞう）B"
    ],
    "optionsIndonesian": [
      "Gambar A",
      "Gambar B"
    ],
    "optionsEnglish": [
      "Image A",
      "Image B"
    ],
    "optionImages": [
      "/images/44a.png",
      "/images/44b.png"
    ],
    "correctAnswer": 0,
    "explanationJp": "トルクレンチは設定（せってい）したトルク値（ち）で締（し）め付（つ）けるための機構（きこう）（目盛（めも）りやダイヤル）を備（そな）えています。",
    "explanationId": "Torque wrench memiliki mekanisme pengaturan nilai torsi (berupa skala ukur atau layar digital) pada gagangnya.",
    "explanationEn": "A torque wrench has a mechanism (scale or dial) for setting the desired torque value on its handle."
  },
  {
    "id": "q45",
    "japanese": "長（なが）さ、幅（はば）、厚（あつ）さ、高（たか）さ、穴（あな）の深（ふか）さなどを広（ひろ）く測定（そくてい）できる測定（そくてい）工具（こうぐ）はどれですか？",
    "indonesian": "Alat ukur mana yang dapat mengukur secara luas mulai dari panjang, lebar, ketebalan, tinggi, hingga kedalaman lubang?",
    "english": "Which measuring tool can broadly measure length, width, thickness, height, and hole depth?",
    "options": [
      "ノギス",
      "マイクロメータ"
    ],
    "optionsIndonesian": [
      "Jangka Sorong (Vernier Caliper)",
      "Mikrometer"
    ],
    "optionsEnglish": [
      "Vernier Caliper",
      "Micrometer"
    ],
    "correctAnswer": 0,
    "explanationJp": "ノギスは本（ほん）尺（しゃく）と副（ふく）尺（しゃく）を持（も）ち、外（そと）径（径）・内径（ないけい）・深（ふか）さ・段差（だんさ）など多（た）目的（もくてき）に測定（そくてい）できる万能（ばんのう）測定（そくてい）器（き）です。",
    "explanationId": "Jangka sorong adalah alat serbaguna yang rahang dan tangkainya bisa mengukur diameter luar, dalam, serta kedalaman lubang.",
    "explanationEn": "A vernier caliper is a versatile tool capable of measuring outside and inside dimensions, as well as depth."
  },
  {
    "id": "q46",
    "japanese": "自動車（じどうしゃ）のホイールナット（またはホイールボルト）を取（と）り付（つ）ける際（さい）、どのような順序（じゅんじょ）で締（し）め付（つ）けるべきですか？",
    "indonesian": "Saat memasang mur roda mobil (atau baut roda), urutan pengencangan seperti apa yang harus dilakukan?",
    "english": "When installing automobile wheel nuts (or wheel bolts), in what order should they be tightened?",
    "options": [
      "対角線（たいかくせん）上（じょう）に十字（じゅうじ）（ menyilang ）に締（し）め付（つ）ける。",
      "時計（とけい）回（まわ）り（ berurutan ）に順番（じゅんばん）に締（し）め付（つ）ける。"
    ],
    "optionsIndonesian": [
      "Dikencangkan secara menyilang (diagonal/silang).",
      "Dikencangkan secara berurutan searah jarum jam."
    ],
    "optionsEnglish": [
      "Tighten in a criss-cross (diagonal) pattern.",
      "Tighten sequentially in a clockwise direction."
    ],
    "correctAnswer": 0,
    "explanationJp": "ホイールを均等（きんとう）に密着（みっちゃく）させるため、ホイールナットは必（かなら）ず対角線（たいかくせん）（星（ほし）型（がた）や十字（じゅうじ）型（がた））の順序（じゅんじょ）で締（し）め付（つ）けます。",
    "explanationId": "Untuk mencegah velg terpasang miring, mur roda wajib dikencangkan secara menyilang (pola bintang/diagonal).",
    "explanationEn": "To ensure the wheel seats evenly, wheel nuts must always be tightened in a criss-cross (star or diagonal) pattern."
  },
  {
    "id": "q47",
    "japanese": "ホイールナットを最終（さいしゅう）的（てき）にしっかりと規定（きてい）トルクまで締（し）め付（つ）ける際（さい）、何（なん）回（かい）に分（わ）けて締（し）め付（づ）けを行（おこな）うのが正（ただ）しいですか？",
    "indonesian": "Saat mengencangkan mur roda secara maksimal sesuai standar torsi, berapa kali tahapan pengencangan yang benar?",
    "english": "When finally tightening wheel nuts securely to the specified torque, how many stages of tightening is correct?",
    "options": [
      "1回（かい）で一気（いっき）に締（し）め付（つ）ける。",
      "2〜3回（かい）に分（わ）けて段階（だんかい）的（てき）に締（し）め付（つ）ける。"
    ],
    "optionsIndonesian": [
      "Dikencangkan sekaligus dalam 1 kali tarikan.",
      "Dikencangkan secara bertahap dalam 2 hingga 3 kali siklus putaran."
    ],
    "optionsEnglish": [
      "Tighten completely in one go.",
      "Tighten gradually in 2 to 3 stages."
    ],
    "correctAnswer": 1,
    "explanationJp": "均等（きんとう）な締（し）め付（づ）けトルクを得（え）るため、最初（さいしょ）から本（ほん）締（し）めせず、2〜3回（かい）に分（わ）けて徐々に（じょじょに）指定（してい）トルクまで締（し）め付（つ）けるのが基本（きほん）です。",
    "explanationId": "Mencegah distorsi dan memastikan kekencangan merata, pengencangan harus dilakukan bertahap (misal: setengah torsi dulu, baru torsi penuh).",
    "explanationEn": "To achieve uniform tightening, they should be tightened gradually in 2-3 stages up to the final specified torque."
  },
  {
    "id": "q48",
    "japanese": "画像（がぞう）のノギス（副（ふく）尺（しゃく））の目盛（めも）りが示（しめ）す正（ただ）しい測定（そくてい）値（ち）を読（よ）み取（と）りなさい。",
    "indonesian": "Bacalah nilai pengukuran yang benar dari skala jangka sorong (vernier caliper) pada gambar.",
    "english": "Read the correct measurement value shown on the scale of the vernier caliper in the image.",
    "options": [
      "26.35 mm",
      "36.35 mm"
    ],
    "optionsIndonesian": [
      "26.35 mm",
      "36.35 mm"
    ],
    "optionsEnglish": [
      "26.35 mm",
      "36.35 mm"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/48.png",
    "explanationJp": "本（ほん）尺（しゃく）の目盛（めも）りが26mmを超（こ）えた位置（いち）に副（ふく）尺（しゃく）の0があり、副（ふく）尺（しゃく）の3.5（0.35mm）の線（せん）が本（ほん）尺（しゃく）と一致（いっち）しているため、26.35mmです。",
    "explanationId": "Garis 0 nonius berada setelah 26 mm pada skala utama. Garis nonius yang lurus dengan skala utama adalah 0.35 mm. Total: 26.35 mm.",
    "explanationEn": "The vernier 0 is past 26mm on the main scale. The vernier mark aligning perfectly is 0.35mm. Total: 26.35mm."
  },
  {
    "id": "q49",
    "japanese": "シリンダーヘッドボルトを脱着（だっちゃく）（緩（ゆる）める・締（し）める）する際（さい）の手順（てじゅん）として正（ただ）しいものはどちらですか？",
    "indonesian": "Manakah prosedur yang benar saat melepas/memasang (mengencangkan/mengendurkan) baut silinder head?",
    "english": "Which is the correct procedure when removing/installing (loosening/tightening) cylinder head bolts?",
    "options": [
      "端（はじ）から順番（じゅんばん）に行（おこな）う。",
      "中央（ちゅうおう）から外側（そとがわ）へ向（む）かって対角線（たいかくせん）順（じゅん）に行（おこな）う。"
    ],
    "optionsIndonesian": [
      "Lakukan berurutan dari ujung ke ujung.",
      "Lakukan dengan pola menyilang (cross) dari tengah menuju ke arah luar."
    ],
    "optionsEnglish": [
      "Do it sequentially from one end to the other.",
      "Do it in a criss-cross pattern starting from the center outward."
    ],
    "correctAnswer": 1,
    "imageUrl": "/images/49.png",
    "explanationJp": "シリンダーヘッドの歪（ゆが）みを防（ふせ）ぐため、締（し）める時（とき）は中央（ちゅうおう）から外側（そとがわ）へ、緩（ゆる）める時（とき）は外側（そとがわ）から中央（ちゅうおう）へ対角線（たいかくせん）状（じょう）に行（おこな）います。（※車種（しゃしゅ）マニュアルに従（したが）う）",
    "explanationId": "Untuk mencegah head silinder melengkung (warping), pengencangan dilakukan dari tengah menyilang ke luar. Pengenduran sebaliknya.",
    "explanationEn": "To prevent cylinder head warpage, tightening starts from the center working outward diagonally. Loosening is the reverse."
  }
];
