package main

import "fmt"

func jump(nums []int) int {
	pos := len(nums) - 1
	step := 0
	for pos > 0 {
		for i :=0; i < pos; i++ {
			if i + nums[i] >= pos {
				pos = i
				step++
				break
			}
		}
	}
	return step
}

func main(){
	fmt.Println(jump([]int{2,3,1,1,4})) //数组
}
