package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func f64(s string) (n float64) {
	n, _ = strconv.ParseFloat(s, 64)
	return
}

func main() {
	file, err := os.Open("data.csv")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	x := 0.0
	y := 0.0
	z := 0.0

	scanner := bufio.NewScanner(file)
	scanner.Scan()
	for scanner.Scan() {
		line := scanner.Text()
		values := strings.Split(line, ",")
		x += f64(values[1])
		y += f64(values[2])
		z += f64(values[3])
	}

	fmt.Println(x, y, z)
}
