export {
    single_katakana,
    double_katakana,
    triple_katakana,
    quadruple_katakana,
    single_hiragana,
    double_hiragana,
    triple_hiragana,
    quadruple_hiragana
};

const single_katakana = {
    "а": "ア",
    "і": "イ",
    "у": "ウ",
    "е": "エ",
    "о": "オ",
    "я": "ヤ",
    "ю": "ユ",
    "-": "ー"
};

const double_katakana = {
    "ка": "カ",
    "кі": "キ",
    "ку": "ク",
    "ке": "ケ",
    "ко": "コ",
    "са": "サ",
    "ші": "シ",
    "су": "ス",
    "се": "セ",
    "со": "ソ",
    "та": "タ",
    "чі": "チ",
    "цу": "ツ",
    "те": "テ",
    "то": "ト",
    "на": "ナ",
    "ні": "ニ",
    "ну": "ヌ",
    "не": "ネ",
    "но": "ノ",
    "ха": "ハ",
    "хі": "ヒ",
    "фу": "フ",
    "хе": "ヘ",
    "хо": "ホ",
    "ма": "マ",
    "мі": "ミ",
    "му": "ム",
    "ме": "メ",
    "мо": "モ",
    "йо": "ヨ",
    "ра": "ラ",
    "рі": "リ",
    "ру": "ル",
    "ре": "レ",
    "ро": "ロ",
    "ва": "ワ",
    "во": "ヲ",
    "нн": "ン",
    "ґа": "ガ",
    "ґі": "ギ",
    "ґу": "グ",
    "ґе": "ゲ",
    "ґо": "ゴ",
    "да": "ダ",
    "ді": "ヂ",
    "ду": "ヅ",
    "де": "デ",
    "до": "ド",
    "ба": "バ",
    "бі": "ビ",
    "бу": "ブ",
    "бе": "ベ",
    "бо": "ボ",
    "па": "パ",
    "пі": "ピ",
    "пу": "プ",
    "пе": "ペ",
    "по": "ポ",
    "кя": "キャ",
    "кю": "キュ",
    "шя": "シャ",
    "шю": "シュ",
    "чя": "チャ",
    "чю": "チュ",
    "ня": "ニャ",
    "ню": "ニュ",
    "хя": "ヒャ",
    "хю": "ヒュ",
    "мя": "ミャ",
    "мю": "ミュ",
    "ря": "リャ",
    "рю": "リュ",
    "ґя": "ギャ",
    "ґю": "ギュ",
    "бя": "ビャ",
    "бю": "ビュ",
    "пя": "ピャ",
    "пю": "ピュ",
    "ві": "ウィ",
    "ве": "ウェ",
    "ше": "シェ",
    "че": "チェ",
    "ца": "ツァ",
    "ті": "ティ",
    "ту": "トュ",
    "це": "ツェ",
    "цо": "ツォ",
    "фа": "ファ",
    "фі": "フィ",
    "фе": "フェ",
    "фо": "フォ",
    "дю": "ヂュ",
    "ла": "ァ",
    "лі": "ィ",
    "лу": "ゥ",
    "ле": "ェ",
    "ло": "ォ",
    "ля": "ャ",
    "лю": "ュ"
}

const triple_katakana = {
    "дза": "ザ",
    "джі": "ジ",
    "дзу": "ズ",
    "дзе": "ゼ",
    "дзо": "ゾ",
    "кьо": "キョ",
    "шьо": "ショ",
    "чьо": "チョ",
    "ньо": "ニョ",
    "хьо": "ヒョ",
    "мьо": "ミョ",
    "рьо": "リョ",
    "ґьо": "ギョ",
    "джя": "ジャ",
    "джю": "ジュ",
    "бьо": "ビョ",
    "пьо": "ピョ",
    "дже": "ジェ",
    "льо": "ョ"
}

const quadruple_katakana = {
    "джьо": "ジョ"
}

const single_hiragana = {
    "а": "あ",
    "і": "い",
    "у": "う",
    "е": "え",
    "о": "お",
    "я": "や",
    "ю": "ゆ",
    "-": "ー"
};

const double_hiragana = {
    "ка": "か",
    "кі": "き",
    "ку": "く",
    "ке": "け",
    "ко": "こ",
    "са": "さ",
    "ші": "し",
    "су": "す",
    "се": "せ",
    "со": "そ",
    "та": "た",
    "чі": "ち",
    "цу": "つ",
    "те": "て",
    "то": "と",
    "на": "な",
    "ні": "に",
    "ну": "ぬ",
    "не": "ね",
    "но": "の",
    "ха": "は",
    "хі": "ひ",
    "фу": "ふ",
    "хе": "へ",
    "хо": "ほ",
    "ма": "ま",
    "мі": "み",
    "му": "む",
    "ме": "め",
    "мо": "も",
    "йо": "よ",
    "ра": "ら",
    "рі": "り",
    "ру": "る",
    "ре": "れ",
    "ро": "ろ",
    "ва": "わ",
    "во": "を",
    "нн": "ん",
    "ґа": "が",
    "ґі": "ぎ",
    "ґу": "げ",
    "ґе": "げ",
    "ґо": "ご",
    "да": "だ",
    "ді": "ぢ",
    "ду": "づ",
    "де": "で",
    "до": "ど",
    "ба": "ば",
    "бі": "び",
    "бу": "ぶ",
    "бе": "べ",
    "бо": "ぼ",
    "па": "ぱ",
    "пі": "ぴ",
    "пу": "ぷ",
    "пе": "ぺ",
    "по": "ぽ",
    "кя": "きゃ",
    "кю": "きゅ",
    "шя": "しゃ",
    "шю": "しゅ",
    "чя": "ちゃ",
    "чю": "ちゅ",
    "ня": "にゃ",
    "ню": "にゅ",
    "хя": "ひゃ",
    "хю": "ひゅ",
    "мя": "みゃ",
    "мю": "みゅ",
    "ря": "りゃ",
    "рю": "りゅ",
    "ґя": "ぎゃ",
    "ґю": "ぎゅ",
    "бя": "びゃ",
    "бю": "びゅ",
    "пя": "ぴゃ",
    "пю": "ぴゅ",
    "ві": "うぃ",
    "ве": "うぇ",
    "ше": "しぇ",
    "че": "ちぇ",
    "ца": "つぁ",
    "ті": "てぃ",
    "ту": "とゅ",
    "це": "つぇ",
    "цо": "つぉ",
    "фа": "ふぁ",
    "фі": "ふぃ",
    "фе": "ふぇ",
    "фо": "ふぉ",
    "дю": "ぢゅ",
    "ла": "ぁ",
    "лі": "ぃ",
    "лу": "ぅ",
    "ле": "ぇ",
    "ло": "ぉ",
    "ля": "ゃ",
    "лю": "ゅ"
}

const triple_hiragana = {
    "дза": "ざ",
    "джі": "じ",
    "дзу": "ず",
    "дзе": "ぜ",
    "дзо": "ぞ",
    "кьо": "きょ",
    "шьо": "しょ",
    "чьо": "ちょ",
    "ньо": "にょ",
    "хьо": "ひょ",
    "мьо": "みょ",
    "рьо": "りょ",
    "ґьо": "ぎょ",
    "джя": "じゃ",
    "джю": "じゅ",
    "бьо": "びょ",
    "пьо": "ぴょ",
    "дже": "じぇ",
    "льо": "ょ"
}

const quadruple_hiragana = {
    "джьо": "じょ"
}
