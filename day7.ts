//#### 여기서부터는 고급 타입스크립트 내용 ####

type IsNumber<T> = T extends number ? '숫자' : '비숫자';

type A = IsNumber<100>;       // '숫자'
type B = IsNumber<'hello'>;   // '비숫자'
type C = IsNumber<number[]>;  // '비숫자'