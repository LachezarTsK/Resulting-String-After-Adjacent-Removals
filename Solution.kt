
class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
        const val NO_UNPAIRED_LETTERS = -1
    }

    fun resultingString(s: String): String {
        val input = s.toCharArray()
        var indexUnpaired = NO_UNPAIRED_LETTERS

        for (letter in input) {
            if (indexUnpaired == NO_UNPAIRED_LETTERS || !isPairForRemoval(input[indexUnpaired], letter)) {
                ++indexUnpaired
                input[indexUnpaired] = letter
                continue
            }
            --indexUnpaired
        }

        return String(input.copyOfRange(0, indexUnpaired + 1))
    }

    private fun getNextLetter(letter: Char): Char {
        return ('a' + (letter - 'a' + 1) % ALPHABET_SIZE).toChar()
    }

    private fun getPreviousLetter(letter: Char): Char {
        return ('a' + (letter - 'a' - 1 + ALPHABET_SIZE) % ALPHABET_SIZE).toChar()
    }

    private fun isPairForRemoval(unpairedLetter: Char, currentLetter: Char): Boolean {
        return (getNextLetter(unpairedLetter) == currentLetter) || (getPreviousLetter(unpairedLetter) == currentLetter)
    }
}
