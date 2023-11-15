using System;
using System.Collections.Generic;
using System.Linq;

class Tahta
{
    public string Ad { get; set; }
    public List<Kart> TodoLine { get; set; }
    public List<Kart> InProgressLine { get; set; }
    public List<Kart> DoneLine { get; set; }
    public Dictionary<string, string> TakımÜyeleri { get; set; } = new Dictionary<string, string>();

    public Tahta(string ad)
    {
        Ad = ad;
        TodoLine = new List<Kart>();
        InProgressLine = new List<Kart>();
        DoneLine = new List<Kart>();
    }

    public void KartEkle(Kart kart)
    {
        TodoLine.Add(kart);
    }

    public void TahtaListele()
    {
        Console.WriteLine($"TODO Line\n************************");
        foreach (var kart in TodoLine)
        {
            kart.KartBilgileriniYazdir();
        }
        Console.WriteLine($"IN PROGRESS Line\n************************");
        foreach (var kart in InProgressLine)
        {
            kart.KartBilgileriniYazdir();
        }
        Console.WriteLine($"DONE Line\n************************");
        foreach (var kart in DoneLine)
        {
            kart.KartBilgileriniYazdir();
        }
    }

    public void TakımÜyeleriEkle(string id, string isim)
    {
        TakımÜyeleri.Add(id, isim);
    }

    public List<Kart> KartSil(string kartBasligi)
    {
        List<Kart> silinecekKartlar = new List<Kart>();
        silinecekKartlar.AddRange(TodoLine.Where(k => k.Baslik == kartBasligi));
        silinecekKartlar.AddRange(InProgressLine.Where(k => k.Baslik == kartBasligi));
        silinecekKartlar.AddRange(DoneLine.Where(k => k.Baslik == kartBasligi));

        return silinecekKartlar;
    }

    public void KartSil(Kart kart)
    {
        if (TodoLine.Contains(kart))
        {
            TodoLine.Remove(kart);
        }
        else if (InProgressLine.Contains(kart))
        {
            InProgressLine.Remove(kart);
        }
        else if (DoneLine.Contains(kart))
        {
            DoneLine.Remove(kart);
        }
    }

    public List<Kart> KartBul(string kartBasligi)
    {
        List<Kart> bulunanKartlar = new List<Kart>();
        bulunanKartlar.AddRange(TodoLine.Where(k => k.Baslik == kartBasligi));
        bulunanKartlar.AddRange(InProgressLine.Where(k => k.Baslik == kartBasligi));
        bulunanKartlar.AddRange(DoneLine.Where(k => k.Baslik == kartBasligi));

        return bulunanKartlar;
    }

    public void KartTasi(Kart kart, Line hedefLine)
    {
        if (TodoLine.Contains(kart))
        {
            TodoLine.Remove(kart);
        }
        else if (InProgressLine.Contains(kart))
        {
            InProgressLine.Remove(kart);
        }
        else if (DoneLine.Contains(kart))
        {
            DoneLine.Remove(kart);
        }

        switch (hedefLine)
        {
            case Line.TODO:
                TodoLine.Add(kart);
                break;
            case Line.IN_PROGRESS:
                InProgressLine.Add(kart);
                break;
            case Line.DONE:
                DoneLine.Add(kart);
                break;
        }
    }
}
