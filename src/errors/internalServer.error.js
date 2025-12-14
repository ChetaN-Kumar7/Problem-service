const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes')

class IntervalServerError extends BaseError{
    constructor(details){
        super("IntervalServerError",StatusCodes.INTERNAL_SERVER_ERROR,'something went wrong',details)
    }
}

module.exports = IntervalServerError;