
class Util {
    static ALPHABET_SIZE = 26;
    static ASCII_SMALL_CASE_A = 97;
    static NO_UNPAIRED_LETTERS = -1;
}

function resultingString(s: string): string {
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

function getNextLetter(letter: number/*ASCII*/): number/*ASCII*/ {
    return (Util.ASCII_SMALL_CASE_A + (letter - Util.ASCII_SMALL_CASE_A + 1) % Util.ALPHABET_SIZE);
}

function getPreviousLetter(letter: number/*ASCII*/): number/*ASCII*/ {
    return (Util.ASCII_SMALL_CASE_A + (letter - Util.ASCII_SMALL_CASE_A - 1 + Util.ALPHABET_SIZE) % Util.ALPHABET_SIZE);
}

function isPairForRemoval(unpairedLetter: number/*ASCII*/, currentLetter: number/*ASCII*/): boolean {
    return (getNextLetter(unpairedLetter) === currentLetter) || (getPreviousLetter(unpairedLetter) === currentLetter);
}
