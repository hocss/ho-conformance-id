
import chalk from 'chalk';

import Base from 'ho-conformance-base';

/**
 * ID
 * Warns if id elements have styling
 * @class
 */
export default class IDTask extends Base {
    /**
     * @constructs
     */
    constructor() {
        super()

        this.taskName = '#id'
        this.runner = null

        this.currentLineNumber = 0

        this.init()
    }

    /**
     * install
     * @param opts <Object>
     */
    install( opts ) {
        super.install( opts )
    }

    /**
     * destroy
     */
    destroy() {
        super.destroy()
    }


    /*-----------------------------------------------------------*\
     *
     *  Listeners
     *
    \*-----------------------------------------------------------*/


    onRuleset( ruleset ) {
        try {
            this.currentLineNumber = ruleset.raw.debugInfo.lineNumber
        } catch( err ) {
            this.currentLineNumber = null
        }
    }

    onSelector( selector ) {
        if ( /^#/.test( selector.name ) ) {
            this.log(
                chalk.yellow( 'warn' ),
                selector.raw.value,
                chalk.cyan( selector.raw.currentFileInfo.filename + ':' + this.currentLineNumber ),
                'contains styling info'
            )
        }
    }
}
