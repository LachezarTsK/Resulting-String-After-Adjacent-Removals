
import java.util.Arrays;

public class Solution {

    private static final int ALPHABET_SIZE = 26;
    private static final int NO_UNPAIRED_LETTERS = -1;

    public String resultingString(String s) {
        char[] input = s.toCharArray();
        int indexUnpaired = NO_UNPAIRED_LETTERS;

        for (char letter : input) {
            if (indexUnpaired == NO_UNPAIRED_LETTERS || !isPairForRemoval(input[indexUnpaired], letter)) {
                ++indexUnpaired;
                input[indexUnpaired] = letter;
                continue;
            }
            --indexUnpaired;
        }

        return String.valueOf(Arrays.copyOfRange(input, 0, indexUnpaired + 1));
    }

    private char getNextLetter(char letter) {
        return (char) ('a' + (letter - 'a' + 1) % ALPHABET_SIZE);
    }

    private char getPreviousLetter(char letter) {
        return (char) ('a' + (letter - 'a' - 1 + ALPHABET_SIZE) % ALPHABET_SIZE);
    }

    private boolean isPairForRemoval(char unpairedLetter, char currentLetter) {
        return (getNextLetter(unpairedLetter) == currentLetter) || (getPreviousLetter(unpairedLetter) == currentLetter);
    }
}
