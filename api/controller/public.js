const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const service = require('../service/user');
const utils = require('../utils/response');

const { logger_info, logger_error } = require('../logs');

module.exports.login = async (req, res) => {
    try {
        const { body: { email, password } } = req;
        logger_info.info({ message: `Trying to login: ${email}` });

        if(!email || !password) {
            logger_error.info({ message: `email or password incorrect` });
            return utils.returnResponseWithError(res, 'email or password incorrect.');
        }

        const user = await service.getByParam({ email });

        if(!user[0]) {
            logger_error.info({ message: `email or password incorrect` });
            return utils.returnResponseWithError(res, 'email or password incorrect.');
        }

        const passwordCompare = await bcrypt.compare(password, user[0].password);

        if(!passwordCompare) {
            logger_error.info({ message: `email or password incorrect` });
            return utils.returnResponseWithError(res, 'email or password incorrect.');
        }

        delete user.password;

        const { TOKEN_SECRETO, EXPIRES_IN } = process.env;

        const token = jwt.sign({ user }, TOKEN_SECRETO, { expiresIn: EXPIRES_IN });

        return res.status(200).json({user: user[0], token});
    } catch (error) {
        logger_error.info({ message: `Error trying to login: ${error.message}` });
        return utils.returnResponseWithError(res, { message: error.message });
    }
}