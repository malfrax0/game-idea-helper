
export type Optional<T> = {
    [Property in keyof T]?: T[Property]
}