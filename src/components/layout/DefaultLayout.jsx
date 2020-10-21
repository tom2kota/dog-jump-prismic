import React from "react"
import {Footer} from "./Footer";
import {Header} from "./Header";

export const DefaultLayout = ({wrapperClass, menuDoc, children}) => {

    return (
        <div className={wrapperClass}>
            <Header menuDoc={menuDoc}/>
            {children}
            <Footer/>
        </div>
    )
}
