
import { fib_recursive as fibWasm } from "./fib.wasm";

function fibNormal (n:number): number {
	if (n <= 1) {
		return n
	}
	return fibNormal(n-1) + fibNormal(n-2)
}


let memo: {[key:number] : number} 
	= {};

function fibMemo (n: number) 
	: number 
{
	if (n <= 1) {
		return n
	}

	if (memo[n]) return memo[n]

	return memo[n] = fibMemo(n-1) + fibMemo(n-2);

}
	
let job = 44;

let start=Date.now();
console.log(job, fibNormal(job))
console.log('fibNormal', Date.now()-start)

start=Date.now();
console.log(job, fibWasm(job))
console.log('fibWasm', Date.now()-start)



/*
func main() {
	jobs := make(chan int, 100) // buffered channel
	results := make(chan int, 100)

	// listen to job channels, process and send to results
	go worker(jobs, results) // 17% cpu 1 core working
	go worker(jobs, results) // 35% cpu 2 cores working
	go worker(jobs, results) // 45% cpu 2 cores working...

	// fill job channels
	for i := 0; i < 100; i++ {
		jobs <- i
	}
	close(jobs)

	for j := 0; j < 100; j++ {
		fmt.Println(<-results) // awit
	}
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
*/