// Type definitions for Magento 2
// Project: https://magento2.com/
// Definitions by: Dave Macaulay <https://github.com/DaveMacaulay/>
// Definitions: https://github.com/DaveMacaulay/types-magento2

/**
 * Support for mage/translate $t syntax
 */
interface MageTranslate {
    /**
     * Translate the string using the $t('text') format
     * 
     * @example $t('Testing')
     */
    (text: string): string;
}

declare var $t: MageTranslate;
declare module 'mage/translate' {
    export = $t;
}

/**
 * Support for uiClass
 */
interface MageUiClass {
    defaults: MageUiClassDefaults;

    /**
     * Create new instance of UI class
     * @param args
     */
    new(...args: Array<any>): MageUiClass;

    /**
     * Entry point to the initialization of consturctors' instance.
     *
     * @param {Object} [options={}]
     * @returns {Class} Chainable.
     */
    initialize(options: object): MageUiClass;

    /**
     * Recursively extends data specified in constructors' 'defaults'
     * property with provided options object. Evaluates resulting
     * object using string templates (see: mage/utils/template.js).
     *
     * @param {Object} [options={}]
     * @returns {Class} Chainable.
     */
    initConfig(options: object): MageUiClass;

    /**
     * Creates new constructor based on a current prototype properties,
     * extending them with properties specified in 'exender' object.
     *
     * @param {Object} [extender={}]
     * @returns {Function} New constructor.
     */
    extend(extender: MageUiClass): MageUiClass;
}

interface MageUiClassDefaultIgnoreTmpls {
    templates: boolean;
}
interface MageUiClassDefaults {
    ignoreTmpls: MageUiClassDefaultIgnoreTmpls;
}

declare var uiClass: MageUiClass;
declare module 'uiClass' {
    export = uiClass;
}