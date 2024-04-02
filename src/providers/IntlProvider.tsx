import { Fragment, PropsWithChildren, useEffect, useState } from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";

import { defaultLanguage, locales, SupportedLocale } from "../locales";
import React from "react";


export function IntlProvider({children}: PropsWithChildren){
    const [locale, setLocale]= useState<SupportedLocale>(() => {
        //read language from bus
        let lang = window.localStorage.getItem("lang") === null ? 'fr': 'en';
        if(!lang){
            lang=navigator.language.toLowerCase().split(/[_-]+/)[0];
        }
        if(!Object.keys(locales).includes(lang.toLowerCase())){
            lang=defaultLanguage;
        }
        return lang as SupportedLocale;
    });

    useEffect(()=>{
        let lang = window.localStorage.getItem("lang") === null ? 'fr': 'en';
        setLocale(lang.toLowerCase() as SupportedLocale)
    })

        return (
            <ReactIntlProvider 
            locale={locale}
             messages={locales[locale]} 
             textComponent={Fragment}>{children}</ReactIntlProvider>
        )
}