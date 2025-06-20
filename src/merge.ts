export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  //กลับ collection_2 เรียงจากมากไปน้อยให้เป็นน้อยไปมาก
  const collection_2_asc: number[] = [];
  for (let i = collection_2.length - 1; i >= 0; i--) {
    collection_2_asc.push(collection_2[i]);
  }

  //รวมทีละคู่แบบเรียงลำดับ
  const merged1 = mergeTwo(collection_1, collection_2_asc);
  return mergeTwo(merged1, collection_3);
}

function mergeTwo(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i < a.length) result.push(a[i++]);
  while (j < b.length) result.push(b[j++]);

  return result;
}
