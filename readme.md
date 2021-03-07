# Currency Converter

Simple , lightweight currency converter web component widget.
It is capable of converting among many currencies at the same time, just add all currencies you want, and change any value to see the corresponding exchange in the rest of the chosen symbols.

## Getting Started

Download or clone the repo to your project, build it and import /build/currencyconverter.esm.js (ES module), /build/currencyconverter.js (nomodule) and /build/currencyconverter.css into your HTML.

### Prerequisites

None :). 
[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) is a set of web standard technologies and can be embedded in any web project regardless the framework or technology used. It runs natively in almost every modern browser. See the Stencil.js [support docs](https://stenciljs.com/docs/browser-support)

### Installing

- Create a folder in your project and clone the repo (NPM package coming soon)

```bash
cd my-currency-converter-folder
git clone https://github.com/DiegoMFR/currencyConverter.git
```

- Import the files in the build folder into your HTML (see the included index.html for further reference)

```html
<head>
  ...
 <script type="module" src="my-currency-converter-folder/www/build/currencyconverter.esm.js"></script>
 <script nomodule src="my-currency-converter-folder/www/build/currencyconverter.js"></script>
 <link href="my-currency-converter-folder/www/build/currencyconverter.css" rel="stylesheet">
  ...
</head>
```
---
**NOTE**

```currencyconverter.css``` contains the starter theme styles. As the project uses [shadow dom](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) other styles within the web component cannot be overriden in a traditional way, however this file provides a set of CSS vars for customizing your implementation without the unwanted effects of conflicting CSS rules :)

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

### Here's how to clone and run the project on your local environment.

Clone and install dependencies

```bash
git clone https://github.com/DiegoMFR/currencyConverter.git
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

