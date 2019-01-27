backend.js is a super light module that lets you imports your λ functions into the browser as a backend library.

### Usage

**Important Note:** To keep your AWS account secure, make sure you pass access keys with limited access to **only** invoke the functions you want to invoke. 

#### React

```
npm i --save @eahefnawy/backend.js
```

```js
import { backend } from '@eahefnawy/backend.js'

const config = {
  import: ['sendSms', 'sendEmail'], // λ function names that you'd like to import
  region: 'us-east-1',
  accessKeyId: 'xxx',
  secretAccessKey: 'xxx'
}

const { sendSms, sendEmail } = backend(config)

await sendSms({ some: 'inputs' })
await sendEmail({ some: 'inputs' })

```

#### HTML

```html
<script crossorigin src="https://unpkg.com/@eahefnawy/backend.js/dist/backend.umd.min.js"></script>

<script>
  const config = {
    import: ['sendSms', 'sendEmail'], // λ function names that you'd like to import
    region: 'us-east-1',
    accessKeyId: 'xxx',
    secretAccessKey: 'xxx'
  }

  const { sendSms, sendEmail } = backend(config)

  sendSms({ some: 'inputs' })
  sendEmail({ some: 'inputs' })
</script>
```
