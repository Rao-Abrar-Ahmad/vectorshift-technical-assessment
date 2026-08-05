const VARIABLE_REGEX =
    /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export function extractVariables(text: string) {
    const matches = [...text.matchAll(VARIABLE_REGEX)];

    return [...new Set(matches.map(m => m[1]))];
}