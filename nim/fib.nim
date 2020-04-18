# nim cpp -d:release fib.nim

proc fib(n: uint64): uint64 =
    if n <= 1: return n
    return fib(n - 1) + fib(n - 2)

echo fib(46)