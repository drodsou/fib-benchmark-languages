// execute with `go run`

package main

import (
	"fmt"
	"time"
)

func fib_parallel() {
	numJobs := 1
	fibNumber := 44

	startTime := time.Now()
	jobs := make(chan int, numJobs) // buffered channel
	results := make(chan int, numJobs)

	// listen to job channels, process and send to results
	for n:=0; n<numJobs; n++ {
		go worker(jobs, results) // 17% cpu 1 core working
	}


	// fill job channels
	for i := 0; i < numJobs; i++ {
		// jobs <- i
		jobs <- fibNumber	// fib(x)
	}
	close(jobs)

	for j := 0; j < numJobs; j++ {
		fmt.Println(<-results) // awit
	}
	
	fmt.Println("Time:", time.Since(startTime))

}

func worker(jobs <-chan int, results chan<- int) {
	for n := range jobs { // await read
		results <- fib(n) // await write
	}
}

// some slow function
func fib(n int) int {
	if n <= 1 {
		return n
	}

	return fib(n-1) + fib(n-2)
}

func main() {
	startTime := time.Now()
	fmt.Println(44, fib(44)) 
	fmt.Println("Time:", time.Since(startTime))

}
