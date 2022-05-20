import axios from 'axios';

class UserService {
    async createUser(payload) {
        try {
            return await axios.post('/users', payload);
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new UserService();