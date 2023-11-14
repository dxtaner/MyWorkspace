enum Buyukluk
{
    XS = 1,
    S = 2,
    M = 3,
    L = 4,
    XL = 5
}

enum Line
{
    TODO = 1,
    IN_PROGRESS = 2,
    DONE = 3
}

class Kart
{
    public string Baslik { get; set; }
    public string Icerik { get; set; }
    public string AtananKisi { get; set; }
    public Buyukluk Buyukluk { get; set; }
    public Line Line { get; set; }

    public Kart(string baslik, string icerik, string atananKisi, Buyukluk buyukluk)
    {
        Baslik = baslik;
        Icerik = icerik;
        AtananKisi = atananKisi;
        Buyukluk = buyukluk;
        Line = Line.TODO;
    }

    public void KartBilgileriniYazdir()
    {
        Console.WriteLine($"Başlık: {Baslik}");
        Console.WriteLine($"İçerik: {Icerik}");
        Console.WriteLine($"Atanan Kişi: {AtananKisi}");
        Console.WriteLine($"Büyüklük: {Buyukluk}");
        Console.WriteLine($"Line: {Line}");
        Console.WriteLine("************************");
    }
}
