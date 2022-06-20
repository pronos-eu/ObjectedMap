export declare const parser: string;
export declare namespace parserOptions {
    const ecmaVersion: string;
    namespace ecmaFeatures {
        const experimentalObjectRestSpread: boolean;
    }
    const sourceType: string;
}
export declare namespace env {
    const node: boolean;
    const es6: boolean;
    const es2020: boolean;
}
declare const _extends: string[];
export { _extends as extends };
export declare const overrides: {
    files: string[];
    extends: string[];
    parserOptions: {
        project: string[];
    };
    rules: {};
}[];
export declare const rules: {};
