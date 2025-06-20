# Merge Three Sorted Arrays (TypeScript + Jest)

โปรเจกต์นี้สร้างขึ้นเพื่อใช้ในการทำแบบทดสอบสมัครงาน เขียนด้วย TypeScript โดยมีฟังก์ชันชื่อ `merge()`  
เพื่อรวมอาร์เรย์ 3 ชุดเข้าด้วยกัน และให้ได้ผลลัพธ์เรียงลำดับจากน้อยไปมาก  
โดย **ห้ามใช้ฟังก์ชัน `.sort()`**

## Proposition

เขียนฟังก์ชันคืนค่าเป็นอาร์เรย์ที่เรียงจากน้อยไปมาก

```ts
merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []
```
โดยที่ collection_1 และ collection_3 เรียงจากน้อยไปมาก 
collection_2 เรียงจากมากไปน้อย
**ห้ามใช้ฟังก์ชัน `.sort()`**

### Example
    merge([1, 3, 5], [10, 8, 6], [2, 4, 6])
Output: ```[1, 2, 3, 4, 5, 6, 6, 8, 10]```

### Installing

ติดตั้ง dependencies

    npm install


## Running the tests

รันทดสอบด้วย Jest

    npm test

หากต้องการดูรายละเอียดเพิ่มเติม

    npm test -- --verbose

### Deployment
    git clone https://github.com/Chayanin086/merge-function-typescript.git
    cd merge-function-typescript
    npm install
    npm test
    
### Project Structure
- src/merge.ts - **ฟังก์ชันหลัก**
- tests/merge.test.ts - **Unit test**
