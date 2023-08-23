interface Option {
    length?: number;
    type?: 'string' | 'number';
}

const defaultOptions: Option = {
    length: 6,
    type: 'number',
};

export function generateVerificationCode({
    length = 6,
    type = 'number',
} = defaultOptions) {
    if (!length) throw new TypeError('Length must be a defined');
    if (isNaN(length)) throw new TypeError('Length must be a number');
    if (length < 1) throw new TypeError('Length must be greater than zero');
    if (type === 'number' && length > 16) {
        throw new TypeError(
            'Length must be less than or equal 17 digits for number type'
        );
    }

    const digits = '0123456789';
    let code = '';

    for (let i = 0; i < length; i++) {
        let randomIndex: number;
        // if type is number then first digit should not be zero
        if (type === 'number' && i === 0) {
            randomIndex = Math.floor(Math.random() * 8) + 1;
        } else {
            randomIndex = Math.floor(Math.random() * 9);
        }
        code += digits.charAt(randomIndex).toString();
    }
    if (type === 'number') {
        return parseInt(code);
    }
    return code;
}
