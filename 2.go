package main

import "fmt"

func rotate(matrix [][]int)  {
	for i:=0; i < len(matrix); i++ {
		for j :=i; j <len(matrix[i]); j++ {
			([matrix[i][j], matrix[j][i]] = [matrix[j][i],matrix[i][j]])
		}
	}
	N :=len(matrix)
	for y := 0; y < (N / 2); y++ {
		matrix[y], matrix[N-1-y] = matrix[N-1-y], matrix[y]
	}
}

func main() {
	fmt.Println(rotate([][]int{{1,2,3}, {4,5,6}, {7,8,9}}))
}