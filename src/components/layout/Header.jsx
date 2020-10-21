import React from "react";


export const Header = ({menuDoc}) => {

    if (menuDoc) {
        return (
            <header className="site-header">
                Header
            </header>
        )
    }

    return null

}

