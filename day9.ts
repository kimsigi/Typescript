type Animal = 'Cat' | 'Dog';
type Sound = `${Animal}Sound`;

const s1: Sound = 'CatSound'; // ✅
const s2: Sound = 'DogSound'; // ✅
//const s3: Sound = 'FishSound'; // ❌ 오류

console.log(s1, s2);