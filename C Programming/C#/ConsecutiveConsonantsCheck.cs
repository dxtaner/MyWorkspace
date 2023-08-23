using System;

namespace ConsecutiveConsonantsCheck
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = "Merhaba Taner Özer";
            bool result = CheckConsecutiveConsonants(input);
            Console.WriteLine(result);
        }

        static bool CheckConsecutiveConsonants(string str)
        {
            for (int i = 0; i < str.Length - 1; i++)
            {
                char currentChar = str[i];
                char nextChar = str[i + 1];

                if (!IsVowel(currentChar) && !IsVowel(nextChar))
                {
                    return true;
                }
            }

            return false;
        }

        static bool IsVowel(char c)
        {
            string vowels = "aeiouAEIOU";
            return vowels.Contains(c.ToString()); // Char'ı string'e dönüştürüyoruz.
        }
    }
}
