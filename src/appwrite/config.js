import { Client, ID, Databases, Storage } from "appwrite";
import conf from "../conf/conf";


class DatabaseService {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, status, userId}) {
        try {
            const response = await this.client.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    status,
                    userId
                }
            ) 
        } catch (error) {
            console.error('Error creating database:', error);
        }
    }

    async updatePost(slug, {title, content ,status, userId}) {
        try {
            const response = this.client.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status, 
                    userId
                }
            )
            console.log('Document updated:', response);
            return response;
        } catch (error) {
            console.error('Error updating document:', error);
        }
    }

    async delatePost(slug) {
        try {
            await this.client.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.error('Error updating document:', error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            await this.client.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.error('Error updating document:', error);
            return false;
        }
    }

}


const databaseService = new DatabaseService();
export default databaseService;