import { generateVerificationCode } from '../src';

describe('Generate Verification Code test', () => {
    it('should return a number code with  6 digit length every time', () => {
        for (let i = 0; i < 10000; i++) {
            const code = generateVerificationCode();
            expect(code.toString().length).toBe(6);
            expect(typeof code === 'number');
        }
    });
    it('should return a number code with  8 digit length every time', () => {
        for (let i = 0; i < 10000; i++) {
            const code = generateVerificationCode({ length: 8 });
            expect(code.toString().length).toBe(8);
            expect(typeof code === 'number');
        }
    });

    it('should return a number code with  16 digit length every time', () => {
        for (let i = 0; i < 10000; i++) {
            const code = generateVerificationCode({ length: 16 });
            expect(code.toString().length).toBe(16);
            expect(typeof code === 'number');
        }
    });

    it('should throw error for number type and length is greater than 16', () => {
        const code = () => generateVerificationCode({ length: 17 });
        expect(code).toThrowError();
    });
    it('should throw error for invalid length', () => {
        // @ts-ignore
        const code1 = () => generateVerificationCode({ length: 'aaa' });
        const code2 = () => generateVerificationCode({ length: 0 });
        expect(code1).toThrowError();
        expect(code2).toThrowError();
    });

    it('should return string code with length 6', () => {
        for (let i = 0; i < 10000; i++) {
            const code = generateVerificationCode({ type: 'string' });
            expect(code.toString().length).toBe(6);
            expect(typeof code === 'string');
        }
    });
    it('should return string code with length 20', () => {
        for (let i = 0; i < 10000; i++) {
            const code = generateVerificationCode({
                type: 'string',
                length: 20,
            });
            expect(code.toString().length).toBe(20);
            expect(typeof code === 'string');
        }
    });
    it('should return string code with length 50', () => {
        for (let i = 0; i < 10000; i++) {
            const code = generateVerificationCode({
                type: 'string',
                length: 50,
            });
            expect(code.toString().length).toBe(50);
            expect(typeof code === 'string');
        }
    });
});
