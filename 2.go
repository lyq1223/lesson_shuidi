package main

import (
	"fmt"
	"math"
)

func surfaceArea(grid [][]int) int {

	surfaceAreaCount := 0
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid); j++ {
			count := grid[i][j]

			if count == 0 {
				continue
			}
			surfaceAreaCount += 2 + 4*count

			if i-1 >= 0 {
				surfaceAreaCount -= int(math.Min(float64(count), float64(grid[i-1][j])))
			}
			if i+1 < len(grid) {
				surfaceAreaCount -= int(math.Min(float64(count), float64(grid[i+1][j])))
			}
			if j-1 >= 0 {
				surfaceAreaCount -= int(math.Min(float64(count), float64(grid[i][j-1])))
			}
			if j+1 < len(grid) {
				surfaceAreaCount -= int(math.Min(float64(count), float64(grid[i][j+1])))
			}
		}
	}
	return surfaceAreaCount
}

func main() {
	fmt.Println(surfaceArea([][]int{{1, 2}, {3, 4}})) //[[1,2],[3,4]]
}
