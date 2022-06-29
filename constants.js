export {
    KATAKANA_START,
    KATAKANA_END
}

const HIRAGANA_START = 0x3041;
const HIRAGANA_END = 0x3096;
const KATAKANA_START = 0x30a1;
const KATAKANA_END = 0x30fc;
const KANJI_START = 0x4e00;
const KANJI_END = 0x9faf;
const PROLONGED_SOUND_MARK = 0x30fc;
const KANA_SLASH_DOT = 0x30fb;

const ZENKAKU_NUMBERS = [0xff10, 0xff19];
const ZENKAKU_PUNCTUATION_1 = [0xff01, 0xff0f];
const ZENKAKU_PUNCTUATION_2 = [0xff1a, 0xff1f];
const ZENKAKU_PUNCTUATION_3 = [0xff3b, 0xff3f];
const ZENKAKU_PUNCTUATION_4 = [0xff5b, 0xff60];
const ZENKAKU_SYMBOLS_CURRENCY = [0xffe0, 0xffee];

const HIRAGANA_CHARS = [0x3040, 0x309f];
const KATAKANA_CHARS = [0x30a0, 0x30ff];
const HANKAKU_KATAKANA = [0xff66, 0xff9f];
const KATAKANA_PUNCTUATION = [0x30fb, 0x30fc];
const KANA_PUNCTUATION = [0xff61, 0xff65];
const CJK_SYMBOLS_PUNCTUATION = [0x3000, 0x303f];
const COMMON_CJK = [0x4e00, 0x9fff];
const RARE_CJK = [0x3400, 0x4dbf];