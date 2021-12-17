export interface BaseUseCase<I, O> {
    execute(port: I): O;
}