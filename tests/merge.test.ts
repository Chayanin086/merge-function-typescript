// สร้างไฟล์ทดสอบสำหรับฟังก์ชัน merge 
// import { merge } from '../src/merge';

// const result = merge([1, 3, 5], [9, 7, 2], [6, 8, 10]);
// console.log('ผลลัพธ์ที่ได้:', result);


// ทดสอบการทำงานของฟังก์ชัน merge แบบ Unit Test
import { merge } from '../src/merge';

describe('merge', () => {
  test('กรณีปกติ: ทั้ง 3 array มีค่าเรียงถูก', () => {
    const result = merge([1, 3, 5], [9, 7, 2], [6, 8, 10]);
    console.log('🔹 กรณีปกติ:', result);
    expect(result).toEqual([1, 2, 3, 5, 6, 7, 8, 9, 10]);
  });

  test('กรณี array ว่างทั้งหมด', () => {
    const result = merge([], [], []);
    console.log('🔹 ว่างทั้งหมด:', result);
    expect(result).toEqual([]);
  });

  test('กรณี collection_2 เป็น array ว่าง', () => {
    const result = merge([1, 4, 6], [], [2, 3, 5]);
    console.log('🔹 ไม่มี collection_2:', result);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('กรณีมีค่าซ้ำ', () => {
    const result = merge([1, 2, 2], [4, 3, 2], [2, 5]);
    console.log('🔹 ค่าซ้ำ:', result);
    expect(result).toEqual([1, 2, 2, 2, 2, 3, 4, 5]);
  });

  test('collection_1 และ collection_3 ว่าง', () => {
    const result = merge([], [3, 2, 1], []);
    console.log('🔹 เหลือแค่ collection_2:', result);
    expect(result).toEqual([1, 2, 3]);
  });
});