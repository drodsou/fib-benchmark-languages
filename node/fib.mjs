
// run with:  node --experimental-wasm-modules fib.mjs

import {fib_recursive as fibWasm} from './fib.wasm';

function fibNormal (n) {
	if (n <= 1) {
		return n
	}
	return fibNormal(n-1) + fibNormal(n-2)
}


let memo = {}
function fibMemo (n) {
	if (n <= 1) {
		return n
	}

	if (memo[n]) return memo[n]

	return memo[n] = fibMemo(n-1) + fibMemo(n-2);

}

	let fib = fibNormal;
	//let fib = fibMemo;

 let jobs = [44];
 let results = [];

let start=Date.now();
while (jobs.length) {
  let job = jobs.pop()
  console.log(job, fib(job))
}
console.log('time', Date.now()-start)


start=Date.now();
console.log('fibWasm', 44, fibWasm(44)) ;
console.log('fibWasm time', Date.now()-start )
