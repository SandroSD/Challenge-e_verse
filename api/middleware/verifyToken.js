const utils = require('../utils/response');
const jwt = require('jsonwebtoken');

const { logger_info, logger_error } = require('../logs');

module.exports.verifyToken = (req, res, next) => {
    try {
        logger_info.info({ message: `Validating Token` });
        let token = req.header('Authorization');

        if(!token) {
            logger_error.info({ message: `No token.` });            
            return utils.returnResponseWithError(res, 'No token.');
        }

        const { TOKEN_SECRETO } = process.env;

        token = token.replace('Bearer ', '');

        const { exp } = jwt.verify(token, TOKEN_SECRETO);

        if(Date.now() >= exp * 1000) {
            logger_error.info({ message: `Token expired.` });            
            return utils.returnResponseWithError(res, 'Token expired.');
        }

        next();
    } catch(error) {
        logger_error.info({ message: error.message });            
        return utils.returnResponseWithError(res, error.message);
    }
}