import dotenv from 'dotenv-safe';

dotenv.config();

export const DEBUG = process.env.DEBUG === 'true';
export const TOKEN = String(process.env.TOKEN);
export const TEST_TOKEN = String(process.env.TEST_TOKEN);