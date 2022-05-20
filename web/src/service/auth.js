import axios from 'axios';

class AuthService {
    async login(email, password) {
        try {
            return await axios.post('/auth/login', {email, password});
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new AuthService();