# Generate Verification Code

A simple NPM package to generate verification code for sms or email

## Installation

You can install the `generate-verification-code` library using npm or yarn:

```shell
npm install generate-verification-code
# or
yarn add generate-verification-code
```

## Usage

To generate a verification code using the library, follow these steps:

1. Import the library:

```typescript
import { generateVerificationCode } from 'generate-verification-code';

//or

const { generateVerificationCode } = require('generate-verification-code');
```

2. Call the generateVerificationCode function with optional parameters:

```typescript
// Default options: length = 6, type = 'number'
const verificationCode1 = generateVerificationCode();

// Custom options: length = 4, type = 'string'
const verificationCode2 = generateVerificationCode({
    length: 4,
    type: 'string',
});
```

3. Use the generated verification code:

```typescript
console.log('Verification Code 1:', verificationCode1);
console.log('Verification Code 2:', verificationCode2);
```

## API

`generateVerificationCode(options)`
Generates a verification code based on the provided options.

-   `options` (optional): An object containing the following optional properties:
    -   `length` (optional): The length of the verification code. Default is 6. If `type` is number then maximum value of the length will be 16. Length should be greater than zero.s
    -   `type` (optional): The type of verification code to generate. Can be `'string'` or `'number'`. Default is `'number'`.

Returns the generated verification code as a string or number, based on the specified type in the options.

## Error Handling

The library handles various error scenarios, such as invalid options or input. If an error occurs, the library will throw an error with a descriptive message.

```
try {
    const verificationCode = generateVerificationCode({
        length: -1,
        type: 'number'
    });
} catch (error) {
    console.error('Error:', error.message);
}

```
