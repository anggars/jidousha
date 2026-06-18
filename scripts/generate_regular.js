const fs = require('fs');

const rawText = `
1. ガソリン・エンジンでは、うんてんちゅうにカリカリといういおんがはっせいすることがあり、これをノッキングという。
(Jawaban: ⭕)

2. ジーゼル・エンジンの排気ガス（exhaust gas）には、ＰＭ（Particulate Matter）がふくまれる。
(Jawaban: ⭕)

3. 図（ず）は、燃焼室（ねんしょうしつ）の冷却用（れいきゃくよう）のウォータ・ジャケットである。
[ada gambar]
(Jawaban: ❌)

4. 図（ず）は、直接噴射式（ちょくせつふんしゃしき）のジーゼル・エンジン（diesel engine）である。
[ada gambar]
(Jawaban: ⭕)

5. オイル・ポンプ（oil pump）は、オイル・パン（oil pan）のオイル（oil）を各潤滑部（かくじゅんかつぶ）へ圧送（あっそう）する。
(Jawaban: ⭕)

6. ラジエータ（radiator）のラジエータ・キャップは、冷却水（れいきゃくすい）の温度（おんど）が低（ひく）いときにラジエータへの水路（すいろ）を閉（と）じて冷却水（れいきゃくすい）を早（はや）く、適温（てきおん）にする。
(Jawaban: ❌)

7. エア・クリーナのエレメントが汚（よご）れて目詰（めづ）まりを起（お）こすと吸入空気（きゅうにゅうくうき）が減少（げんしょう）し、エンジンの性能（せいのう）が低下（ていか）する。
(Jawaban: ⭕)

8. バッテリに使用（しよう）される電解液（でんかいえき）は、硫酸（りゅうさん）と水（みず）を混合（こんごう）した希硫酸（きりゅうさん）で、いずれも純度（じゅんど）の高（たか）いものが使用（しよう）される。
(Jawaban: ⭕)

9. オルタネーターでは、ダイオード（レクチファイア）を使用（しよう）して直流（ちょくりゅう）を交流（こうりゅう）に変換（へんかん）している。
(Jawaban: ❌)

10. 図（ず）は、ダイアフラム・スプリング式（しき）クラッチで、主（おも）に乗用車（じょうようしゃ）や小型トラックなどに使（つか）われている。
[ada gambar]
(Jawaban: ⭕)

11. Ａは、ドライブシャフト（drive shaft）である。
[ada gambar]
(Jawaban: ❌)

12. 図（ず）は、リンク型リヤ・サスペンションである。
[ada gambar]
(Jawaban: ⭕)

13. リーフ・スプリングは、乗用車（じょうようしゃ）に多（おお）く使（つか）われる。
[ada gambar]
(Jawaban: ❌)

14. パワー・ステアリングには、油圧式（ゆあつしき）と電気式（でんきしき）がある。
(Jawaban: ⭕)

15. タイヤの空気圧（くうきあつ）は、タイヤが高温（こうおん）の状態（じょうたい）で点検（てんけん）する。
(Jawaban: ❌)

16. 図（ず）のＡは、フロント・ホイール・アライメント（front wheel alignment）のキャンバ（camber）である。
[ada gambar]
(Jawaban: ⭕)

17. ブレーキ・ペダルを踏（ふ）むと、油圧（ゆあつ）がホイール・シリンダに伝（つた）わり、ブレーキ・シューをブレーキ・ドラムに圧着（あっちゃく）させることでブレーキがかかる。
[ada gambar]
(Jawaban: ⭕)

18. ブレーキ液は、長期間使用（ちょうきかんしよう）していると水分（すいぶん）を吸収（きゅうしゅう）し、性能（せいのう）が劣化（れっか）するので、指定（してい）されている期間（きかん）ごとに交換（こうかん）する。
(Jawaban: ⭕)

19. 図（ず）ＡのノギスA（vernier caliper）の目盛（めも）りの読（よ）みは、46.45mm である。
[ada gambar]
(Jawaban: ⭕)

20. Ａは、マイクロメータで、隙間（すきま）の測定（そくてい）ができる。
[ada gambar]
(Jawaban: ❌)

21. コンプレッション・ゲージは、シリンダの圧縮圧力（あっしゅくあつりょく）の測定（そくてい）ができる。
[ada gambar]
(Jawaban: ⭕)

22. ギヤ・オイルの粘度（ねんど）が高（たか）すぎると粘性抵抗（ねんせいていこう）が大（おお）きくなり、動力損失（どうりょくそんしつ）を増大（ぞうだい）させる。
(Jawaban: ⭕)

23. グリースは、点検（てんけん）、給油（きゅうゆ）が頻繁（ひんぱん）に行（おこな）えない部分（ぶぶん）に使用（しよう）している。
(Jawaban: ⭕)

24. 発進時（はっしんじ）に異常（いじょう）な振動（しんどう）があったので、クラッチ・フェーシング（clutch facing）を点検（てんけん）した。
(Jawaban: ⭕)

25. ホイール・ナットの締（し）め付（つ）けは、１→２→３→４→５の順番（じゅんばん）に締（し）め付（つ）ける。
[ada gambar]
(Jawaban: ❌)

26. プロペラ・シャフトの振（ふ）れを点検（てんけん）するため、シャフトを取（と）り外（はず）してシャフト自体（じたい）の振（ふ）れを点検（てんけん）した。
(Jawaban: ⭕)

27. 油圧式（ゆあつしき）パワー・ステアリングのリザーバ・タンクのオイル（oil）の量（りょう）は、一般（いっぱん）にエンジンをアイドリングの状態（じょうたい）にして点検（てんけん）する。
(Jawaban: ⭕)

28. ブレーキ・ペダルを踏（ふ）み込（こ）んだとき、ふわふわした感（かん）じがあったので、ブレーキ液を補充（ほじゅう）した。
(Jawaban: ❌)

29. 塗料（とりょう）には、下塗（したぬ）り用（よう）、中塗（なかぬ）り用（よう）、上塗（うわぬ）り用（よう）のものがある。
(Jawaban: ⭕)

30. 乗用車（じょうようしゃ）には、独立（どくりつ）したフレーム（frame）を用（もち）いずフレーム（frame）をボデー（body）の一部（いちぶ）として組（く）み立（た）てたモノコック・ボデー（monocoque body）のものが多（おお）い。
(Jawaban: ⭕)

31. エア・クリーナは、空気中（くうきちゅう）のごみを取り除く。
(Jawaban: ⭕)

32. エンジン・オイルは、定期的（ていきてき）に交換（こうかん）する。
(Jawaban: ⭕)

33. ブレーキ・パッドは、交換（こうかん）部品（ぶひん）である。
[ada gambar]
(Jawaban: ⭕)

34. ファン・ベルトの摩耗（まもう）や損傷（そんしょう）は、目視（もくし）や手（て）で触（さわ）って点検する。
[ada gambar]
(Jawaban: ⭕)

35. タイヤの溝（みぞ）の深さは、デプス・ゲージなどで２カ所（かしょ）測定（そくてい）すればよい。
[ada gambar]
(Jawaban: ❌)

36. はいきガスの色（いろ）は、エンジンが冷（ひ）えた状態（じょうたい）で点検する。
[ada gambar]
(Jawaban: ❌)

37. ホイール・ナットの締（し）め付（つ）けは、１→２→３→４→５の順番（じゅんばん）に締（し）め付（つ）ける。
[ada gambar]
(Jawaban: ⭕)

38. Ａは、プロペラシャフトである。
[ada gambar]
(Jawaban: ⭕)

39. 図（ず）は、リンク型リヤ・サスペンションである。
[ada gambar]
(Jawaban: ⭕)

40. リーフ・スプリングは、きしみ音（おん）が発生（はっせい）しやすい。
[ada gambar]
(Jawaban: ⭕)

41. Ａは、フロント・ホイール・アライメントのキャスタである。
[ada gambar]
(Jawaban: ❌)

42. てんけんハンマでホイール・ナットが緩（ゆる）んでいないか点検した。
(Jawaban: ⭕)

43. サーキット・テスタは、電圧（でんあつ）、電流（でんりゅう）、抵抗（ていこう）を測定（そくてい）するときに使用（しよう）する。
[ada gambar]
(Jawaban: ⭕)

44. Ａは、トルク・レンチで、ボルト、ナットを規定（きてい）のトルクで締め付けることができる。
[ada gambar]
(Jawaban: ⭕)

45. さぎょう着（ぎ）のボタンは、確実（かくじつ）にかける。
(Jawaban: ⭕)

46. 共同（きょうどう）作業（さぎょう）を行（おこな）う場合（ばあい）は、声（こえ）を掛（か）け、合図（あいず）をして確認（かくにん）をする。
(Jawaban: ⭕)

47. 充電中（じゅうでんちゅう）のバッテリは、水素（すいそ）ガスを発生（はっせい）するので、絶対（ぜったい）に火気（かき）を近（ちか）づけない。
(Jawaban: ⭕)

48. ディーゼルエンジンの燃料（ねんりょう）は、軽油（けいゆ）です。
(Jawaban: ⭕)

49. 冷却装置（れいきゃくそうち）のラジエータは、ファンで温（あたた）めます。
[ada gambar]
(Jawaban: ❌)

50. Ａは、油圧式（ゆあつしき）ブレーキです。
[ada gambar]
(Jawaban: ⭕)

51. Ａは、クラッチです。
[ada gambar]
(Jawaban: ⭕)

52. Ａは、プロペラ・シャフトです。
[ada gambar]
(Jawaban: ⭕)

53. Ａは、カムシャフトです。
[ada gambar]
(Jawaban: ⭕)

54. ブレーキ・フルード（brake fluid）は、MAX よりおおく入れます。
[ada gambar]
(Jawaban: ❌)

55. ブレーキ・ドラム（brake drum）は、ハンマー（hammer）で叩いて点検します。
[ada gambar]
(Jawaban: ❌)

56. ファン・ベルト（fan belt）は、ハンマー（hammer）で叩いて点検します。
[ada gambar]
(Jawaban: ❌)

57. イラストは、ドライバー（screwdriver）の正しい使い方です。
[ada gambar]
(Jawaban: ❌)

58. ペンチ（pliers / cutting pliers）は、イラストのように使います。
[ada gambar]
(Jawaban: ❌)

59. バイス（vice）は、ハンマー（hammer）で締めます。
[ada gambar]
(Jawaban: ❌)

60. タイヤ・ゲージ（tire pressure gauge）で、タイヤの空気圧を測定します。
(Jawaban: ⭕)

61. デプス・ゲージ（depth gauge）で、タイヤの空気圧を測定します。
(Jawaban: ❌)

62. ハンマー（hammer）は、イラストのように使います。
[ada gambar]
(Jawaban: ❌)

63. けがを防ぐために帽子（ぼうし）をかぶり、安全靴（あんぜんくつ）をはきます。
(Jawaban: ⭕)

64. フロアにこぼれたオイル（oil）は、すぐに拭（ふ）きます。
(Jawaban: ⭕)

65. 1kgのガソリン（gasoline）を燃焼（ねんしょう）させるのに必要（ひつよう）な空気量（くうきりょう）は、理論上（りろんじょう）約（やく）10kgとされている。
(Jawaban: ❌)

66. ジーゼル・ノック（diesel knock）は、噴射時期（ふんしゃじき）が早過（はやす）ぎるときや圧縮圧力（あっしゅくあつりょく）が低（ひく）いときなどに発生（はっせい）しやすい。
(Jawaban: ⭕)

67. シリンダ・ヘッド（cylinder head）は、鋳鉄製（ちゅうてつせい）のものが用（もち）いられている。
(Jawaban: ❌)

68. 直接噴射式（ちょくせつふんしゃしき）の特徴（とくちょう）は、燃焼圧力（ねんしょうあつりょく）が低（ひく）いので、運転中（うんてんちゅう）の騒音（そうおん）・振動（しんどう）が小（ちい）さくなる傾向（けいこう）がある。
(Jawaban: ❌)

69. 潤滑装置（じゅんかつそうち）の潤滑方式（じゅんかつほうしき）は、オイル・ポンプ（oil pump）から圧送（あっそう）されたオイル（oil）の全（すべ）てをろ過（か）して各潤滑部（かくじゅんかつぶ）に供給（きょうきゅう）する全流（ぜんりゅう）ろ過（か）圧送式（あっそうしき）が用（もち）いられている。
(Jawaban: ⭕)

70. ウォータ・ポンプ（water pump）は、冷却水（れいきゃくすい）を強制的（きょうせいてき）に循環（じゅんかん）させるためのものである。
(Jawaban: ⭕)

71. インジェクタ（injector）は、燃料（ねんりょう）を噴射（ふんしゃ）するもので、一般（いっぱん）にニードル・バルブ（needle valve）、プランジャ（plunger）及（およ）びソレノイド・コイル（solenoid coil）などで構成（こうせい）されている。
(Jawaban: ⭕)

72. N型半導体（がたはんどうたい）は、自由電子（じゆうでんし）が多（おお）くあるようにつくられた不純物半導体（ふじゅんぶつはんどうたい）をいう。
(Jawaban: ❌)

73. オルタネータ（alternator）は、ロータ・コイル（rotor coil）に電気（でんき）を供給（きょうきゅう）する機構（きこう）から、ブラシ型（brush type）とブラシレス型（brushless type）に分類（ぶんるい）される。
(Jawaban: ⭕)

74. クラッチ・ディスク（clutch disc）は、一般（いっぱん）に複板式（ふくばんしき）クラッチ（clutch）である。
(Jawaban: ❌)

75. プロペラ・シャフト（propeller shaft）は、トランスミッション（transmission）の動力（どうりょく）をリヤ・アクスル（rear axle）へ伝（つた）える。
(Jawaban: ⭕)

76. Aは、ナックル・スピンドル（knuckle spindle）である。
[ada gambar]
(Jawaban: ⭕)

77. リーフ・スプリング（leaf spring）のばね定数（ていすう）は、スパン（span）の長（なが）さ、リーフ（leaf）の幅（はば）、厚（あつ）さ、枚数（まいすう）及（およ）び材質（ざいしつ）などにより定（さだ）まる。
(Jawaban: ⭕)

78. Aは、ボール・ナット（ball nut）である。
[ada gambar]
(Jawaban: ⭕)

79. ディスク・ホイール（disc wheel）には、一般に、鋼製（こうせい）ホイールと軽合金製（けいごうきんせい）ホイールがある。
(Jawaban: ⭕)

80. 図（ず）のAは、フロント・ホイール・アライメント（front wheel alignment）のキャスタ（caster）である。
[ada gambar]
(Jawaban: ⭕)

81. 油圧式（ゆあつしき）ブレーキ（brake）は、一般（いっぱん）に大型（おおがた）トラック（large sized truck）などに用（もち）いられている。
(Jawaban: ❌)

82. ブレーキ液（brake fluid）は、液圧系（えきあつけい）に水（みず）が入（はい）ると沸点（ふってん）が低下（ていか）し、フェード（fade）現象（げんしょう）発生（はっせい）の原因（げんいん）となるので、洗車（せんしゃ）の際（さい）などは注意（ちゅうい）する。
(Jawaban: ❌)

83. 図（ず）のAは、バーニヤ（vernier）である。
[ada gambar]
(Jawaban: ⭕)

84. シックネス・ゲージ（thickness gauge）のリーフ（leaf）を隙間（すきま）に入れて、やや抵抗（ていこう）を感（かん）じながら抜（ぬ）き差（さ）しできるときのリーフ（leaf）の厚（あつ）さを、測定値（そくていち）とする。
(Jawaban: ⭕)

85. コンプレッション・ゲージ（compression gauge）の測定範囲（そくていはんい）は、一般にガソリン・エンジン用では0〜7MPa、ジーゼル・エンジン用では0〜2.5MPaである。
(Jawaban: ❌)

86. ギヤ・オイル（gear oil）は、鉱物油（こうぶつゆ）や合成油（ごうせいゆ）に、各種（かくしゅ）添加剤（てんかざい）を加（くわ）えて耐水性（たいすいせい）、耐圧性（たいあつせい）、粘着性（ねんちゃくせい）などを向上（こうじょう）させたオイルである。
(Jawaban: ⭕)

87. シャシ・グリース（chassis grease）は、耐水性（たいすいせい）、耐圧性（たいあつせい）、粘着性（ねんちゃくせい）などに優（すぐ）れている。
(Jawaban: ⭕)

88. クラッチ・ペダル（clutch pedal）の高（たか）さが規定値（きていち）を外（はず）れていたので、ロッド（rod）やワイヤ（wire）などを調整（ちょうせい）した。
(Jawaban: ❌)

89. ホイール（wheel）の損傷（そんしょう）について、ホイール・ナット（wheel nut）が当（あ）たるテーパー（taper）面（めん）の磨耗（まもう）及（およ）び変形（へんけい）の有無（うむ）を点検（てんけん）した。
(Jawaban: ⭕)

90. ドライブ・シャフト（drive shaft）取（と）り付（つ）けナット（nut）に緩（ゆる）みがないか、点検（てんけん）した。
(Jawaban: ⭕)

91. ステアリング・ホイール（steering wheel）にがたがあったため、ステアリング・ホイール（steering wheel）の各（かく）取（と）り付（つ）け部（ぶ）の緩（ゆる）みを点検（てんけん）した。
(Jawaban: ⭕)

92. ブレーキ・ペダル（brake pedal）を踏（ふ）み込（こ）んだとき、踏（ふ）み代（しろ）が増加（ぞうか）していたので、ブレーキ液（brake fluid）を補充（ほじゅう）した。
(Jawaban: ❌)

93. 冷却水（れいきゃくすい）の量（りょう）をサブタンク（sub tank）で点検（てんけん）したところ、不足（ふそく）していたので、規定（きてい）のレベル（level）まで補充（ほじゅう）した。
(Jawaban: ⭕)

94. オイル・フィルタ（oil filter）は、エレメント（element）の汚（よご）れや、取（と）り付（つ）け部（ぶ）からのオイル（oil）漏（も）れについて点検（てんけん）する。
(Jawaban: ⭕)
`;

const questions = [];

const lines = rawText.split('\\n');
let currentQ = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  
  const match = line.match(/^(\\d+)\\.\\s+(.*)/);
  if (match) {
    if (currentQ) questions.push(currentQ);
    currentQ = {
      id: match[1],
      japanese: match[2],
      indonesian: '',
      english: '',
      options: ['O', 'X'],
      correctAnswer: 0,
      explanationJp: '',
      explanationId: '',
      explanationEn: ''
    };
  } else if (line.startsWith('(Jawaban:')) {
    if (currentQ) {
      currentQ.correctAnswer = line.includes('⭕') ? 0 : 1;
    }
  } else if (line === '[ada gambar]') {
    if (currentQ) {
      currentQ.hasImage = true;
    }
  } else if (currentQ && !line.startsWith('(') && !line.startsWith('[')) {
    currentQ.japanese += ' ' + line;
  }
}
if (currentQ) questions.push(currentQ);

const imageFiles = fs.readdirSync('./public/regular');

const finalQuestions = questions.map(q => {
  const qObj = {
    id: "q" + q.id,
    japanese: q.japanese,
    indonesian: "Soal Regulasi SSW",
    english: "SSW Regulation Question",
    options: ["O", "X"],
    correctAnswer: q.correctAnswer,
    explanationJp: "",
    explanationId: "",
    explanationEn: ""
  };
  
  // Find image
  const imgNamePng = "t" + q.id + ".png";
  const imgNameJpg = "t" + q.id + ".jpg";
  const imgNameAlt = q.id + ".jpg";
  const imgNameAlt2 = q.id + ".png";
  
  let imgUrl = undefined;
  if (imageFiles.includes(imgNamePng)) imgUrl = "/regular/" + imgNamePng;
  else if (imageFiles.includes(imgNameJpg)) imgUrl = "/regular/" + imgNameJpg;
  else if (imageFiles.includes(imgNameAlt)) imgUrl = "/regular/" + imgNameAlt;
  else if (imageFiles.includes(imgNameAlt2)) imgUrl = "/regular/" + imgNameAlt2;
  else if (q.hasImage) {
    // If it says it has image but uses standard naming
    imgUrl = "/regular/" + q.id + ".jpg"; 
  }
  
  if (imgUrl) {
    qObj.imageUrl = imgUrl;
  }
  
  return qObj;
});

// Add questions 95-102
finalQuestions.push({
  id: "q95",
  japanese: "シリンダ・ヘッドの取り外しについて、注意することは、どれか。",
  indonesian: "Saat melepas cylinder head, apa yang harus diperhatikan?",
  english: "When removing the cylinder head, what should be noted?",
  options: [
    "シリンダ・ヘッド・ガスケットは、交換しないので取り外しに注意する。",
    "シリンダ・ヘッド・ボルトは、長さや太さが違うものがあるので、組み立て時に分かるように注意する。"
  ],
  correctAnswer: 1,
  explanationJp: "",
  explanationId: "",
  explanationEn: ""
});

finalQuestions.push({
  id: "q96",
  japanese: "シリンダ・ヘッドの取り付けについて、注意することは、どれか。",
  indonesian: "Saat memasang cylinder head, apa yang harus diperhatikan?",
  english: "When installing the cylinder head, what should be noted?",
  options: [
    "シリンダ・ブロックのボルト穴にたまった冷却水やオイルなどは、こぼさないように注意する。",
    "シリンダ・ヘッド・ボルトのねじ部に薄くオイルを塗る。"
  ],
  correctAnswer: 1,
  explanationJp: "",
  explanationId: "",
  explanationEn: ""
});

finalQuestions.push({
  id: "q97",
  japanese: "シリンダ・ヘッド・ボルトを締め付ける正しい順番は、どれか。",
  indonesian: "Urutan yang benar untuk mengencangkan baut cylinder head adalah?",
  english: "Which is the correct order to tighten the cylinder head bolts?",
  options: ["Opsi 1", "Opsi 2"],
  optionImages: ["/regular/p97a.jpg", "/regular/p97b.jpg"],
  correctAnswer: 0,
  explanationJp: "",
  explanationId: "",
  explanationEn: ""
});

finalQuestions.push({
  id: "q98",
  japanese: "バッテリの端子電圧の測定の準備について、正しいものはどれか。",
  indonesian: "Persiapan yang benar untuk mengukur tegangan terminal baterai adalah?",
  english: "Which is the correct preparation for measuring battery terminal voltage?",
  options: [
    "プローブの赤色は、測定用ターミナルの「＋」に取り付ける。",
    "プローブの赤色は、測定用ターミナルの「－」に取り付ける。"
  ],
  correctAnswer: 0,
  explanationJp: "",
  explanationId: "",
  explanationEn: ""
});

finalQuestions.push({
  id: "q99",
  japanese: "マイクロメータは、どれか。",
  indonesian: "Manakah yang merupakan mikrometer?",
  english: "Which one is a micrometer?",
  options: ["Opsi 1", "Opsi 2"],
  optionImages: ["/regular/p99a.jpg", "/regular/p99b.jpg"],
  correctAnswer: 0,
  explanationJp: "",
  explanationId: "",
  explanationEn: ""
});

finalQuestions.push({
  id: "q100",
  japanese: "バルブ・ステムの外径は、どこか。",
  indonesian: "Di manakah diameter luar valve stem?",
  english: "Where is the outer diameter of the valve stem?",
  options: ["Opsi 1", "Opsi 2"],
  optionImages: ["/regular/p100a.jpg", "/regular/p100b.jpg"],
  correctAnswer: 0,
  explanationJp: "",
  explanationId: "",
  explanationEn: ""
});

finalQuestions.push({
  id: "q101",
  japanese: "マイクロメータによるバルブ・ステムの外径の測定値について、正しいものは、どれか。",
  indonesian: "Nilai pengukuran diameter luar valve stem dengan mikrometer yang benar adalah?",
  english: "Which is the correct measurement of the valve stem's outer diameter using a micrometer?",
  options: ["5.85mm", "5.35mm"],
  imageUrl: "/regular/p101.jpg",
  correctAnswer: 0,
  explanationJp: "",
  explanationId: "",
  explanationEn: ""
});

finalQuestions.push({
  id: "q102",
  japanese: "ノギス測定の結果はどうですか？",
  indonesian: "Bagaimana hasil pengukuran jangka sorong?",
  english: "What is the result of the vernier caliper measurement?",
  options: ["09.65mm", "11.65mm"],
  imageUrl: "/regular/p102.jpg",
  correctAnswer: 1,
  explanationJp: "",
  explanationId: "",
  explanationEn: ""
});

const tsCode = "export type QuestionType = {\n" +
"  id: string;\n" +
"  japanese: string;\n" +
"  indonesian: string;\n" +
"  english: string;\n" +
"  options: string[];\n" +
"  optionsIndonesian?: string[];\n" +
"  optionsEnglish?: string[];\n" +
"  optionImages?: string[];\n" +
"  correctAnswer: number;\n" +
"  explanationJp: string;\n" +
"  explanationId: string;\n" +
"  explanationEn: string;\n" +
"  imageUrl?: string;\n" +
"};\n\n" +
"export const REGULAR_QUESTIONS: QuestionType[] = " + JSON.stringify(finalQuestions, null, 2) + ";\n";

fs.writeFileSync('./src/lib/questions-regular.ts', tsCode);
console.log('Done generating regular questions');
