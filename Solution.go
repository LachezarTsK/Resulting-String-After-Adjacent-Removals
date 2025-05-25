
package main

const ALPHABET_SIZE = 26
const NO_UNPAIRED_LETTERS = -1

func resultingString(s string) string {
    input := []byte(s)
    var indexUnpaired = NO_UNPAIRED_LETTERS

    for _, letter := range input {
        if indexUnpaired == NO_UNPAIRED_LETTERS || !isPairForRemoval(input[indexUnpaired], letter) {
            indexUnpaired++
            input[indexUnpaired] = letter
            continue
        }
        indexUnpaired--
    }

    return string(input[:indexUnpaired + 1])
}

func getNextLetter(letter byte) byte {
    return ('a' + (letter - 'a' + 1) % ALPHABET_SIZE)
}

func getPreviousLetter(letter byte) byte {
    return ('a' + (letter - 'a' - 1 + ALPHABET_SIZE)%ALPHABET_SIZE)
}

func isPairForRemoval(unpairedLetter byte, currentLetter byte) bool {
    return (getNextLetter(unpairedLetter) == currentLetter) || (getPreviousLetter(unpairedLetter) == currentLetter)
}
