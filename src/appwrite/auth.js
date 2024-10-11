import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

class AuthService {
    client;
    account;

    constructor() {
        this.client = new Client();
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name }) {
        try {
            const response = await this.client.create(ID.unique(), email, password, name);
            console.log('User signed up:', response);
            return response;
        } catch (error) {
            console.error('Error signing up:', error);
            throw error;
        }
    }

    async logIn({email, password}) {
        try {
            const response = await this.client.createEmailPasswordSession(email, password);
            console.log('User signed in:', response);
            return response;
        } catch (error) {
            console.error('Error signing up:', error);
            throw error;
        }
    }

    async logOut() {
        try {
            const response = await this.client.deleteSessions('current');
            console.log('User logged out:', response);
            return response;
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.client.get()
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
        return null;
    }

}


const authService = new AuthService();

export default authService;