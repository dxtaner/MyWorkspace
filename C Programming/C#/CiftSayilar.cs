using System;

namespace Example
{
    class Program
    {
        static void Main()
        {
            Console.Write("Pozitif bir sayı girin (n): ");
            if (int.TryParse(Console.ReadLine(), out int n) && n > 0)
            {
                int[] sayilar = new int[n];

                for (int i = 0; i < n; i++)
                {
                    Console.Write($"{i + 1}. pozitif sayıyı girin: ");
                    if (int.TryParse(Console.ReadLine(), out int sayi) && sayi > 0)
                    {
                        sayilar[i] = sayi;
                    }
                    else
                    {
                        Console.WriteLine("Geçersiz giriş! Pozitif bir sayı girin.");
                        i--; // Hatalı giriş yaptıklarında sayacı geri al
                    }
                }

                Console.WriteLine("Çift sayılar:");
                foreach (int sayi in sayilar)
                {
                    if (sayi % 2 == 0)
                    {
                        Console.WriteLine(sayi);
                    }
                }
            }
            else
            {
                Console.WriteLine("Geçersiz giriş! Pozitif bir sayı girin.");
            }
        }
    }
}
