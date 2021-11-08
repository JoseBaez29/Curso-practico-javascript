function calculateMedian(list) {
  const ordList = list.sort((prev, next) => prev - next);
  const middleList = parseInt(ordList.length / 2);

  if (ordList.length % 2 === 0) {
    const median = parseInt(
      (ordList[middleList - 1] + ordList[middleList]) / 2
    );
    console.log(`the median is: ${median}`);
  } else {
    console.log(`the median is: ${ordList[middleList]}`);
  }
}
