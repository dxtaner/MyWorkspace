package main

import (
	"fmt"
)

func main() {
	var i = 15.5
	var txt = "Hello World!"

	fmt.Printf("%v\n", i)
	fmt.Printf("%#v\n", i)
	fmt.Printf("%v%%\n", i)
	fmt.Printf("%T\n", i) // tipi yazar

	fmt.Printf("%v\n", txt)  // icergi yazar
	fmt.Printf("%#v\n", txt) // tümünü yazar
	fmt.Printf("%T\n", txt)
}
