let a = "hello";
let b = 5;
let c = true;
let d = "hello";
let e = "hello";
let f = { name: "John" };
let g = null;
let h = undefined;
let i = undefined;
//let j: never = (() => { throw new Error("never") })();
//let k: bigint = BigInt("12345678901234567890"); // 문자열로
//let l: symbol = Symbol("symbol");
let m = ["hello", "world"];
let n = [1, 2, 3];
let o = [true, false, true];
let p = [1, "hello", true, { name: "John" }];
let q = ["hello", 5];
let r = [["hello", 5], ["world", 10]];
let s = ["hello"]; // ?는 생략가능하므로 생략
let t = ["hello", 1, 2, 3]; // ...(rest) 이므로 배열로 들어감
let u = ["hello"]; // rest element with empty array
console.log(u);
u = ['hello-world', 1, 2, 3, 4, 5];
console.log(u);
