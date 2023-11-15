using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        List<Tahta> tahtalar = new List<Tahta>();
        Tahta varsayilanTahta = new Tahta("Varsayılan Tahta");
        varsayilanTahta.TakımÜyeleriEkle("1", "John");
        varsayilanTahta.TakımÜyeleriEkle("2", "Jane");
        varsayilanTahta.TakımÜyeleriEkle("3", "Michael");
        varsayilanTahta.TakımÜyeleriEkle("4", "Emily");
        tahtalar.Add(varsayilanTahta);

        while (true)
        {
            Console.Clear();
            Console.WriteLine("TODO Uygulaması");
            Console.WriteLine("*******************************************");
            Console.WriteLine("Tahtalar:");

            for (int i = 0; i < tahtalar.Count; i++)
            {
                Console.WriteLine($"({i + 1}) {tahtalar[i].Ad}");
            }

            Console.WriteLine("*******************************************");
            Console.WriteLine("(1) Board Listelemek");
            Console.WriteLine("(2) Board'a Kart Eklemek");
            Console.WriteLine("(3) Board'dan Kart Silmek");
            Console.WriteLine("(4) Kart Taşımak");
            Console.WriteLine("*******************************************");
            Console.Write("Lütfen yapmak istediğiniz işlemi seçiniz: ");
            string secim = Console.ReadLine();

            if (secim == "1")
            {
                TahtaListele(tahtalar);
            }
            else if (secim == "2")
            {
                KartEkle(tahtalar);
            }
            else if (secim == "3")
            {
                KartSil(tahtalar);
            }
            else if (secim == "4")
            {
                KartTasima(tahtalar);
            }
            else
            {
                Console.WriteLine("Geçersiz seçim, lütfen tekrar deneyin.");
            }

            Console.WriteLine("Devam etmek için bir tuşa basın...");
            Console.ReadKey();
        }
    }

    static void TahtaListele(List<Tahta> tahtalar)
    {
        Console.WriteLine("Board Listeleme");
        Console.Write("Tahta Adı: ");
        string tahtaAdi = Console.ReadLine();
        Tahta hedefTahta = tahtalar.FirstOrDefault(t => t.Ad == tahtaAdi);

        if (hedefTahta == null)
        {
            Console.WriteLine("Belirtilen tahta bulunamadı.");
        }
        else
        {
            hedefTahta.TahtaListele();
        }
    }

    static void KartEkle(List<Tahta> tahtalar)
    {
        Console.WriteLine("Board'a Kart Eklemek");
        Console.Write("Tahta Adı: ");
        string tahtaAdi = Console.ReadLine();
        Tahta hedefTahta = tahtalar.FirstOrDefault(t => t.Ad == tahtaAdi);

        if (hedefTahta == null)
        {
            Console.WriteLine("Belirtilen tahta bulunamadı.");
        }
        else
        {
            Console.Write("Başlık: ");
            string baslik = Console.ReadLine();
            Console.Write("İçerik: ");
            string icerik = Console.ReadLine();
            Console.Write("Büyüklük Seçiniz -> XS(1), S(2), M(3), L(4), XL(5): ");
            string buyuklukSecim = Console.ReadLine();
            Console.Write("Kişi ID: ");
            string atananKisiID = Console.ReadLine();

            if (Enum.TryParse(buyuklukSecim, out Buyukluk buyukluk) && hedefTahta.TakımÜyeleri.ContainsKey(atananKisiID))
            {
                Kart yeniKart = new Kart(baslik, icerik, atananKisiID, buyukluk);
                hedefTahta.KartEkle(yeniKart);
                Console.WriteLine("Kart başarıyla eklendi.");
            }
            else
            {
                Console.WriteLine("Hatalı girişler yaptınız! Kart eklenemedi.");
            }
        }
    }

    static void KartSil(List<Tahta> tahtalar)
    {
        Console.WriteLine("Board'dan Kart Silmek");
        Console.Write("Tahta Adı: ");
        string tahtaAdi = Console.ReadLine();
        Tahta hedefTahta = tahtalar.FirstOrDefault(t => t.Ad == tahtaAdi);

        if (hedefTahta == null)
        {
            Console.WriteLine("Belirtilen tahta bulunamadı.");
            return;
        }

        Console.Write("Kart Başlığı: ");
        string kartBasligi = Console.ReadLine();

        List<Kart> silinecekKartlar = hedefTahta.KartSil(kartBasligi);

        if (silinecekKartlar.Count == 0)
        {
            Console.WriteLine("Aradığınız kartı tahtada bulunamadı.");
            return;
        }

        if (silinecekKartlar.Count == 1)
        {
            Kart silinecekKart = silinecekKartlar[0];
            Console.WriteLine($"{silinecekKart.Baslik} başlıklı kartı silmek istiyor musunuz? (y/n)");
            string onay = Console.ReadLine();

            if (onay.ToLower() == "y")
            {
                hedefTahta.KartSil(silinecekKart);
                Console.WriteLine($"{silinecekKart.Baslik} başlıklı kart silindi.");
            }
            else
            {
                Console.WriteLine("Kart silme işlemi iptal edildi.");
            }
        }
        else
        {
            Console.WriteLine("Aynı başlığa sahip birden fazla kart bulundu. Hangi kartı silmek istersiniz?");
            for (int i = 0; i < silinecekKartlar.Count; i++)
            {
                Console.WriteLine($"({i + 1}) {silinecekKartlar[i].Baslik}");
            }
            Console.Write("Seçiminizi yapınız: ");
            if (int.TryParse(Console.ReadLine(), out int secilenIndex) && secilenIndex >= 1 && secilenIndex <= silinecekKartlar.Count)
            {
                Kart secilenKart = silinecekKartlar[secilenIndex - 1];
                Console.WriteLine($"{secilenKart.Baslik} başlıklı kartı silmek istiyor musunuz? (y/n)");
                string onay = Console.ReadLine();

                if (onay.ToLower() == "y")
                {
                    hedefTahta.KartSil(secilenKart);
                    Console.WriteLine($"{secilenKart.Baslik} başlıklı kart silindi.");
                }
                else
                {
                    Console.WriteLine("Kart silme işlemi iptal edildi.");
                }
            }
            else
            {
                Console.WriteLine("Geçersiz seçim.");
            }
        }
    }

    static void KartTasima(List<Tahta> tahtalar)
    {
        Console.WriteLine("Kart Taşımak");
        Console.Write("Tahta Adı: ");
        string tahtaAdi = Console.ReadLine();
        Tahta kaynakTahta = tahtalar.FirstOrDefault(t => t.Ad == tahtaAdi);

        if (kaynakTahta == null)
        {
            Console.WriteLine("Belirtilen tahta bulunamadı.");
            return;
        }

        Console.Write("Kart Başlığı: ");
        string kartBasligi = Console.ReadLine();
        List<Kart> bulunanKartlar = kaynakTahta.KartBul(kartBasligi);

        if (bulunanKartlar.Count == 0)
        {
            Console.WriteLine("Aradığınız kart tahtada bulunamadı.");
            return;
        }

        if (bulunanKartlar.Count == 1)
        {
            Kart secilenKart = bulunanKartlar[0];
            Console.WriteLine("Bulunan Kart Bilgileri:");
            secilenKart.KartBilgileriniYazdir();
            Console.WriteLine("Lütfen taşımak istediğiniz Line'ı seçiniz: (1) TODO, (2) IN PROGRESS, (3) DONE");
            string lineSecim = Console.ReadLine();

            if (Enum.TryParse(lineSecim, out Line hedefLine))
            {
                kaynakTahta.KartTasi(secilenKart, hedefLine);
                Console.WriteLine($"{secilenKart.Baslik} başlıklı kart taşındı.");
            }
            else
            {
                Console.WriteLine("Geçersiz seçim.");
            }
        }
        else
        {
            Console.WriteLine("Aynı başlığa sahip birden fazla kart bulundu. Hangi kartı taşımak istersiniz?");
            for (int i = 0; i < bulunanKartlar.Count; i++)
            {
                Console.WriteLine($"({i + 1}) {bulunanKartlar[i].Baslik}");
            }
            Console.Write("Seçiminizi yapınız: ");
            if (int.TryParse(Console.ReadLine(), out int secilenIndex) && secilenIndex >= 1 && secilenIndex <= bulunanKartlar.Count)
            {
                Kart secilenKart = bulunanKartlar[secilenIndex - 1];
                Console.WriteLine("Bulunan Kart Bilgileri:");
                secilenKart.KartBilgileriniYazdir();
                Console.WriteLine("Lütfen taşımak istediğiniz Line'ı seçiniz: (1) TODO, (2) IN PROGRESS, (3) DONE");
                string lineSecim = Console.ReadLine();

                if (Enum.TryParse(lineSecim, out Line hedefLine))
                {
                    kaynakTahta.KartTasi(secilenKart, hedefLine);
                    Console.WriteLine($"{secilenKart.Baslik} başlıklı kart taşındı.");
                }
                else
                {
                    Console.WriteLine("Geçersiz seçim.");
                }
            }
            else
            {
                Console.WriteLine("Geçersiz seçim.");
            }
        }
    }
}
