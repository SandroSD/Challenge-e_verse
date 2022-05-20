
module.exports.returnResponseWithError = (res, message) => res.status(400).json({message});