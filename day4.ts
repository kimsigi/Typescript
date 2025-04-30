type Status = 'success' | 'error';

function handleResult(status: Status) {
  if (status === 'success') {
    console.log('처리가 완료되었습니다.');
  } else {
    console.log('문제가 발생했습니다.');
  }
}

function showLengthOrNumber(input: string | number) {
  if (typeof input === 'string') {
    console.log(`문자 길이: ${input.length}`);
  } else {
    console.log(`숫자: ${input.toFixed(1)}`);
  }
}

type Apple = { sagwa: () => void };
type Banana = { banana: () => void; };
type Orange = { orange: () => void; };

function inTest(fruit: Apple | Banana | Orange) {
    if ( 'sagwa' in fruit ) {
        console.log('사과입니다.');
    } 
    if ( 'banana' in fruit ) {
        console.log('바나나입니다.');
    } 
    if ( 'orange' in fruit ) {
        console.log('오렌지입니다.');
    } 
}   

handleResult('success');
showLengthOrNumber('TypeScript');
showLengthOrNumber(42.12345);

inTest({ sagwa: () => {} });
inTest({ banana: () => {} });
inTest({ orange: () => {}});
inTest({ sagwa: () => {}, banana: () => {}, orange: () => {} });