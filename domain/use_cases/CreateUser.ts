import { UserRepository } from "../../data/repository/user/UserRepository";
import { BaseUseCase } from "./BaseUseCase";
import { User } from '../entity/User';

export class CreateUser implements BaseUseCase<number, User> {

    constructor(private repository: UserRepository) {
        // INYECYAR DEPENDENCIA
    }

    execute(port: number): User {
        const users = this.repository.getAllUsers();
        
        if(port == users ) {
            // LOGICA 
        }

        return {
            id: 1,
            age: 2,
            lastname: '',
            name: ''
        };
    }
}