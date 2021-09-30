import { UserInteractor } from "../data/UserInteractor";
import { BaseUseCase } from "./BaseUseCase";

export class CreateUser implements BaseUseCase<string, string> {
    
    constructor(private repository: UserInteractor) {
        // INYECYAR DEPENDENCIA
    }

    execute(port: string): string {
        throw new Error("Method not implemented.");
    }
}