const service = require('../service/user');

const { logger_info, logger_error } = require('../logs');

module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        logger_info.info({ message: `Trying to get user by id: ${id}` });

        const user = await service.getById(id);

        if(!user) {
            logger_error.info({ message: `User not found.` });
            return res.sendStatus(204);
        }

        return res.status(200).json(user);
    } catch (error) {
        logger_error.info({ message: error.message });
        return res.status(400).json(error);
    }
}

module.exports.create = async (req, res) => {
    try {
        const { body } = req;
        logger_info.info({ message: `Trying to create user: ${JSON.stringify(body)}` });

        const user = await service.create(body);

        return res.status(201).json(user);
    } catch (error) {
        logger_error.info({ message: error.message });
        return res.status(400).json(error);
    }
}

module.exports.update = async (req, res) => {
    try {
        const { params: { id }, body } = req;
        logger_info.info({ message: 'Trying to update user.' });

        await service.update(body, id);

        return res.sendStatus(200);
    } catch (error) {
        logger_error.info({ message: error.message });
        return res.status(400).json(error);
    }
}

module.exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        logger_info.info({ message: 'Trying to delete user.' });

        await service.deleteById(id);

        return res.sendStatus(200);
    } catch (error) {
        logger_error.info({ message: error.message });
        return res.status(400).json(error);
    }
}