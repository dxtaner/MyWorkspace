package main

import (
	"fmt"
)

func main() {
	var i, j string = "Hello", "World"

	fmt.Print(i)
	fmt.Print(j)
	fmt.Print(i, "\n")
	fmt.Print(j, "\n")
	fmt.Print(i, "\n", j)
	fmt.Print(i, " ", j)
}
