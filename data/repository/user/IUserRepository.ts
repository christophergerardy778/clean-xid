import { User } from "../../../domain/entity/User";

export interface IUserRepository {
    getAllUsers() : Promise<User>;
    createUser(name: string, lastname: string, age: string): Promise<User>;
}