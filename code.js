import { KATAKANA_LIST } from "./kanaList.js";
import {
    single_katakana, double_katakana,
    triple_katakana, quadruple_katakana,
    single_hiragana, double_hiragana,
    triple_hiragana, quadruple_hiragana
} from "./mappings.js";
import {
    HIRAGANA_START, HIRAGANA_END,
    KATAKANA_START, KATAKANA_END
} from "./constants.js";


const isCharInRange = (char = "", start, end) => {
    if (char === "") return false;
    const code = char.charCodeAt(0);
    return start <= code && code <= end;
}

const changeToKatakana = (input) => {
    let result = "";
    let remember = "";
    input = input.replace("г", "ґ")
    for (let letter of Array.from(input)) {
        if (remember.length === 0) {
            if (isCharInRange(letter, KATAKANA_START, KATAKANA_END)) {
                result += letter;
            }
            else if (letter in single_katakana) {
                result += single_katakana[letter];
            } else {
                remember += letter;
                result += letter;
            }
        } else if (remember.length === 1) {
            let chunk = remember + letter;
            if (chunk in double_katakana) {
                result = result.slice(0, result.length - 1).concat(double_katakana[chunk]);
                remember = "";
            } else {
                remember = chunk;
                result += letter;
            }
        } else if (remember.length === 2) {
            let chunk = remember + letter;
            if (remember[0] === remember[1] && chunk.slice(1, 3) in double_katakana) {
                result = result.slice(0, result.length - 2).concat(`っ${double_katakana[chunk.slice(1, 3)]}`)
            } else if (chunk in triple_katakana) {
                result = result.slice(0, result.length - 2).concat(triple_katakana[chunk]);
                remember = "";
            } else {
                remember = chunk;
                result += letter;
            }
        } else if (remember.length === 3) {
            let chunk = remember + letter;
            if (remember[0] === remember[1] && chunk.slice(1, 4) in triple_katakana) {
                result = result.slice(0, result.length - 3).concat(`っ${triple_katakana[chunk.slice(1, 4)]}`)
            }
            if (chunk in quadruple_katakana) {
                result = result.slice(0, result.length - 3).concat(quadruple_hiragana[chunk]);
                remember = "";
            } else {
                remember = "";
            }
        } else {
            result += remember + letter;
        }
    }
    return result;
}

const changeToHiragana = (input) => {
    let result = "";
    let remember = "";
    input = input.replace("г", "ґ")
    for (let letter of Array.from(input)) {
        if (remember.length === 0) {
            if (isCharInRange(letter, HIRAGANA_START, HIRAGANA_END)) {
                result += letter;
            }
            else if (letter in single_hiragana) {
                result += single_hiragana[letter];
            } else {
                remember += letter;
                result += letter;
            }
        } else if (remember.length === 1) {
            let chunk = remember + letter;
            if (chunk in double_hiragana) {
                result = result.slice(0, result.length - 1).concat(double_hiragana[chunk]);
                remember = "";
            } else {
                remember = chunk;
                result += letter;
            }
        } else if (remember.length === 2) {
            let chunk = remember + letter;
            if (remember[0] === remember[1] && chunk.slice(1, 3) in double_hiragana) {
                result = result.slice(0, result.length - 2).concat(`っ${double_hiragana[chunk.slice(1, 3)]}`)
            } else if (chunk in triple_hiragana) {
                result = result.slice(0, result.length - 2).concat(triple_hiragana[chunk]);
                remember = "";
            } else {
                remember = chunk;
                result += letter;
            }
        } else if (remember.length === 3) {
            let chunk = remember + letter;
            if (remember[0] === remember[1] && chunk.slice(1, 4) in triple_hiragana) {
                result = result.slice(0, result.length - 3).concat(`っ${triple_hiragana[chunk.slice(1, 4)]}`)
            }
            if (chunk in quadruple_hiragana) {
                result = result.slice(0, result.length - 3).concat(quadruple_hiragana[chunk]);
                remember = "";
            } else {
                remember = "";
            }
        } else {
            result += remember + letter;
        }
    }
    return result;
}

const changeInputToKatakana = () => {
    const inputElem = document.getElementById("answer");
    inputElem.value = changeToKatakana(inputElem.value);
}

const changeInputToHiragana = () => {
    const inputElem = document.getElementById("answer");
    inputElem.value = changeToHiragana(inputElem.value);
}

const getRandomNumber = (number) => {
    return Math.floor(Math.random() * number);
}

const pickCharacter = () => {
    return KATAKANA_LIST[getRandomNumber(KATAKANA_LIST.length)];
}

const setQuestion = () => {
    const q = document.getElementById("question");
    q.innerText = pickCharacter();
}

const checkInput = () => {
    const answerField = document.getElementById("answer");
    const answer = answerField.value.replace("г", "ґ");
    const correctAnswer = document.getElementById("question").innerText;
    if (changeToKatakana(answer) === correctAnswer) {
        answerField.style.backgroundColor = "green";
    } else {
        answerField.style.backgroundColor = "red";
    }
}

const resetInput = () => {
    const answer = document.getElementById("answer");
    answer.value = "";
    answer.style.backgroundColor = "white";
}

window.onload = () => {
    document.getElementById("ukr").checked = true;
    const answer = document.getElementById("answer");
    answer.style.backgroundColor = "white";
    answer.focus();
    setQuestion();
    document.getElementById("answer").addEventListener("keyup", (e) => {
        if (e.code === "Enter") {
            if (document.getElementById("answer").style.backgroundColor === "white") {
                checkInput();
            } else {
                setQuestion();
                resetInput();
            }
        }
    });
    document.getElementById("ukr").addEventListener("change", e => {
        answer.removeEventListener("keyup", changeInputToKatakana);
        answer.removeEventListener("keyup", changeInputToHiragana);
        answer.focus();
    });
    document.getElementById("katakana").addEventListener("change", e => {
        answer.addEventListener("keyup", changeInputToKatakana);
        answer.removeEventListener("keyup", changeInputToHiragana);
        answer.focus();
    });
    document.getElementById("hiragana").addEventListener("change", e => {
        answer.addEventListener("keyup", changeInputToHiragana);
        answer.removeEventListener("keyup", changeInputToKatakana);
        answer.focus();
    });
}