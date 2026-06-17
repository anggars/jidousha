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
    "japanese": "ガソリンエンジンの燃料は、軽油（けいゆ）です。",
    "indonesian": "Bahan bakar mesin bensin adalah solar (light oil).",
    "english": "The fuel for a gasoline engine is light oil (diesel).",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "ガソリンエンジンの燃料はガソリンです。軽油はディーゼルエンジンの燃料です。",
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
    "explanationJp": "正解です。画像の測定器はダイヤルゲージです。",
    "explanationId": "Benar. Alat ukur pada gambar adalah dial gauge.",
    "explanationEn": "Correct. The measuring instrument in the image is a dial gauge."
  },
  {
    "id": "q3",
    "japanese": "ブレーキライニングは、交換部品（こうかんぶひん）です。",
    "indonesian": "Brake lining (kampas rem) adalah suku cadang yang diganti (replacement part).",
    "english": "The brake lining is a replacement part.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解です。ブレーキライニングは摩耗するため、定期的な交換が必要です。",
    "explanationId": "Benar. Kampas rem mengalami keausan sehingga memerlukan penggantian berkala.",
    "explanationEn": "Correct. The brake lining wears out and requires periodic replacement."
  },
  {
    "id": "q4",
    "japanese": "冷却装置（れいきゃくそうち）のラジエータは、ファンで温めます。",
    "indonesian": "Radiator pada sistem pendingin dihangatkan dengan kipas.",
    "english": "The radiator of the cooling system is warmed by a fan.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "ラジエータはファンで冷却液を冷やすためのものです。温めるのではありません。",
    "explanationId": "Radiator berfungsi untuk mendinginkan cairan pendingin menggunakan kipas, bukan untuk menghangatkan.",
    "explanationEn": "The radiator cools the coolant using a fan; it does not warm it."
  },
  {
    "id": "q5",
    "japanese": "Aは、シックネス・ゲージで長さ、外径（がいけい）、内径（ないけい）などの測定に使用する。",
    "indonesian": "A adalah thickness gauge (feeler gauge) yang digunakan untuk mengukur panjang, diameter luar, dan diameter dalam.",
    "english": "A is a thickness gauge (feeler gauge) used for measuring length, outer diameter, and inner diameter.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "imageUrl": "/images/5.png",
    "explanationJp": "画像Aはシックネスゲージ（隙間ゲージ）であり、微小な隙間を測定するためのものです。長さや外径の測定にはノギスやマイクロメータを使用します。",
    "explanationId": "Gambar A adalah feeler gauge (thickness gauge), yang digunakan untuk mengukur celah kecil. Panjang dan diameter diukur menggunakan vernier caliper atau mikrometer.",
    "explanationEn": "Image A shows a feeler gauge, used for measuring small clearances. Lengths and diameters are measured with a vernier caliper or micrometer."
  },
  {
    "id": "q6",
    "japanese": "タイヤ・ゲージ（tire pressure gauge）で、タイヤのくうきあつを測定します。",
    "indonesian": "Gunakan tire pressure gauge untuk mengukur tekanan udara ban.",
    "english": "Use a tire pressure gauge to measure the tire's air pressure.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解です。タイヤゲージはタイヤの空気圧を測定する専用工具です。",
    "explanationId": "Benar. Tire pressure gauge adalah alat khusus untuk mengukur tekanan udara ban.",
    "explanationEn": "Correct. A tire pressure gauge is a specialized tool for measuring tire air pressure."
  },
  {
    "id": "q7",
    "japanese": "次のものはエンジンオイルの粘度（ねんど）を示しています：SAE 5W-30, 10W-30, 10W-40",
    "indonesian": "Berikut ini adalah yang menunjukkan kekentalan oli mesin: SAE 5W-30, 10W-30, 10W-40.",
    "english": "The following indicate engine oil viscosity: SAE 5W-30, 10W-30, 10W-40.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解です。SAE番号はエンジンオイルの粘度グレードを示しています。",
    "explanationId": "Benar. Angka SAE menunjukkan tingkat kekentalan (viskositas) oli mesin.",
    "explanationEn": "Correct. The SAE numbers indicate the viscosity grade of the engine oil."
  },
  {
    "id": "q8",
    "japanese": "オイル・フィルタ（oil filter）は、交換部品（こうかんぶひん）です。",
    "indonesian": "Oil filter adalah suku cadang yang diganti.",
    "english": "The oil filter is a replacement part.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解です。オイルフィルタは汚れを取り除くため、定期的な交換が必要です。",
    "explanationId": "Benar. Filter oli menyaring kotoran dan harus diganti secara berkala.",
    "explanationEn": "Correct. The oil filter removes contaminants and must be replaced periodically."
  },
  {
    "id": "q9",
    "japanese": "オイルフィルターの中にオイルエレメントが入っています。",
    "indonesian": "Di dalam filter oli terdapat elemen oli.",
    "english": "Inside the oil filter, there is an oil element.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解です。オイルフィルターの内部には、実際に汚れをろ過するオイルエレメントが含まれています。",
    "explanationId": "Benar. Di dalam filter oli terdapat elemen oli yang bertugas menyaring kotoran.",
    "explanationEn": "Correct. Inside the oil filter is the oil element that actually filters the contaminants."
  },
  {
    "id": "q10",
    "japanese": "スタートボタン（またはスタータ）はバッテリーに充電します。",
    "indonesian": "Tombol start (atau starter) mengisi daya baterai.",
    "english": "The start button (or starter) charges the battery.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "スタータ（セルモーター）はエンジンを始動させるものであり、充電はしません。充電を行うのはオルタネーターです。",
    "explanationId": "Starter (motor starter) berfungsi untuk menghidupkan mesin, bukan untuk mengisi daya. Pengisian daya dilakukan oleh alternator.",
    "explanationEn": "The starter cranks the engine to start it, it does not charge the battery. The alternator is responsible for charging."
  },
  {
    "id": "q11",
    "japanese": "タイミングライトは、点火時期（てんかじき）を点検・調整するために使用します。",
    "indonesian": "Timing light digunakan untuk memeriksa dan menyetel waktu pengapian.",
    "english": "A timing light is used to inspect and adjust the ignition timing.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解です。タイミングライトはエンジンの点火時期を確認するための測定器です。",
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
    "explanationJp": "正解です。画像はエンジンの主要構造であるシリンダーブロックを示しています。",
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
    "explanationJp": "正解です。画像Aは発電機であるオルタネーターを示しています。",
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
    "explanationJp": "キャリパーの錆や汚れを落とす際に、サンドペーパーやワイヤーブラシを使用することがあります。（※シールの溝などは専用ツールで慎重に清掃します）",
    "explanationId": "Amplas (sandpaper) atau sikat kawat sering digunakan untuk membersihkan karat dan kotoran pada kaliper rem.",
    "explanationEn": "Sandpaper or a wire brush is often used to clean rust and dirt from the brake caliper."
  },
  {
    "id": "q15",
    "japanese": "エアガン（エアブロー）でグリースを圧送（あっそう）する。",
    "indonesian": "Gunakan air gun untuk menekan gemuk (grease).",
    "english": "Use an air gun to pump grease.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "エアガンは圧縮空気でゴミを吹き飛ばす工具です。グリースを圧送するにはグリースガンを使用します。",
    "explanationId": "Air gun digunakan untuk meniup debu dengan udara terkompresi. Untuk menekan gemuk, gunakan grease gun.",
    "explanationEn": "An air gun blows compressed air to remove dust. A grease gun is used to pump grease."
  },
  {
    "id": "q16",
    "japanese": "図は、燃焼室（ねんしょうしつ）の冷却用（れいきゃくよう）のウォータ・ジャケットである。",
    "indonesian": "Gambar menunjukkan water jacket untuk pendinginan ruang bakar.",
    "english": "The figure shows a water jacket for cooling the combustion chamber.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "imageUrl": "/images/16.png",
    "explanationJp": "画像はウォータージャケットではなく、他の部品（ガスケット等）を示しています。",
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
    "explanationJp": "マイクロメータは外径や厚さを測定するものであり、隙間の測定にはシックネスゲージを使用します。また、画像Aの工具がマイクロメータでない可能性もあります。",
    "explanationId": "Mikrometer digunakan untuk mengukur diameter luar atau ketebalan. Untuk celah, gunakan feeler gauge.",
    "explanationEn": "A micrometer measures outside diameters and thickness. A feeler gauge is used to measure clearances."
  },
  {
    "id": "q18",
    "japanese": "ファン・ベルトの摩耗（まもう）や損傷（そんしょう）は、目視（もくし）や手（て）で触（さわ）って点検する。",
    "indonesian": "Keausan dan kerusakan fan belt diperiksa secara visual dan dengan rabaan tangan.",
    "english": "Wear and damage to the fan belt are inspected visually and by touching it with hands.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/18.png",
    "explanationJp": "正解です。ベルトのひび割れや摩耗は、目視と手触りで確認します。",
    "explanationId": "Benar. Keretakan dan keausan pada belt diperiksa dengan melihat langsung dan merabanya.",
    "explanationEn": "Correct. Belt cracks and wear are checked by direct visual inspection and touching."
  },
  {
    "id": "q19",
    "japanese": "サーキット・テスタは、電圧（てんあつ）、電流（でんりゅう）、抵抗（ていこう）を測定するときに使用する。",
    "indonesian": "Circuit tester (multimeter) digunakan untuk mengukur tegangan, arus, dan hambatan.",
    "english": "A circuit tester (multimeter) is used to measure voltage, current, and resistance.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解です。サーキットテスタ（マルチメータ）は電圧、電流、抵抗の3つを測定できる基本ツールです。",
    "explanationId": "Benar. Circuit tester (multimeter) adalah alat dasar yang bisa mengukur ketiga besaran listrik tersebut.",
    "explanationEn": "Correct. A circuit tester (multimeter) is a basic tool capable of measuring these three electrical values."
  },
  {
    "id": "q20",
    "japanese": "ブレーキドラムは交換部品（こうかんぶひん）です。",
    "indonesian": "Brake drum (tromol rem) adalah suku cadang yang diganti.",
    "english": "The brake drum is a replacement part.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解です。ブレーキドラムは使用に伴い摩耗するため、限界値を超えたら交換が必要です。",
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
    "explanationJp": "正解です。レシプロ（往復動）エンジンには4ストローク（サイクル）と2ストロークの方式が存在します。",
    "explanationId": "Benar. Mesin reciprocating (torak bolak-balik) memiliki tipe 4-langkah dan 2-langkah.",
    "explanationEn": "Correct. Reciprocating engines exist in both 4-stroke and 2-stroke configurations."
  },
  {
    "id": "q22",
    "japanese": "レシプロ・エンジン（4ストローク）は、4工程（ストローク）で1サイクルを完了します。",
    "indonesian": "Mesin reciprocating (4-langkah) menyelesaikan 1 siklus dalam 4 langkah.",
    "english": "A reciprocating engine (4-stroke) completes 1 cycle in 4 strokes.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解です。吸入・圧縮・燃焼（膨張）・排気の4工程で1サイクルが完了します。",
    "explanationId": "Benar. 1 siklus diselesaikan dalam 4 langkah: Hisap, Kompresi, Usaha (Pembakaran), dan Buang.",
    "explanationEn": "Correct. 1 cycle is completed in 4 strokes: Intake, Compression, Power (Combustion), and Exhaust."
  },
  {
    "id": "q23",
    "japanese": "ブレーキ・キャリパはブレーキドラムに使われている。",
    "indonesian": "Brake caliper digunakan pada rem tromol.",
    "english": "The brake caliper is used in a drum brake.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "ブレーキキャリパは「ディスクブレーキ」の構成部品です。ドラムブレーキにはホイールシリンダやブレーキシューが使われます。",
    "explanationId": "Brake caliper adalah komponen dari 'rem cakram' (disc brake). Rem tromol menggunakan wheel cylinder dan sepatu rem (brake shoe).",
    "explanationEn": "The brake caliper is a component of a 'disc brake'. Drum brakes use wheel cylinders and brake shoes."
  },
  {
    "id": "q24",
    "japanese": "トーインゲージ（toe-in gauge）は、バルブの隙間（バルブクリアランス）を測定するものである。",
    "indonesian": "Toe-in gauge digunakan untuk mengukur celah katup.",
    "english": "A toe-in gauge is used to measure valve clearance.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "トーインゲージはホイールアライメント（トーイン）を測定するものです。バルブクリアランスはシックネスゲージで測定します。",
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
    "explanationJp": "正解です。画像は冷却液の熱を放熱するためのラジエータです。",
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
    "explanationJp": "正解です。画像はオフセットレンチ（めがねレンチ）を示しています。",
    "explanationId": "Benar. Gambar menunjukkan offset wrench atau sering disebut kunci ring.",
    "explanationEn": "Correct. The image shows an offset wrench, also known as a box-end wrench."
  },
  {
    "id": "q27",
    "japanese": "車両をジャッキアップする際、前輪に輪止め（ガンジァル）を設置しているイラスト。",
    "indonesian": "Ilustrasi mengganjal roda depan saat mendongkrak kendaraan.",
    "english": "An illustration of placing a wheel chock on the front wheel when jacking up the vehicle.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/27.png",
    "explanationJp": "正解です。車両をジャッキアップする際は、安全のために必ず輪止め（タイヤストッパー）を使用します。",
    "explanationId": "Benar. Saat mendongkrak kendaraan, ganjal roda (wheel chock) wajib dipasang demi keselamatan.",
    "explanationEn": "Correct. When jacking up a vehicle, wheel chocks must always be used for safety."
  },
  {
    "id": "q28",
    "japanese": "グロープラグはガソリンエンジンに使われている。",
    "indonesian": "Glow plug (busi pijar) digunakan pada mesin bensin.",
    "english": "Glow plugs are used in gasoline engines.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "グロープラグはディーゼルエンジンの始動補助装置です。ガソリンエンジンにはスパークプラグが使われます。",
    "explanationId": "Glow plug (busi pijar) digunakan untuk membantu menghidupkan mesin diesel. Mesin bensin menggunakan busi (spark plug).",
    "explanationEn": "Glow plugs are a starting aid for diesel engines. Gasoline engines use spark plugs."
  },
  {
    "id": "q29",
    "japanese": "スパークプラグ（spark plug）はガソリンエンジンに使われている。",
    "indonesian": "Spark plug (busi) digunakan pada mesin bensin.",
    "english": "Spark plugs are used in gasoline engines.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解です。スパークプラグはガソリンエンジンで混合気に点火するための部品です。",
    "explanationId": "Benar. Busi (spark plug) adalah komponen pada mesin bensin untuk memercikkan api dan membakar campuran bahan bakar.",
    "explanationEn": "Correct. Spark plugs are components in gasoline engines that ignite the air-fuel mixture."
  },
  {
    "id": "q30",
    "japanese": "ブレーキ液（リザーバタンク）の量は、目視により外部からレベルの基準線（MAX/MIN）を確認する。",
    "indonesian": "Ketinggian minyak rem (pada reservoir tank) diperiksa secara visual dari luar sesuai garis batas level (MAX/MIN).",
    "english": "The brake fluid level (in the reservoir tank) is visually checked from the outside against the reference lines (MAX/MIN).",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解です。ブレーキ液の量はタンク外部からMAXとMINの間にあるかを目視で確認します。",
    "explanationId": "Benar. Ketinggian minyak rem selalu diperiksa dari luar tangki transparan, memastikannya berada di antara garis MAX dan MIN.",
    "explanationEn": "Correct. The brake fluid level is checked visually from outside the tank to ensure it's between MAX and MIN."
  },
  {
    "id": "q31",
    "japanese": "エンジン警告灯（チェックエンジンランプ）は、エンジンシステムに異常（アブノーマル）が発生したことを検出するためのものである。",
    "indonesian": "Lampu check engine berfungsi untuk mendeteksi ketidaknormalan pada sistem mesin.",
    "english": "The engine warning light (check engine lamp) detects abnormalities occurring in the engine system.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解です。エンジン制御システム（センサー等）に異常があると警告灯が点灯します。",
    "explanationId": "Benar. Lampu peringatan (check engine) menyala jika ECU mendeteksi adanya malfungsi pada sistem kontrol mesin.",
    "explanationEn": "Correct. The warning light illuminates if the ECU detects a malfunction in the engine control system."
  },
  {
    "id": "q32",
    "japanese": "マスタシリンダを取り外す際、ハンマで叩いて取り外す。",
    "indonesian": "Saat melepas master silinder, pukul menggunakan palu untuk melepaskannya.",
    "english": "When removing the master cylinder, strike it with a hammer to remove it.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "精密部品であるマスタシリンダをハンマで叩いてはいけません。損傷の原因となります。",
    "explanationId": "Komponen presisi seperti master silinder tidak boleh dilepas dengan cara dipukul palu karena akan merusaknya.",
    "explanationEn": "Precision parts like the master cylinder must not be struck with a hammer, as this will cause damage."
  },
  {
    "id": "q33",
    "japanese": "ディスクホイールの材質は、主にステンレスまたはアルミニウムである。",
    "indonesian": "Material disc wheel utamanya adalah stainless steel atau aluminium.",
    "english": "The materials for disc wheels are primarily stainless steel or aluminum.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "ディスクホイールの主な材質は「スチール（鉄）」または「アルミニウム合金」です。ステンレスは一般的ではありません。",
    "explanationId": "Material utama velg mobil (disc wheel) adalah 'baja (steel)' atau 'paduan aluminium'. Stainless steel sangat jarang digunakan.",
    "explanationEn": "The main materials for disc wheels are 'steel' or 'aluminum alloy'. Stainless steel is not commonly used."
  },
  {
    "id": "q34",
    "japanese": "ノギスを用いた測定結果の読み取りに関する画像問題。",
    "indonesian": "Soal gambar mengenai pembacaan hasil pengukuran jangka sorong.",
    "english": "An image question regarding reading a measurement result from a vernier caliper.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/34.png",
    "explanationJp": "ノギスの本尺と副尺の目盛りを正確に読み取るスキルは基本作業として必須です。",
    "explanationId": "Kemampuan membaca skala utama dan nonius pada jangka sorong sangat wajib dikuasai untuk pekerjaan dasar.",
    "explanationEn": "The ability to accurately read the main and vernier scales on a caliper is essential for basic work."
  },
  {
    "id": "q35",
    "japanese": "スパナ（オープンエンドレンチ）を二本つなぎ合わせて（延長して）使用することは、正しい使用方法である。",
    "indonesian": "Menyambungkan dua buah spanner (kunci pas) untuk menambah tuas merupakan cara penggunaan yang benar.",
    "english": "Connecting two spanners (open-end wrenches) to extend leverage is the correct way to use them.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "explanationJp": "工具をつなぎ合わせて延長使用することは、工具の破損や怪我の原因となるため禁止されています。",
    "explanationId": "Menyambung kunci (piping/double wrenching) dilarang karena bisa menyebabkan kunci patah dan kecelakaan kerja.",
    "explanationEn": "Connecting tools to extend leverage is prohibited because it can cause tool breakage and injury."
  },
  {
    "id": "q36",
    "japanese": "タイヤの溝（みぞ）の深（ふかさ）は、デプス・ゲージなどを用いて2カ所（かしょ）だけ測定すれば十分である。",
    "indonesian": "Kedalaman alur ban cukup diukur pada 2 titik saja menggunakan depth gauge.",
    "english": "It is sufficient to measure the tire groove depth at only two locations using a depth gauge.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "imageUrl": "/images/36.png",
    "explanationJp": "タイヤの溝の深さは、偏摩耗を確認するためにも複数箇所（円周上の均等な場所）で測定する必要があります。",
    "explanationId": "Kedalaman alur ban harus diukur di beberapa titik merata untuk mendeteksi keausan tidak rata (uneven wear).",
    "explanationEn": "Tire groove depth must be measured at multiple evenly distributed locations to detect uneven wear."
  },
  {
    "id": "q37",
    "japanese": "これはタイヤのトレッド・パターン（tread pattern）のリブ（rib）型である。",
    "indonesian": "Ini adalah tipe rib dari pola tapak ban.",
    "english": "This is a rib-type tire tread pattern.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "imageUrl": "/images/37.png",
    "explanationJp": "正解です。進行方向に平行な直線状の溝を持つパターンは「リブ型」と呼ばれます。",
    "explanationId": "Benar. Pola tapak dengan alur lurus sejajar arah rotasi disebut tipe 'rib'.",
    "explanationEn": "Correct. A tread pattern with straight grooves parallel to the direction of rotation is called a 'rib' type."
  },
  {
    "id": "q38",
    "japanese": "バイス（万力）のハンドルを締め付ける際、ハンマ（パル）で叩いて強く締め付ける。",
    "indonesian": "Saat mengencangkan tuas ragum (vise), pukul menggunakan palu agar lebih kuat.",
    "english": "When tightening the handle of a vise, strike it with a hammer to tighten it strongly.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 1,
    "imageUrl": "/images/38.png",
    "explanationJp": "バイスのハンドルをハンマで叩くと、バイス自体が破損する恐れがあるため禁止です。手でしっかりと締めます。",
    "explanationId": "Dilarang memukul tuas ragum dengan palu karena bisa mematahkan tuas atau merusak ulir. Kencangkan dengan tangan saja.",
    "explanationEn": "Striking the vise handle with a hammer is prohibited as it can damage the vise. Tighten it firmly by hand."
  },
  {
    "id": "q39",
    "japanese": "ボルトやナットを規定（きてい）のトルクで締め付けることができる工具は、トルク・レンチである。",
    "indonesian": "Alat yang dapat mengencangkan baut dan mur sesuai torsi standar adalah torque wrench (kunci momen).",
    "english": "The tool that can tighten bolts and nuts to a specified torque is a torque wrench.",
    "options": [
      "O",
      "X"
    ],
    "correctAnswer": 0,
    "explanationJp": "正解です。トルクレンチは指定されたトルク値で正確に締め付けるための専用工具です。",
    "explanationId": "Benar. Kunci momen (torque wrench) adalah alat presisi untuk mengencangkan baut sesuai torsi spesifikasi pabrik.",
    "explanationEn": "Correct. A torque wrench is a precision tool for tightening bolts accurately to a specified torque value."
  },
  {
    "id": "q40",
    "japanese": "サーキットテスタによる12Vバッテリの端子電圧の測定において、正しい準備作業はどれですか？",
    "indonesian": "Pada pengukuran tegangan terminal baterai 12V menggunakan circuit tester, persiapan manakah yang benar?",
    "english": "When measuring the terminal voltage of a 12V battery with a circuit tester, which is the correct preparatory step?",
    "options": [
      "プローブの赤色（＋）を、バッテリの「＋」端子に取り付ける。",
      "プローブの赤色（＋）を、バッテリの「ー」端子に取り付ける。"
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
    "explanationJp": "電圧測定の基本として、赤色のプローブ（＋）はバッテリのプラス端子に、黒色（ー）はマイナス端子に接続します。",
    "explanationId": "Aturan dasar pengukuran tegangan DC: probe merah (+) selalu dihubungkan ke terminal positif, probe hitam (-) ke negatif.",
    "explanationEn": "As a basic rule of voltage measurement, the red probe (+) goes to the positive terminal, and black (-) to the negative."
  },
  {
    "id": "q41",
    "japanese": "水温センサ（Water temperature sensor）の抵抗値を測定する際、回路計（テスタ）の適切な測定レンジ（倍率）を選びなさい。",
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
    "explanationJp": "水温センサの抵抗値は数kΩになることが多いため、x100やx1kレンジを使用するのが適切です。",
    "explanationId": "Nilai hambatan sensor suhu air biasanya berada di kisaran beberapa kilo-ohm (kΩ), sehingga pengali x100 lebih tepat digunakan.",
    "explanationEn": "Water temperature sensors typically have resistance in the kilo-ohm range, making the x100 range appropriate."
  },
  {
    "id": "q42",
    "japanese": "前問の設定（x100レンジ）で水温センサを測定した際、アナログテスタの指針が「20」を指していました。実際の抵抗値（Ω）を求めなさい。",
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
    "explanationJp": "指示値20に対して、レンジの倍率（x100）を掛けるため、20 × 100 = 2000Ω（2kΩ）となります。",
    "explanationId": "Nilai pada jarum (20) dikalikan dengan pengali range (x100), sehingga 20 x 100 = 2000 Ω (atau 2 kΩ).",
    "explanationEn": "Multiply the needle reading (20) by the range multiplier (x100): 20 × 100 = 2000 Ω (2 kΩ)."
  },
  {
    "id": "q43",
    "japanese": "ピストンピンの正しい測定方法（外径測定）を示している画像はどちらですか？",
    "indonesian": "Gambar manakah yang menunjukkan cara pengukuran pin piston yang benar (mengukur diameter luar)?",
    "english": "Which image shows the correct measurement method (outer diameter measurement) for a piston pin?",
    "options": [
      "画像A",
      "画像B"
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
    "explanationJp": "外径を正確に測定するためには、マイクロメータのスピンドルとアンビルが測定物に対し垂直に当たるように保持する必要があります。",
    "explanationId": "Untuk mengukur diameter luar dengan presisi, mikrometer harus dipegang tegak lurus terhadap objek ukur (pin piston).",
    "explanationEn": "To accurately measure the outer diameter, the micrometer must be held exactly perpendicular to the measured object."
  },
  {
    "id": "q44",
    "japanese": "次の画像のうち、「トルクレンチ」はどちらですか？",
    "indonesian": "Di antara gambar berikut, manakah yang merupakan 'torque wrench' (kunci momen)?",
    "english": "Among the following images, which one is a 'torque wrench'?",
    "options": [
      "画像A",
      "画像B"
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
    "explanationJp": "トルクレンチは設定したトルク値で締め付けるための機構（目盛りやダイヤル）を備えています。",
    "explanationId": "Torque wrench memiliki mekanisme pengaturan nilai torsi (berupa skala ukur atau layar digital) pada gagangnya.",
    "explanationEn": "A torque wrench has a mechanism (scale or dial) for setting the desired torque value on its handle."
  },
  {
    "id": "q45",
    "japanese": "長さ、幅、厚さ、高さ、穴の深さなどを広く測定できる測定工具はどれですか？",
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
    "explanationJp": "ノギスは本尺と副尺を持ち、外径・内径・深さ・段差など多目的に測定できる万能測定器です。",
    "explanationId": "Jangka sorong adalah alat serbaguna yang rahang dan tangkainya bisa mengukur diameter luar, dalam, serta kedalaman lubang.",
    "explanationEn": "A vernier caliper is a versatile tool capable of measuring outside and inside dimensions, as well as depth."
  },
  {
    "id": "q46",
    "japanese": "自動車のホイールナット（またはホイールボルト）を取り付ける際、どのような順序で締め付けるべきですか？",
    "indonesian": "Saat memasang mur roda mobil (atau baut roda), urutan pengencangan seperti apa yang harus dilakukan?",
    "english": "When installing automobile wheel nuts (or wheel bolts), in what order should they be tightened?",
    "options": [
      "対角線上に十字（ menyilang ）に締め付ける。",
      "時計回り（ berurutan ）に順番に締め付ける。"
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
    "explanationJp": "ホイールを均等に密着させるため、ホイールナットは必ず対角線（星型や十字型）の順序で締め付けます。",
    "explanationId": "Untuk mencegah velg terpasang miring, mur roda wajib dikencangkan secara menyilang (pola bintang/diagonal).",
    "explanationEn": "To ensure the wheel seats evenly, wheel nuts must always be tightened in a criss-cross (star or diagonal) pattern."
  },
  {
    "id": "q47",
    "japanese": "ホイールナットを最終的にしっかりと規定トルクまで締め付ける際、何回に分けて締め付けを行うのが正しいですか？",
    "indonesian": "Saat mengencangkan mur roda secara maksimal sesuai standar torsi, berapa kali tahapan pengencangan yang benar?",
    "english": "When finally tightening wheel nuts securely to the specified torque, how many stages of tightening is correct?",
    "options": [
      "1回で一気に締め付ける。",
      "2〜3回に分けて段階的に締め付ける。"
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
    "explanationJp": "均等な締め付けトルクを得るため、最初から本締めせず、2〜3回に分けて徐々に指定トルクまで締め付けるのが基本です。",
    "explanationId": "Mencegah distorsi dan memastikan kekencangan merata, pengencangan harus dilakukan bertahap (misal: setengah torsi dulu, baru torsi penuh).",
    "explanationEn": "To achieve uniform tightening, they should be tightened gradually in 2-3 stages up to the final specified torque."
  },
  {
    "id": "q48",
    "japanese": "画像のノギス（副尺）の目盛りが示す正しい測定値を読み取りなさい。",
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
    "explanationJp": "本尺の目盛りが26mmを超えた位置に副尺の0があり、副尺の3.5（0.35mm）の線が本尺と一致しているため、26.35mmです。",
    "explanationId": "Garis 0 nonius berada setelah 26 mm pada skala utama. Garis nonius yang lurus dengan skala utama adalah 0.35 mm. Total: 26.35 mm.",
    "explanationEn": "The vernier 0 is past 26mm on the main scale. The vernier mark aligning perfectly is 0.35mm. Total: 26.35mm."
  },
  {
    "id": "q49",
    "japanese": "シリンダーヘッドボルトを脱着（緩める・締める）する際の手順として正しいものはどちらですか？",
    "indonesian": "Manakah prosedur yang benar saat melepas/memasang (mengencangkan/mengendurkan) baut silinder head?",
    "english": "Which is the correct procedure when removing/installing (loosening/tightening) cylinder head bolts?",
    "options": [
      "端から順番に行う。",
      "中央から外側へ向かって対角線（クロス）順に行う。"
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
    "explanationJp": "シリンダーヘッドの歪みを防ぐため、締める時は中央から外側へ、緩める時は外側から中央へ対角線状に行います。（※車種マニュアルに従う）",
    "explanationId": "Untuk mencegah head silinder melengkung (warping), pengencangan dilakukan dari tengah menyilang ke luar. Pengenduran sebaliknya.",
    "explanationEn": "To prevent cylinder head warpage, tightening starts from the center working outward diagonally. Loosening is the reverse."
  }
];
