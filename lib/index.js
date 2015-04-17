
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

        this._bindHandlers()
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

    log() {
        console.log.apply( console, [ chalk.grey( '[' + this.taskName + ']' ) ].concat( Array.prototype.slice.call( arguments, 0 ) ) )
    }


    /*-----------------------------------------------------------*\
     *
     *  Listeners
     *
    \*-----------------------------------------------------------*/


    onSelector( selector ) {
        if ( /^#/.test( selector.name ) ) {
            this.log(
                chalk.yellow( 'warn' ),
                selector.raw.value,
                chalk.cyan( selector.raw.currentFileInfo.filename ),
                'contains styling info'
            )
        }
    }
}
