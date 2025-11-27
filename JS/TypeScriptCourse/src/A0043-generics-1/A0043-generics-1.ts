type FilterCallback<U> = (
  value: U,
  index?: number,
  array?: U[]
) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray: T[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i]!;
    if (callbackfn(item, i, array)) {
      novoArray.push(item);
    }
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltrado);
