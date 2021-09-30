export interface ApiError {
    kind: string;
    statusCode: number;
    error: string;
}

export interface AuthError {
    kind: string;
    error: string;
}