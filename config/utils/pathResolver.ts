import path from 'path';

export const pathResolver = (...tokens: string[]) => path.resolve(__dirname, '../', '../', ...tokens);