function calculateAverageToList(lista) {
  let sumList = 0;

  for (let i = 0; i < lista.length; i++) {
    sumList += lista[i];
  }
  const averageListNum = sumList / lista.length;
  return averageListNum;
}
