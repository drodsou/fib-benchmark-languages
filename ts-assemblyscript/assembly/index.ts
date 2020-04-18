// The entry file of your WebAssembly module.

// https://github.com/AssemblyScript/docs/blob/master/details/debugging.md
// https://www.toptal.com/virtual-reality/assemblyscript-and-webassembly-tutorial

@external("env", "mycustom")
declare function mycustom(msg:string, n:f64): void;

export function add(a: i32, b: i32): i32 {
	// trace and abort are predefined functions
	// trace("yep",2, a, b)	// msg, number of params, ...params
	mycustom("mycustom works", 9);
  return a + b;
}

export function fib (n:i32): i32 {
	if (n <= 1) {
		return n
	}
	return fib(n-1) + fib(n-2)
}



