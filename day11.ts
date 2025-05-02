/**
 * ✅ Discriminated Union(태그 유니온)
 * - TypeScript에서 union type을 사용할 때, 각 타입을 구분할 수 있는 공통 속성을 사용하여 구분하는 방법
 * - 각 타입에 공통 속성을 추가하여, 어떤 타입인지 구분할 수 있도록 함 
 * - 이 공통 속성을 "discriminant"라고 함
 */ 
type Dog = { type: 'dog'; bark: () => void };
type Cat = { type: 'cat'; meow: () => void };

type Animal = Dog | Cat;

let dogAnimal: Animal = {
    type: 'dog',
    bark: () => console.log("멍멍")
}

let catAnimal: Animal = {
    type: 'cat',
    meow: () => console.log("야옹")
}

//console.log(dogAnimal.type); // dog
//dogAnimal.bark(); // 멍멍

function speak(animal: Animal) {
    if ( animal.type === 'dog' ) {
        animal.bark();
    } else if ( animal.type === 'cat' ) {
        animal.meow();
    }
}

speak(dogAnimal); // 멍멍
speak(catAnimal); // 야옹


/** 
 * ✅ Exhaustive Check (모든 경우 다 처리했는지 확인)
 * - TypeScript는 union type을 사용할 때, 모든 경우를 처리했는지 확인하지 않음
 * - 따라서, 모든 경우를 처리했는지 확인하기 위해서는 `never` 타입을 사용해야 함
 * - `never` 타입은 어떤 값도 할당할 수 없는 타입으로, 모든 경우를 처리했는지 확인하는 데 사용됨
*/

type Success = { status: 'success'; data: string };
type Fail = { status: 'fail'; error: string };
type Loading = { status: 'loading', progress: number };
//type Result = Success | Fail | Loading;
type Result = Success | Fail | Loading;

function handle(result: Result) {
  if (result.status === 'success') {
    console.log('Data:', result.data);
  } else if (result.status === 'fail') {
    console.log('Error:', result.error);
  } else if ( result.status === 'loading' ) {
    console.log('Loading... Progress:', result.progress, '%');
  } else {
    const _exhaustiveCheck: never = result; // 이 부분에서 오류가 발생해야 합니다.
  }
}

let resultSuccess: Result = {
    status: 'success',
    data: 'Data loaded successfully'
}

let resultFail: Result = {
    status: 'fail',
    error: 'Failed to load data'
}

let resultLoading: Result = {
    status: 'loading',
    progress: 55
}

handle(resultSuccess);
handle(resultFail);
handle(resultLoading);


/**
 * ✅ 실습 예제
 */

type square = { kind: 'square'; size: number };
type circle = { kind: 'circle'; radius: number };
type triangle = { kind: 'triangle'; base: number; height: number };
type Shape = square | circle | triangle;

function area(shape: Shape) {
    if ( shape.kind === 'square' )  {
        console.log('#### square size:', shape.size);
    } else if ( shape.kind === 'circle' ) {
        console.log('#### circle radius:', shape.radius);
    } else if ( shape.kind === 'triangle' ) {
        console.log('#### triangle base:', shape.base, 'height:', shape.height);
    } else {
        console.log('unknown...');
        const _checker: never = shape; // 이 부분에서 오류가 발생해야 합니다.
        // 애초에 이부분에 오지 않아야 함.
    }
}

area({kind: 'square', size: 10});
area({kind: 'circle', radius: 5});
area({kind: 'triangle', base: 5, height: 10}); // unknown...


// export {}는 현재 파일이 모듈임을 나타내기 위해 사용됩니다.
// 이 코드는 TypeScript의 모듈 시스템을 사용하여 다른 파일과의 충돌을 방지합니다.
export {} 
