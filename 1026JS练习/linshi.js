function iWantN(findInN) {
  if (findInN >= 2) {
    let printOut = [2]
    for (i = 2; i < findInN; i++) {
      let getRoot = parseInt(i ** 0.5)
      let jMax = printOut.length
      for (j = 0; j < jMax; j++) {
        console.log(i)
        console.log(printOut[j])
        if (i % (printOut[j]) === 0) {
          break;
        }
        else if ((printOut[j] >= getRoot) && (i !== 2)) {
          printOut.push(i);
          break;
        }
      }
    }
    console.log(printOut)
  }
}
iWantN(100) 