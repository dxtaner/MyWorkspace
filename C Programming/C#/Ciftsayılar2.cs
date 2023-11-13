using System;

namespace Example
{
    class Program
    {
        static void Main()
        {
            Console.Write("Pozitif bir sayı (n) girin: ");
            if (int.TryParse(Console.ReadLine(), out int n) && n > 0)
            {
                Console.Write("Pozitif bir sayı (m) girin: ");
                if (int.TryParse(Console.ReadLine(), out int m) && m > 0)
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

                    Console.WriteLine($"{m}'e tam bölünen veya eşit olan sayılar:");
                    foreach (int sayi in sayilar)
                    {
                        if (sayi % m == 0)
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
            else
            {
                Console.WriteLine("Geçersiz giriş! Pozitif bir sayı girin.");
            }
        }
    }
}