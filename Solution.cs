
using System;
using System.Collections.Generic;

public class Solution
{
    private static readonly int ALPHABET_SIZE = 26;
    private static readonly int NO_UNPAIRED_LETTERS = -1;

    public string ResultingString(string s)
    {
        char[] input = s.ToCharArray();
        int indexUnpaired = NO_UNPAIRED_LETTERS;

        foreach (char letter in input)
        {
            if (indexUnpaired == NO_UNPAIRED_LETTERS || !IsPairForRemoval(input[indexUnpaired], letter))
            {
                ++indexUnpaired;
                input[indexUnpaired] = letter;
                continue;
            }
            --indexUnpaired;
        }

        return new string(input.Take<char>(indexUnpaired + 1).ToArray());
    }

    private char GetNextLetter(char letter)
    {
        return (char)('a' + (letter - 'a' + 1) % ALPHABET_SIZE);
    }

    private char GetPreviousLetter(char letter)
    {
        return (char)('a' + (letter - 'a' - 1 + ALPHABET_SIZE) % ALPHABET_SIZE);
    }

    private bool IsPairForRemoval(char unpairedLetter, char currentLetter)
    {
        return (GetNextLetter(unpairedLetter) == currentLetter) || (GetPreviousLetter(unpairedLetter) == currentLetter);
    }
}
