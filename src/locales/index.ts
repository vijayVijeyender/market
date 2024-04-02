import { ReactNode } from 'react';

import fr from './fr.json';

type MessageId= keyof typeof fr;

export const defaultLanguage='fr';

export type SupportedLocale=  'fr';

export const locales:{ [key in SupportedLocale]: Record<MessageId,string>} = {
    fr,
};

export type TranslateMessageFn = <T extends string | ReactNode= string>(
    code:string,
    values?:Record<string,string>,
)=> T;
