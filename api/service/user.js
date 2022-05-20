const { Error } = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = require('../model/user_schema');

const { logger_info, logger_error } = require('../logs');

module.exports.getById = _id => {
    logger_info.info({ message: `Find user service by: ${_id}` });
    return userSchema.findById({ _id });
}

module.exports.getByParam = param => {
    logger_info.info({ message: `Find user service by param: ${JSON.stringify(param)}` });
    return userSchema.find(param);
}

module.exports.create = async body => {
    try {
        logger_info.info({ message: `Create user service` });
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(body.password, salt);
        
        const user = new userSchema({ ...body, password });

        await user.validate();

        return await user.save();
    } catch (error) {
        const fields = Object.keys(error.errors);

        let result_object = {};
        fields.forEach(field => {
            result_object = {
                ...result_object,
                [field]: error.errors[field].message
            }
        });
        logger_error.info({ message: `Error creating user: ${JSON.stringify(result_object)}` });
        throw { message: result_object };
    }
}

module.exports.update = async (body, _id) => {
    try {
        logger_info.info({ message: `Update user service` });
        let user = await this.getById(_id);

        user = {
            ...user._doc,
            ...body
        };

        return await userSchema.findOneAndUpdate(_id, user, { runValidators: true });
    } catch (error) {
        if(error instanceof Error.ValidationError) {
            const fields = Object.keys(error.errors);

            let result_object = {};
            fields.forEach(field => {
                result_object = {
                    ...result_object,
                    [field]: error.errors[field].message
                }
            });
            logger_error.info({ message: `Error creating user: ${JSON.stringify(result_object)}` });
            throw { message: result_object };
        } else if (error instanceof Error.CastError) {
            // wrong _id given.
            logger_error.info({ message: `Error creating user: Wrong ID` });
            throw { message: "Wrong _id" };
        }
    }
}

module.exports.deleteById = async _id => {
    logger_info.info({ message: `Delete user service` });
    return await userSchema.deleteOne({ _id });
}