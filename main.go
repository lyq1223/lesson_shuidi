package main

import "fmt"

func majorityElement(nums []int) int { //返回值的类型也是int 后面那个
	majority, count := nums[0], 1
	for i := 1; i < len(nums); i++ {
		if count == 0 {
			majority = nums[i]
		}
		if nums[i] == majority {
			count++
		} else {
			count--
		}
	}
	return majority
}

func main() {
	fmt.Println(majorityElement([]int{1, 2, 2, 3}))
}
