import { PropsWithChildren } from "react";
import { RouterProvider } from "./RouterProvider";
import GlobalStoreProvider from "./GlobalStoreProvider";
import { IntlProvider } from "./IntlProvider";


export function AppProviders({children}:PropsWithChildren){
    return(
        <GlobalStoreProvider>
            <RouterProvider>
                <IntlProvider>
                    {children}
                </IntlProvider>
            </RouterProvider>
        </GlobalStoreProvider>
    )
}

