# Is font available

Is font available detect the font is available for the browser with local installed fonts. It is useful for the web fonts, using from server or local file and reducing network traffic.

## Install

```sh
npm install is-font-available
```

## Usage

Detect the local font is available.

```js
import { isFontAvailable } from "is-font-available";

const isHelveticaAvailable = isFontAvailable("Helvetica");
// -> true or false
```

Using web font when the local font is not available.

```js
async () => {
  const isAvailableMyFont = await isFontAvailable("My Font");
  if (!isAvailableMyFont) {
    const myFont = new FontFace("My Font", `url(${PATH_TO_MY_FONT})`, {
      weight: "400",
      style: "normal",
    });
    await myFont.load();
    document.fonts.add(myFont);
  }
  document.body.style.fontFamily = "My Font";
};
```

## Demo

https://crayfisher-zari.github.io/is-font-available/examples/

https://crayfisher-zari.github.io/is-font-available/examples/loading.html