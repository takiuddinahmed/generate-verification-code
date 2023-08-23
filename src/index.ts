interface Option {
    length?: number;
    type?: 'string' | 'number';
}

const DEFAULT_LENGTH = 6;
const MAX_LENGTH_FOR_NUMBER = 16;
const MIN_NON_ZERO_DIGIT = 1;

const defaultOptions: Option = {
    length: DEFAULT_LENGTH,
    type: 'number',
};

export function generateVerificationCode({
    length = 6,
    type = 'number',
} = defaultOptions) {
    if (!length) throw new TypeError('Length must be a defined');
    if (typeof length !== 'number' || isNaN(length))
        throw new TypeError('Length must be a number');
    if (length < MIN_NON_ZERO_DIGIT)
        throw new TypeError('Length must be greater than zero');
    if (type === 'number' && length > MAX_LENGTH_FOR_NUMBER) {
        throw new TypeError(
            'Length must be less than or equal 17 digits for number type'
        );
    }

    const digits = '0123456789';
    let code = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = getRandomIndex(type, i === 0);
        code += digits.charAt(randomIndex).toString();
    }
    return type === 'number' ? parseInt(code) : code;
}

function getRandomIndex(type: Option['type'], isFirstDigit: boolean): number {
    const maxIndex = isFirstDigit && type === 'number' ? 8 : 9;
    return Math.floor(Math.random() * maxIndex) + (isFirstDigit ? 1 : 0);
}
