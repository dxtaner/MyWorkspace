package main

import "fmt"

type Araba struct {
	marka string
	model string
	renk  string
	fiyat float32
	hiz   int
}

func (a *Araba) Hizlandir() {
	a.hiz += 10
}

func (a *Araba) Yavaslat() {
	a.hiz -= 10
}

func (a *Araba) FiyatBelirle(fiyat float32) {
	a.fiyat = fiyat
}

func (a *Araba) OzellikleriYazdir() {
	fmt.Printf("Marka: %s\nModel: %s\nRenk: %s\nFiyat: %.2f\nHiz: %d\n",
		a.marka, a.model, a.renk, a.fiyat, a.hiz)
}

func main() {
	// Araba nesnesi oluşturma
	araba1 := Araba{
		marka: "BMW",
		model: "X5",
		renk:  "Siyah",
		fiyat: 120000,
		hiz:   0,
	}

	// Araba nesnesinin özelliklerini yazdırma
	araba1.OzellikleriYazdir()

	// Araba nesnesinin hızını artırma
	araba1.Hizlandir()

	// Araba nesnesinin fiyatını güncelleme
	araba1.FiyatBelirle(130000)

	// Araba nesnesinin özelliklerini yazdırma
	araba1.OzellikleriYazdir()
}
