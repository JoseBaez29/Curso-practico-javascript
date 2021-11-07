function calculateAverageToList(list) {
  // let sumList = 0;

  // for (let i = 0; i < list.length; i++) {
  //   sumList += lista[i];
  // }

  const sumList = list.reduce((NumAccumulate = 0, num) => NumAccumulate + num);
  const averageListNum = sumList / list.length;
  return averageListNum;
}
