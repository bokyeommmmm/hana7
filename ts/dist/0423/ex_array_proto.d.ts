type Prop = string | number | symbol;
declare global {
    interface Array<T> {
        firstObject: T;
        lastObject: T;
        mapBy: (prop: Prop) => any[];
        filterBy: (prop: Prop, value: unknown, isInclude?: boolean) => T[];
        findBy: (prop: Prop, value: unknown) => T;
    }
}
export {};
