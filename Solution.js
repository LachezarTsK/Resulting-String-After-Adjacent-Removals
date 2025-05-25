
class Util {
    static ALPHABET_SIZE = 26;
    static ASCII_SMALL_CASE_A = 97;
    static NO_UNPAIRED_LETTERS = -1;
}

/**
 * @param {string} s
 * @return {string}
 */
var resultingString = function (s) {
    const input = s.split('');
    let indexUnpaired = Util.NO_UNPAIRED_LETTERS;

    for (let letter of input) {
        if (indexUnpaired === Util.NO_UNPAIRED_LETTERS || !isPairForRemoval(input[indexUnpaired].codePointAt(0), letter.codePointAt(0))) {
            ++indexUnpaired;
            input[indexUnpaired] = letter;
            continue;
        }
        --indexUnpaired;
    }

    return input.slice(0, indexUnpaired + 1).join('');
};

/**
 * @param {number(ASCII)} letter
 * @return {number(ASCII)}
 */
function getNextLetter(letter) {
    return (Util.ASCII_SMALL_CASE_A + (letter - Util.ASCII_SMALL_CASE_A + 1) % Util.ALPHABET_SIZE);
}

/**
 * @param {number(ASCII)} letter
 * @return {number(ASCII)}
 */
function  getPreviousLetter(letter) {
    return (Util.ASCII_SMALL_CASE_A + (letter - Util.ASCII_SMALL_CASE_A - 1 + Util.ALPHABET_SIZE) % Util.ALPHABET_SIZE);
}

/**
 * @param {number(ASCII)} unpairedLetter
 * @param {number(ASCII)} currentLetter
 * @return {boolean}
 */
function isPairForRemoval(unpairedLetter, currentLetter) {
    return (getNextLetter(unpairedLetter) === currentLetter) || (getPreviousLetter(unpairedLetter) === currentLetter);
}
