using System;

class Program
{
    static string ReverseStringWithoutWordsReversal(string inputString)
    {
        // Split the input string into individual words using space as the separator
        string[] words = inputString.Split(' ');

        // Reverse the array of words
        Array.Reverse(words);

        // Join the reversed words back into a single string with space as the separator
        string reversedString = string.Join(" ", words);

        return reversedString;
    }

    static void Main()
    {
        string inputStr1 = "The weather is so sunny nowadays";
        string outputStr1 = ReverseStringWithoutWordsReversal(inputStr1);
        Console.WriteLine(outputStr1);

        string inputStr2 = "Life is so beautiful";
        string outputStr2 = ReverseStringWithoutWordsReversal(inputStr2);
        Console.WriteLine(outputStr2);
    }
}
