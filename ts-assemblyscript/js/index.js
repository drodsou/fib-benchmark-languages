const fs = require("fs");
const loader = require("@assemblyscript/loader");


const importObj = {
  env: {
    mycustom(msg, n) {
      console.log( wasm.__getString(msg), n );
    }
  }
}

let wasm = loader.instantiateSync(
  fs.readFileSync(__dirname + "/../build/optimized.wasm"
), importObj )


let start = Date.now();
console.log(wasm.add(3,4));
// console.log( wasm.fib(44) );
console.log('time', Date.now()-start);

