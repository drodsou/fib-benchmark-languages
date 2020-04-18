(module

  ;; compile with: wat2wasm fib.wat

  (func $fib_recursive (param $N i32) (result i32)
    (if
      (i32.lt_s (get_local $N) (i32.const 2))
      (then (return (get_local $N)))
    )
    (i32.add 
      ( call $fib_recursive  ( i32.sub (get_local $N) (i32.const 1) ))
      ( call $fib_recursive  ( i32.sub (get_local $N) (i32.const 2) ))
    )
  )

  

  ;; export
  (export "fib" (func $fib_recursive))
  (export "fib_recursive" (func $fib_recursive))
)