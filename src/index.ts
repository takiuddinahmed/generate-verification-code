interface Option {
    length: number;
    type: 'string' | 'number';
}

const defaultOptions: Option = {
    length: 6,
    type: 'number',
};

export function generateVerificationCode({ length, type } = defaultOptions) {
    if (isNaN(length)) throw new TypeError('Length must be a number');
    if (length < 1) throw new TypeError('Length must be greater than zero');

    const digits = '0123456789';
    let code = '';

    for (let i = 0; i < length; i++) {
        code += digits.charAt(Math.floor(Math.random() * 9));
    }
    if (type === 'number') {
        return parseInt(code);
    }
    return code;
}
