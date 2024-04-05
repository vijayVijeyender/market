import React from "react";
import { PropsWithChildren, ReactElement } from "react";
import{ Header } from "../Header/Header.component.jsx"

// import { Header } from "../header/Header.component";
export default function Applayout({children}: PropsWithChildren): ReactElement{
    return(
        <>
        <header>
            <Header />
            </header>
            <main id="main-content" tabIndex={-1}>
                <div className='main' >
                    <div className="container-fluid p-0 flex-grow-1 d-flex flex-column">{children}</div>
                </div>
            </main>
            </>
        
    )
    
}