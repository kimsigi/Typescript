/* ✅ 1. 함수 매개변수와 리턴값에 타입 지정 */
// 📌 예제1: 문자열을 받아 인사말 리턴
function greet(name: string): string {
    return `Hello, ${name}!`;
}
// 📌 예제2: 숫자 두 개 받아 합 리턴
function add(a: number, b: number): number {
    return a + b;
}
console.log(`✅ 1. 함수 매개변수와 리턴값에 타입 지정`);
console.log(`📌 예제1 결과: ${greet("World")}`); // Output: Hello, World!
console.log(`📌 예제2 결과: ${add(1,2)}`); // Output: 3

/* ✅ 2. 선택적 파라미터 (?) → 있을 수도 있고, 없을 수도 있는 인자는 ?를 붙여줘. */
function introduce(name: string, age?: number): string {
    if (age) {
        return `안녕하세요, ${name}입니다. ${age}살이에요.`;
    } else {
        return `안녕하세요, ${name}입니다.`;
    }
}
console.log(`✅ 2. 선택적 파라미터 (?)`);
console.log(`📌 결과1: ${introduce("김평식")}`); // Output: 안녕하세요, 김평식입니다.
console.log(`📌 결과2: ${introduce("김평식", 37)}`); // Output: 안녕하세요, 김평식입니다. 37살이에요.

/* ✅ 3. 기본값 파라미터 (= 값) */
function greetWithDefault(name: string, greeting: string = "[기본인사]안녕하세요"): string {
    return `${greeting}, ${name}!`;
}
console.log(`✅ 3. 기본값 파라미터 (= 값)`);
console.log(`📌 결과1: ${greetWithDefault("김평식")}`); // Output: 안녕하세요, 김평식!
console.log(`📌 결과2: ${greetWithDefault("김평식", "안녕")}`); // Output: 안녕, 김평식!

/* ✅ 4. 리턴값이 없을 땐 void */
function logMessage(message: string): void {
    console.log(`메세지: ${message}, 하지만 리턴값은 없어요.`);
}
console.log(`✅ 4. 리턴값이 없을 땐 void`);
console.log(`📌 결과: ${logMessage("안녕하세요")}`); // Output: 안녕하세요

/* ✅ 5. 타입 추론 */
function square(num: number) {
    return num * num;
}
console.log(`✅ 5. 타입 추론(TypeScript는 타입을 직접 지정하지 않아도 코드 흐름을 보고 타입을 추론함.)`);
console.log(`📌 결과: ${square(5)}`); // Output: 25, num의 타입은 number로 추론됨

/* ✅ 6. 화살표 함수에도 타입 붙이기 */
const multiply = (x: number, y: number): number => x * y;
console.log(`✅ 6. 화살표 함수에도 타입 붙이기`);
console.log(`📌 결과: ${multiply(2, 3)}`); // Output: 6

/* ✅ 7. 함수 타입 지정하기 */
type MathOperation = (a: number, b: number) => number;
const divide: MathOperation = (a, b) => a / b;
console.log(`✅ 7. 함수 타입 지정하기 - divide는 MathOperation 타입을 가져아한다. 즉 숫자 두 개를 받아 숫자를 리턴하는 함수여야 한다.`);
console.log(`📌 결과: ${divide(6, 3)}`); // Output: 2



/* ✅ 8. 함수 오버로딩 */
// 📌 예제1: 두 개의 숫자를 더하는 함수
function add8(a: number, b: number): number;
// 📌 예제2: 두 개의 문자열을 더하는 함수
function add8(a: string, b: string): string;
// 📌 예제3: 두 개의 숫자 또는 문자열을 더하는 함수 -> 숫자 + 문자 || 문자 + 숫자로 들어올 경우 타입가드 적용해야 함
function add8(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    return a.toString() + b.toString(); // 다른 타입끼리일 때
}
//const add = (a: number | string, b: number | string): number | string => a + b; // Error: Type 'string' is not assignable to type 'number | string' (타입이 다르기 때문에 에러 발생)
console.log(`✅ 8. 함수 오버로딩`);
console.log(`📌 예제1 결과: ${add8(1, 2)}`); // Output: 3
console.log(`📌 예제2 결과: ${add8("Hello, ", "World!")}`); // Output: Hello, World!
//console.log(`📌 예제3 결과1: ${add8(1, "2")}`); // Output: 12 (문자열로 변환되어 더해짐)
//console.log(`📌 예제3 결과2: ${add8("1", 2)}`); // Output: 12 (문자열로 변환되어 더해짐)

// /* ✅ 9. Rest 파라미터 */
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(`✅ 9. Rest 파라미터`);
console.log(`📌 결과1: ${sum()}`); // Output: 0 (아무것도 없으면 0)
console.log(`📌 결과2: ${sum(1)}`); // Output: 1
console.log(`📌 결과3: ${sum(1, 2)}`); // Output: 3
console.log(`📌 결과4: ${sum(1, 2, 3, 4, 5)}`); // Output: 15

// /* ✅ 10. 튜플 */
type Point = [number, number]; // 튜플 타입 정의
function getPoint(): Point {
    return [10, 20];
}
console.log(`✅ 10. 튜플`);
const point: Point = getPoint();
console.log(`📌 결과1: (${point[0]}, ${point[1]})`); // Output: (10, 20)
console.log(`📌 결과2: ${point[0]}`); // Output: 10
console.log(`📌 결과3: ${point[1]}`); // Output: 20
console.log(`📌 결과4: ${point}`); // Output: 10,20
console.log(`📌 결과5: ${point.length}`); // Output: 2 (튜플의 길이)
console.log(`📌 결과6: ${point instanceof Array}`); // Output: true (point는 배열의 인스턴스)
console.log(`📌 결과7: ${Array.isArray(point)}`); // Output: true (point는 배열인지 확인)

// /* ✅ 11. 제네릭 함수 */
function identity<T>(arg: T): T {
    return arg;
}
console.log(`✅ 11. 제네릭 함수`);
console.log(`📌 결과: ${identity<number>(42)}`); // Output: 42
console.log(`📌 결과: ${identity<string>("Hello")}`); // Output: Hello
console.log(`📌 결과: ${identity<boolean>(true)}`); // Output: true
console.log(`📌 결과: ${identity<Point>([1, 2])}`); // Output: [1, 2]

// /* ✅ 12. 제네릭 인터페이스 */
// interface GenericIdentityFn<T> {
//     (arg: T): T;
// }
// function identityFn<T>(arg: T): T {
//     return arg;
// }
// const myIdentity: GenericIdentityFn<number> = identityFn;
// console.log(`✅ 12. 제네릭 인터페이스`);
// console.log(`📌 결과: ${myIdentity(42)}`); // Output: 42
// console.log(`📌 결과: ${myIdentity("Hello")}`); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// console.log(`📌 결과: ${myIdentity(true)}`); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'
// console.log(`📌 결과: ${myIdentity([1, 2])}`); // Error: Argument of type 'number[]' is not assignable to parameter of type 'number'
// console.log(`📌 결과: ${myIdentity({})}`); // Error: Argument of type '{}' is not assignable to parameter of type 'number'
// console.log(`📌 결과: ${myIdentity(null)}`); // Error: Argument of type 'null' is not assignable to parameter of type 'number'
// console.log(`📌 결과: ${myIdentity(undefined)}`); // Error: Argument of type 'undefined' is not assignable to parameter of type 'number'
// console.log(`📌 결과: ${myIdentity(1)}`); // Output: 1 (정상 작동)

// /* ✅ 13. 제네릭 클래스 */
// class GenericBox<T> {
//     private value: T;
//     constructor(value: T) {
//         this.value = value;
//     }
//     getValue(): T {
//         return this.value;
//     }
// }
// const numberBox = new GenericBox<number>(123);
// const stringBox = new GenericBox<string>("Hello, TypeScript!");
// const booleanBox = new GenericBox<boolean>(true);
// const pointBox = new GenericBox<Point>([10, 20]);
// console.log(`✅ 13. 제네릭 클래스`);
// console.log(`📌 결과: ${numberBox.getValue()}`); // Output: 123
// console.log(`📌 결과: ${stringBox.getValue()}`); // Output: Hello, TypeScript!
// console.log(`📌 결과: ${booleanBox.getValue()}`); // Output: true
// console.log(`📌 결과: ${pointBox.getValue()}`); // Output: [10, 20]
// console.log(`📌 결과: ${pointBox.getValue()[0]}`); // Output: 10
// console.log(`📌 결과: ${pointBox.getValue()[1]}`); // Output: 20
// console.log(`📌 결과: ${pointBox.getValue().join(",")}`); // Output: 10,20
// console.log(`📌 결과: ${pointBox.getValue().toString()}`); // Output: 10,20
// console.log(`📌 결과: ${pointBox.getValue().length}`); // Output: 2
// console.log(`📌 결과: ${pointBox.getValue() instanceof Array}`); // Output: true
// console.log(`📌 결과: ${Array.isArray(pointBox.getValue())}`); // Output: true
// console.log(`📌 결과: ${pointBox.getValue()[0] + pointBox.getValue()[1]}`); // Output: 30
// console.log(`📌 결과: ${pointBox.getValue()[0] * pointBox.getValue()[1]}`); // Output: 200 (10*20)

// /* ✅ 14. 제네릭 타입 별칭 */
// type Pair<T, U> = [T, U];
// type StringNumberPair = Pair<string, number>;
// type NumberBooleanPair = Pair<number, boolean>;
// type StringBooleanPair = Pair<string, boolean>;
// type PointPair = Pair<Point, Point>;
// type PointStringPair = Pair<Point, string>;
// type PointNumberPair = Pair<Point, number>;
// type PointBooleanPair = Pair<Point, boolean>;
// type StringPointPair = Pair<string, Point>;
// type NumberPointPair = Pair<number, Point>;
// type BooleanPointPair = Pair<boolean, Point>;
// type StringStringPair = Pair<string, string>;
// type NumberNumberPair = Pair<number, number>;

// const stringNumberPair: StringNumberPair = ["age", 30];
// const numberBooleanPair: NumberBooleanPair = [1, true];
// const stringBooleanPair: StringBooleanPair = ["isStudent", false];
// const pointPair: PointPair = [[10, 20], [30, 40]];
// const pointStringPair: PointStringPair = [[10, 20], "Hello"];
// const pointNumberPair: PointNumberPair = [[10, 20], 42];
// const pointBooleanPair: PointBooleanPair = [[10, 20], true];
// const stringPointPair: StringPointPair = ["point", [10, 20]];
// const numberPointPair: NumberPointPair = [42, [10, 20]];
// const booleanPointPair: BooleanPointPair = [true, [10, 20]];
// const stringStringPair: StringStringPair = ["name", "John"];
// const numberNumberPair: NumberNumberPair = [1, 2];

// console.log(`✅ 14. 제네릭 타입 별칭`);
// console.log(`📌 결과: ${stringNumberPair}`); // Output: ["age", 30]
// console.log(`📌 결과: ${numberBooleanPair}`); // Output: [1, true]
// console.log(`📌 결과: ${stringBooleanPair}`); // Output: ["isStudent", false]
// console.log(`📌 결과: ${pointPair}`); // Output: [[10, 20], [30, 40]]
// console.log(`📌 결과: ${pointStringPair}`); // Output: [[10, 20], "Hello"]
// console.log(`📌 결과: ${pointNumberPair}`); // Output: [[10, 20], 42]
// console.log(`📌 결과: ${pointBooleanPair}`); // Output: [[10, 20], true]
// console.log(`📌 결과: ${stringPointPair}`); // Output: ["point", [10, 20]]
// console.log(`📌 결과: ${numberPointPair}`); // Output: [42, [10, 20]]
// console.log(`📌 결과: ${booleanPointPair}`); // Output: [true, [10, 20]]
// console.log(`📌 결과: ${stringStringPair}`); // Output: ["name", "John"]
// console.log(`📌 결과: ${numberNumberPair}`); // Output: [1, 2]

// /* ✅ 15. 제네릭 제약조건 */
// interface Lengthwise {
//     length: number;
// }
// function logLength<T extends Lengthwise>(arg: T): void {
//     console.log(`Length: ${arg.length}`);
// } // T는 Lengthwise 인터페이스를 구현해야 함
// function logArrayLength<T>(arg: T[]): void {
//     console.log(`Array Length: ${arg.length}`);
// } // T는 Lengthwise 인터페이스를 구현하지 않아도 됨
// function logStringLength(arg: string): void {
//     console.log(`String Length: ${arg.length}`);
// } // string은 Lengthwise 인터페이스를 구현함
// function logNumberLength(arg: number): void {
//     console.log(`Number Length: ${arg.length}`); // Error: number는 Lengthwise 인터페이스를 구현하지 않음
// } // number는 Lengthwise 인터페이스를 구현하지 않음
// function logBooleanLength(arg: boolean): void {
//     console.log(`Boolean Length: ${arg.length}`); // Error: boolean은 Lengthwise 인터페이스를 구현하지 않음
// } // boolean은 Lengthwise 인터페이스를 구현하지 않음
// function logPointLength(arg: Point): void {
//     console.log(`Point Length: ${arg.length}`); // Error: Point는 Lengthwise 인터페이스를 구현하지 않음
// } // Point는 Lengthwise 인터페이스를 구현하지 않음
// function logObjectLength(arg: object): void {
//     console.log(`Object Length: ${arg.length}`); // Error: object는 Lengthwise 인터페이스를 구현하지 않음
// } // object는 Lengthwise 인터페이스를 구현하지 않음
// function logArrayOfLengthwise<T extends Lengthwise>(arg: T[]): void {
//     arg.forEach(item => console.log(`Item Length: ${item.length}`));
// } // T는 Lengthwise 인터페이스를 구현해야 함
// function logArrayOfLengthwiseWithMap<T extends Lengthwise>(arg: T[]): void {
//     arg.map(item => console.log(`Item Length: ${item.length}`));
// } // T는 Lengthwise 인터페이스를 구현해야 함
// function logArrayOfLengthwiseWithFilter<T extends Lengthwise>(arg: T[]): void {
//     arg.filter(item => item.length > 0).forEach(item => console.log(`Item Length: ${item.length}`));
// } // T는 Lengthwise 인터페이스를 구현해야 함
// function logArrayOfLengthwiseWithReduce<T extends Lengthwise>(arg: T[]): void {
//     arg.reduce((acc, item) => acc + item.length, 0);
// } // T는 Lengthwise 인터페이스를 구현해야 함
// function logArrayOfLengthwiseWithForEach<T extends Lengthwise>(arg: T[]): void {
//     arg.forEach(item => console.log(`Item Length: ${item.length}`));
// } // T는 Lengthwise 인터페이스를 구현해야 함


// /* ✅ 16. 타입 단언 */
// // 📌 예제1: as 키워드를 사용한 타입 단언
// const someValue: any = "Hello, TypeScript!";
// const strLength: number = (someValue as string).length; // someValue를 string으로 단언
// console.log(`✅ 16. 타입 단언`);
// console.log(`📌 결과1: ${strLength}`); // Output: 17
// // 📌 예제2: <>를 사용한 타입 단언 (JSX에서는 사용 불가)
// const anotherValue: any = "Hello, TypeScript!";
// const anotherStrLength: number = (<string>anotherValue).length; // anotherValue를 string으로 단언
// console.log(`📌 결과2: ${anotherStrLength}`); // Output: 17
// // 📌 예제3: unknown 타입을 사용한 타입 단언
// const unknownValue: unknown = "Hello, TypeScript!";
// const unknownStrLength: number = (unknownValue as string).length; // unknownValue를 string으로 단언
// console.log(`📌 결과3: ${unknownStrLength}`); // Output: 17
// // 📌 예제4: 타입 단언을 사용한 DOM 요소 접근
// const element = document.getElementById("myElement") as HTMLDivElement; // myElement를 HTMLDivElement로 단언
// console.log(`📌 결과4: ${element}`); // Output: <div id="myElement"></div>
// // 📌 예제5: 타입 단언을 사용한 JSON 파싱
// const jsonString = '{"name": "John", "age": 30}';
// const jsonObject = JSON.parse(jsonString) as { name: string; age: number }; // jsonString을 객체로 단언
// console.log(`📌 결과5: ${jsonObject}`); // Output: { name: "John", age: 30 }
// // 📌 예제6: 타입 단언을 사용한 배열 요소 접근
// const numbers: any[] = [1, 2, 3];
// const firstNumber: number = (numbers[0] as number); // numbers[0]을 number로 단언
// console.log(`📌 결과6: ${firstNumber}`); // Output: 1
// // 📌 예제7: 타입 단언을 사용한 함수 리턴값
// const getValue = (): any => "Hello, TypeScript!";
// const value: string = getValue() as string; // getValue()를 string으로 단언
// console.log(`📌 결과7: ${value}`); // Output: Hello, TypeScript!

// /* ✅ 17. 타입 가드 */
// // 📌 예제1: typeof를 사용한 타입 가드
// function printLength(value: string | number) {
//     if (typeof value === "string") {
//         console.log(`String Length: ${value.length}`);
//     } else if (typeof value === "number") {
//         console.log(`Number Length: ${value.toString().length}`); // 숫자를 문자열로 변환 후 길이 출력
//     }
// }
// console.log(`✅ 17. 타입 가드`);
// printLength("Hello, TypeScript!"); // Output: String Length: 17
// printLength(12345); // Output: Number Length: 5
// // 📌 예제2: instanceof를 사용한 타입 가드
// function isDate(value: any): value is Date {
//     return value instanceof Date;
// }
// function printDate(value: Date | string) {
//     if (isDate(value)) {
//         console.log(`Date: ${value.toISOString()}`);
//     } else {
//         console.log(`String: ${value}`);
//     }
// }
// printDate(new Date()); // Output: Date: 2023-10-01T00:00:00.000Z (현재 날짜)
// printDate("Hello, TypeScript!"); // Output: String: Hello, TypeScript!
// // 📌 예제3: 사용자 정의 타입 가드
// function isString(value: any): value is string {
//     return typeof value === "string";
// }
// function printValue(value: string | number) {
//     if (isString(value)) {
//         console.log(`String: ${value}`);
//     } else {
//         console.log(`Number: ${value}`);
//     }
// }
// printValue("Hello, TypeScript!"); // Output: String: Hello, TypeScript!
// printValue(12345); // Output: Number: 12345
// // 📌 예제4: union 타입과 타입 가드
// function processValue(value: string | number | boolean) {
//     if (typeof value === "string") {
//         console.log(`String: ${value}`);
//     } else if (typeof value === "number") {
//         console.log(`Number: ${value}`);
//     } else if (typeof value === "boolean") {
//         console.log(`Boolean: ${value}`);
//     }
// }
// processValue("Hello, TypeScript!"); // Output: String: Hello, TypeScript!
// processValue(12345); // Output: Number: 12345
// processValue(true); // Output: Boolean: true
// // 📌 예제5: null과 undefined 체크
// function printValueOrNull(value: string | null | undefined) {
//     if (value === null) {
//         console.log("Value is null");
//     } else if (value === undefined) {
//         console.log("Value is undefined");
//     } else {
//         console.log(`Value: ${value}`);
//     }
// }
// printValueOrNull(null); // Output: Value is null
// printValueOrNull(undefined); // Output: Value is undefined
// printValueOrNull("Hello, TypeScript!"); // Output: Value: Hello, TypeScript!
// // 📌 예제6: 배열 타입 가드
// function isArray(value: any): value is Array<any> {
//     return Array.isArray(value);
// }
// function printArray(value: string[] | number[]) {
//     if (isArray(value)) {
//         console.log(`Array Length: ${value.length}`);
//     } else {
//         console.log("Not an array");
//     }
// }
// printArray(["Hello", "TypeScript"]); // Output: Array Length: 2
// printArray([1, 2, 3]); // Output: Array Length: 3
// printArray("Hello, TypeScript!"); // Output: Not an array
// // 📌 예제7: 객체 타입 가드
// function isObject(value: any): value is { [key: string]: any } {
//     return typeof value === "object" && value !== null;
// }
// function printObject(value: { [key: string]: any } | string) {
//     if (isObject(value)) {
//         console.log(`Object Keys: ${Object.keys(value).join(", ")}`);
//     } else {
//         console.log(`String: ${value}`);
//     }
// }
// printObject({ name: "John", age: 30 }); // Output: Object Keys: name, age
// printObject("Hello, TypeScript!"); // Output: String: Hello, TypeScript!
// // 📌 예제8: Promise 타입 가드
// function isPromise(value: any): value is Promise<any> {
//     return typeof value === "object" && typeof value.then === "function";
// }
// function printPromise(value: Promise<any> | string) {
//     if (isPromise(value)) {
//         console.log("Value is a Promise");
//     } else {
//         console.log(`String: ${value}`);
//     }
// }
// printPromise(new Promise((resolve) => resolve("Hello, TypeScript!"))); // Output: Value is a Promise
// printPromise("Hello, TypeScript!"); // Output: String: Hello, TypeScript!
// // 📌 예제9: 함수 타입 가드
// function isFunction(value: any): value is Function {
//     return typeof value === "function";
// }
// function printFunction(value: Function | string) {
//     if (isFunction(value)) {
//         console.log("Value is a Function");
//     } else {
//         console.log(`String: ${value}`);
//     }
// }
// printFunction(() => console.log("Hello, TypeScript!")); // Output: Value is a Function
// printFunction("Hello, TypeScript!"); // Output: String: Hello, TypeScript!
// // 📌 예제10: 타입 가드를 사용한 API 응답 처리
// function handleApiResponse(response: string | { data: any }) {
//     if (typeof response === "string") {
//         console.log(`Error: ${response}`);
//     } else {
//         console.log(`Data: ${response.data}`);
//     }
// }
// handleApiResponse("Network Error"); // Output: Error: Network Error
// handleApiResponse({ data: { name: "John", age: 30 } }); // Output: Data: { name: "John", age: 30 }
// // 📌 예제11: 타입 가드를 사용한 이벤트 처리
// function handleEvent(event: MouseEvent | KeyboardEvent) {
//     if (event instanceof MouseEvent) {
//         console.log(`Mouse Event: ${event.clientX}, ${event.clientY}`);
//     } else if (event instanceof KeyboardEvent) {
//         console.log(`Keyboard Event: ${event.key}`);
//     }
// }
// handleEvent(new MouseEvent("click", { clientX: 100, clientY: 200 })); // Output: Mouse Event: 100, 200
// handleEvent(new KeyboardEvent("keydown", { key: "Enter" })); // Output: Keyboard Event: Enter
// // 📌 예제12: 타입 가드를 사용한 파일 처리
// function handleFile(file: File | string) {
//     if (file instanceof File) {
//         console.log(`File Name: ${file.name}`);
//     } else {
//         console.log(`File Path: ${file}`);
//     }
// }
// handleFile(new File(["content"], "file.txt")); // Output: File Name: file.txt
// handleFile("/path/to/file.txt"); // Output: File Path: /path/to/file.txt

// /* ✅ 18. 타입 추론과 타입 단언의 차이 */
// // 📌 예제1: 타입 추론
// const inferredString = "Hello, TypeScript!"; // TypeScript는 inferredString의 타입을 string으로 추론
// console.log(`✅ 18. 타입 추론과 타입 단언의 차이`);
// console.log(`📌 결과1: ${inferredString}`); // Output: Hello, TypeScript!
// // 📌 예제2: 타입 단언
// const assertedString = "Hello, TypeScript!" as string; // assertedString의 타입을 string으로 단언
// console.log(`📌 결과2: ${assertedString}`); // Output: Hello, TypeScript!
// // 📌 예제3: 타입 단언을 사용한 DOM 요소 접근
// const element = document.getElementById("myElement") as HTMLDivElement; // myElement를 HTMLDivElement로 단언
// console.log(`📌 결과3: ${element}`); // Output: <div id="myElement"></div>
// // 📌 예제4: 타입 단언을 사용한 JSON 파싱
// const jsonString = '{"name": "John", "age": 30}';
// const jsonObject = JSON.parse(jsonString) as { name: string; age: number }; // jsonString을 객체로 단언
// console.log(`📌 결과4: ${jsonObject}`); // Output: { name: "John", age: 30}
// // 📌 예제5: 타입 단언을 사용한 배열 요소 접근
// const numbers: any[] = [1, 2, 3];
// const firstNumber: number = (numbers[0] as number); // numbers[0]을 number로 단언
// console.log(`📌 결과5: ${firstNumber}`); // Output: 1
// // 📌 예제6: 타입 단언을 사용한 함수 리턴값
// const getValue = (): any => "Hello, TypeScript!";
// const value: string = getValue() as string; // getValue()를 string으로 단언
// console.log(`📌 결과6: ${value}`); // Output: Hello, TypeScript!

// /** ✅ 19. 타입 추론과 타입 단언의 차이점 정리
//  * 1. 타입 추론은 TypeScript가 코드의 흐름을 분석하여 변수의 타입을 자동으로 결정하는 것이고, 타입 단언은 개발자가 명시적으로 변수의 타입을 지정하는 것이다.
//  * 2. 타입 추론은 코드 작성 시점에 자동으로 이루어지며, 타입 단언은 개발자가 필요에 따라 특정 시점에 명시적으로 수행한다.
//  * 3. 타입 추론은 TypeScript의 기본 기능으로, 코드의 가독성을 높이고 오류를 줄이는 데 도움을 준다. 반면, 타입 단언은 개발자가 특정 상황에서 TypeScript의 타입 추론을 우회하거나 수정할 때 사용된다.
//  * 4. 타입 추론은 TypeScript가 자동으로 타입을 결정하기 때문에, 코드의 변경이나 리팩토링 시에도 자동으로 업데이트된다. 반면, 타입 단언은 개발자가 명시적으로 지정한 타입이므로, 코드 변경 시 주의가 필요하다.
//  * 5. 타입 추론은 TypeScript의 타입 시스템을 활용하여 코드의 안정성을 높이는 데 기여하며, 타입 단언은 개발자가 특정 상황에서 타입을 강제로 지정할 때 사용된다.
//  * 6. 타입 추론은 TypeScript의 기본 기능으로, 코드 작성 시 자동으로 이루어지며, 타입 단언은 개발자가 필요에 따라 명시적으로 수행한다.
// **/
