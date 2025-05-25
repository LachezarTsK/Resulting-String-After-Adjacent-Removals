
#include <string>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;
    static const int NO_UNPAIRED_LETTERS = -1;

public:
    string resultingString(string& input) const {
        int indexUnpaired = NO_UNPAIRED_LETTERS;

        for (const auto& letter : input) {
            if (indexUnpaired == NO_UNPAIRED_LETTERS || !isPairForRemoval(input[indexUnpaired], letter)) {
                ++indexUnpaired;
                input[indexUnpaired] = letter;
                continue;
            }
            --indexUnpaired;
        }

        return input.substr(0, indexUnpaired + 1);
    }

    char getNextLetter(char letter) const {
        return ('a' + (letter - 'a' + 1) % ALPHABET_SIZE);
    }

    char getPreviousLetter(char letter) const {
        return ('a' + (letter - 'a' - 1 + ALPHABET_SIZE) % ALPHABET_SIZE);
    }

    bool isPairForRemoval(char unpairedLetter, char currentLetter) const {
        return (getNextLetter(unpairedLetter) == currentLetter) || (getPreviousLetter(unpairedLetter) == currentLetter);
    }
};
