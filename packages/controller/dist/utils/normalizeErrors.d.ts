interface Error {
    ok: boolean;
    message: string;
    path: string;
}
export declare const normalizeErrors: (errors: Error) => {
    message: string;
};
export {};
