//求斐波那契数列第n项



function fandFibonacci(n) {
  let fibonacci = [0, 1]
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1])
    }
  }
  console.log(fibonacci[n])
}
fandFibonacci(30) 