void main() {
  //print('Hello, World!');
  print('fib 44: ${fibonacci(44)}');
}

int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// var result = fibonacci(20);