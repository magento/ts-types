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