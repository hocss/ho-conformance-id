
import chalk from 'chalk';

import Base from 'ho-conformance-base';

/**
 * Debug
 * Logs parse debug info to stdout
 * @class
 */
export default class Noid extends Base {
    /**
     * @constructs
     */
    constructor() {
        super()

        this.taskName = 'Noid'
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


    /*-----------------------------------------------------------*\
     *
     *  Listeners
     *
    \*-----------------------------------------------------------*/

    onRoot( root ) {
        console.log( chalk.grey( '[' + this.taskName + ']' ), chalk.cyan( root.name ) )
    }
}
