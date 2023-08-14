# CSV Dosyasından Veri Okuma ve İstatistikler Çıkarma

Bu program, bir CSV dosyasından veri okuyarak istatistikler çıkaran bir C# örneğini içermektedir.

## Program Açıklaması

Bu C# programı, "exhibitA-input.csv" adlı bir CSV dosyasından veri okur ve belirli bir tarihte çalınan şarkıların sayısını istatistiklerle analiz eder.

- Program öncelikle "exhibitA-input.csv" dosyasını okur ve satırları işler.
- Her bir satır, şarkı çalma hakkındaki verileri içerir.
- Tarih ve saat bilgisini analiz ederek belirli bir tarih için şarkı çalınma sayısını hesaplar.
- Sonuçları istatistiklerle gruplar ve çıktı olarak yazdırır.

## Kullanılan Veriler ve Sonuçlar

Program, çalınan şarkıların sayısını belirli bir tarihte hesaplar. Ayrıca, farklı kullanıcıların kaç farklı şarkı çaldığını analiz eder.

## Kullanım

1. Öncelikle `exhibitA-input.csv` adında bir CSV dosyası oluşturun veya kullanın. Her bir satır, şarkı çalma verilerini içermelidir.
2. Programı çalıştırdığınızda, verileri analiz eder ve istatistik sonuçlarını görüntüler.

## Örnek Çıktı
DISTINCT_PLAY_COUNT CLIENT_COUNT
1 23
2 45
3 12
...
Maximum number of distinct songs played: 393
Number of users who played 346 distinct songs: 22


## Lisans

Bu C# programı, [MIT Lisansı](LICENSE) altında lisanslanmıştır.


