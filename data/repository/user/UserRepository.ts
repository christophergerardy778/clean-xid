import { User } from "../../../domain/entity/User";
import { IUserRepository } from "./IUserRepository";
import { PublicApi } from "../../../network/PublicApi";

export class UserRepository implements IUserRepository {

    constructor(private network: PublicApi) {
        // Inyecytar dependencia
    }

    async getAllUsers(): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
    async createUser(name: string, lastname: string, age: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
}