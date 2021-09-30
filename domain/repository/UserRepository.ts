import { User } from "../entity/User";

export interface UserRepository {
    getAllUsers() : Promise<User>;
    createUser(name: string, lastname: string, age: string): Promise<User>;
}