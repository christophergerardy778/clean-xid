import { User } from "../domain/entity/User";
import { UserRepository } from "../domain/repository/UserRepository";
import { PublicApi } from "../network/PublicApi";

export class UserInteractor implements UserRepository {

    constructor(private axios: PublicApi) {
        // Inyecytar dependencia
    }

    async getAllUsers(): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
    async createUser(name: string, lastname: string, age: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
}