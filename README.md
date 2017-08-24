# Magento 2 TypeScript Definitions
This package contains type definitions for some Magento 2 libraries (https://magento.com/). If you're wanting to use TypeScript in a Magento 2 project you will won't be able to use Magento 2 libraries in your TypeScript without definitions for those libraries. This plugin is intended to be used alongside [DaveMacaulay/babel-plugin-magento2](https://github.com/DaveMacaulay/babel-plugin-magento2).

## Installation
```
yarn add --dev https://github.com/DaveMacaulay/types-magento2.git
```
or
```
npm install --save-dev https://github.com/DaveMacaulay/types-magento2.git
```


## Current Supported Magento Libraries
- `mage/translate`: $t
- `uiClass`: uiClass
- `uiElement`: uiElement
- `uiCollection`: uiCollection
- `uiComponent`: uiComponent
- `uiRegistry`: uiRegistry

> If a library you desire isn't included yet please open an issue. Alternatively I welcome pull requests to this repository.

## Usage
You can import the moduels using the standard TypeScript `import` syntax:
```js
import * as $t from 'mage/translate';
import * as uiClass from 'uiClass';
import * as uiElement from 'uiElement';
import * as uiCollection from 'uiCollection';
import * as uiComponent from 'uiComponent';
import * as uiRegistry from 'uiRegistry';
```

Then you're able to use the libraries as you would in normal JavaScript:
```js
// Translate
$t('Translate this string');

// Classes
class MyComponent extends uiComponent {

}
```

When TypeScript compiles the .ts files to JavaScript it will maintain the module name in the require dependencies. Resulting in the actual libraries being imported in the browser.
