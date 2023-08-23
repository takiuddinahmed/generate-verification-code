import { generateVerificationCode } from '../dist';

// Default length is 6 and code type is number

const code1 = generateVerificationCode();
console.log(code1);

// default code type is number and length is 8
const code2 = generateVerificationCode({ length: 8 });
console.log(code2);

// for number type, max  acceptable length  is 16
const code3 = generateVerificationCode({ length: 16 });
console.log(code3);

// can get string type with any length
const code4 = generateVerificationCode({ length: 50, type: 'string' });
console.log(code4);
