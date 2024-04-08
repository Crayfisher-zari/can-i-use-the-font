# Is font available

Is font available detect the font is available for the browser with local installed fonts. It is useful for the web fonts, using from server or local file and reducing network traffic.

## Install

```sh
npm install is-font-available
```

# Usage

```js
import { isFontAvailable } from "is-font-available";

const isHelveticaAvailable = isFontAvailable("Helvetica");
// -> true or false
```
