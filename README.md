backend.js lets imports your λ functions into the browser as a super lightweight JS library.

## Contents

- [Installationn](#installation)
- [Usage](#usage)
- [Access Keys](#access-keys)

## Installation

```
npm i --save @eahefnawy/backend.js
```

## Usage

```js
const backend = require('@eahefnawy/backend.js`)

const config = {
  import: ['sendSms', 'sendEmail'], // λ function names that you'd like to import
  region: 'us-east-1',
  accessKeyId: 'xxx',
  secretAccessKey: 'xxx'
}
const { sendSms, sendEmail } = backend(config)

```

## Access Keys
