import { readFile } from 'node:fs/promises';
import type { SUPPORTED_LANGUAGES } from './consts.js';

const enMessage = JSON.parse(await readFile('../locales/en/messages.json', 'utf8'));

export type SupportedLanguagesKeysType = keyof typeof SUPPORTED_LANGUAGES;
export type SupportedLanguagesWithoutRegionKeysType = Exclude<SupportedLanguagesKeysType, `${string}_${string}`>;
export type I18nValueType = {
  message: string;
  placeholders?: Record<string, { content?: string; example?: string }>;
};

export type MessageKeyType = keyof typeof enMessage;
export type LocalesJSONType = typeof enMessage;
