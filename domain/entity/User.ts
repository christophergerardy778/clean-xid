export interface User {
    id: number;
    name: string;
    lastname: string;
    age: number;
}

export function getFullName(user: User): string {
    return `${user.name.toUpperCase()} ${user.lastname.toUpperCase()}`;
}