import { KATAKANA_LIST } from "./kanaList.js";
import { single, double, triple, quadruple } from "./mappings.js";
import { KATAKANA_START, KATAKANA_END } from "./constants.js";


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
            else if (letter in single) {
                result += single[letter];
            } else {
                remember += letter;
                result += letter;
            }
        } else if (remember.length === 1) {
            let chunk = remember + letter;
            if (chunk in double) {
                result = result.slice(0, result.length - 1).concat(double[chunk]);
                remember = "";
            } else {
                remember = chunk;
                result += letter;
            }
        } else if (remember.length === 2) {
            let chunk = remember + letter;
            if (chunk in triple) {
                result = result.slice(0, result.length - 2).concat(triple[chunk]);
                remember = "";
            } else {
                remember = chunk;
                result += letter;
            }
        } else if (remember.length === 3) {
            let chunk = remember + letter;
            if (chunk in quadruple) {
                result = result.slice(0, result.length - 3).concat(quadruple[chunk]);
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
        // const answer = document.getElementById("answer");
        answer.removeEventListener("keyup", changeInputToKatakana);
        answer.focus();
    });
    document.getElementById("katakana").addEventListener("change", e => {
        // const answer = document.getElementById("answer")
        answer.addEventListener("keyup", changeInputToKatakana);
        answer.focus();
    });
}