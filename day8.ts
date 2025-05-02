/** 
✅ infer란?
조건부 타입 안에서 타입을 “추론”해서 새로 꺼내쓰는 기능이야.

쉽게 말하면:

infer U → 타입스크립트 보고 “여기서 타입을 알아서 뽑아줘” 라고 시키는 것
 */

// 상자 타입
type FruitBox<T> = {
    fruit: T;
  };
  
  // 과일 꺼내는 타입
  type UnboxFruit<T> = 
    T extends FruitBox<infer F> 
      ? F 
      : never;
  
  // 테스트
  type A81 = UnboxFruit<FruitBox<'사과'>>; // '사과'
  type A82 = UnboxFruit<FruitBox<'바나나'>>; // '바나나'
  type A83 = UnboxFruit<'귤'>; // never (상자 아님)

  let fruitBox: FruitBox<'사과'> = { fruit: '사과' };
  let fruit: UnboxFruit<FruitBox<'사과'>> = fruitBox.fruit; // '사과' 타입으로 추론됨
console.log(fruit); // '사과' 출력
  