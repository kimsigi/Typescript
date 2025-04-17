let a: string = "hello";
let b: number = 5;
let c: boolean = true;
let d: any = "hello";
let e: unknown = "hello";
let f: object = { name: "John" };
let g: null = null;
let h: undefined = undefined;
let i: void = undefined;
//let j: never = (() => { throw new Error("never") })();
//let k: bigint = BigInt("12345678901234567890"); // 문자열로
//let l: symbol = Symbol("symbol");
let m: string[] = ["hello", "world"];
let n: number[] = [1, 2, 3];
let o: boolean[] = [true, false, true];
let p: any[] = [1, "hello", true, { name: "John" }];
let q: [string, number] = ["hello", 5];
let r: [string, number][] = [["hello", 5], ["world", 10]];
let s: [string, number?] = ["hello"]; // ?는 생략가능하므로 생략
let t: [string, ...number[]] = ["hello", 1, 2, 3]; // ...(rest) 이므로 배열로 들어감
let u: [string, ...number[]] = ["hello"]; // rest element with empty array

console.log(u);
u = ['hello-world',1,2,3,4,5];
console.log(u);
