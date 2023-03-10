int[] dizi = { 2, 7, 99, 15, 13, 3, 22, 42, 21 };
int temp;

for (int i = 0; i < dizi.Length - 1; i++)
{
    for (int j = i + 1; j < dizi.Length; j++)
    {
        if (dizi[i] > dizi[j])
        {
            temp = dizi[i];
            dizi[i] = dizi[j];
            dizi[j] = temp;
        }
    }
}

foreach (int eleman in dizi)
{
    Console.Write(eleman + " ");
}
