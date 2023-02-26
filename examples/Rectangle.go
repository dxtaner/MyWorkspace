package main

import "fmt"

type Rectangle struct {
	length float64
	width  float64
}

func main() {
	// Rectangle struct tipinde bir değişken oluşturuluyor
	var r1 Rectangle

	// Değer atama işlemi gerçekleştiriliyor
	r1.length = 10
	r1.width = 5

	// Alan hesaplaması yapılıyor
	area := r1.length * r1.width

	// Sonuç ekrana yazdırılıyor
	fmt.Println("Rectangle length:", r1.length)
	fmt.Println("Rectangle width:", r1.width)
	fmt.Println("Rectangle area:", area)
}
