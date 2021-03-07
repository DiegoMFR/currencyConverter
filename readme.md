# Currency Converter

Simple , lightweight currency converter widget.

## Getting Started

Download or clone the repo to your project, and import /build/currencyconverter.esm.js (ES module), /build/currencyconverter.js (nomodule version) and /build/currencyconverter.css into your HTML.

### Prerequisites

None :)

### Installing

- Create a folder in your project and clone the repo

```bash
cd my-currency-converter-folder
git clone https://github.com/DiegoMFR/currencyConverter.git
```

- Import the files in the build folder into your HTML (see the included index.html for further reference)

```html
<head>
  ...
 <script type="module" src="/build/currencyconverter.esm.js"></script>
 <script nomodule src="/build/currencyconverter.js"></script>
 <link href="/build/currencyconverter.css" rel="stylesheet">
  ...
</head>
```
---
**NOTE**

```currencyconverter.css``` contains the starter theme CSS vars, you can use them to customize your implementation :)

---


- Add the ```<currency-converter>``` tag to your body

```html
<div class="my-currencies">
    <h2> Currency converter: </h2>
    <currency-converter></currency-converter>
</div>
```

Live demo: https://sad-kilby-8ede80.netlify.app/


# Project Settings

### Here's a brief explanation on how to clone and run the project on your local environment.

Clone and install dependencies

```bash
https://github.com/DiegoMFR/currencyConverter.git
npm i
```

Run development build in watch mode

```bash
npm start
```

Run production build

```bash
npm run build
```

Run tests

```bash
npm run test
```


## Built With

* [Stenciljs](https://stenciljs.com/) - Web components generator.
* [WebComponents](https://www.webcomponents.org/) - Web platform API for custom elements creation.

## Versioning

[Git](https://git-scm.com/) - [NPM](https://www.npmjs.com/).

## Author

**Diego Morales** [Linkedin](www.linkedin.com/in/diegomfr)

