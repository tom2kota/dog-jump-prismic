import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {MenuLink} from "./MenuLink";

export const Header = ({menuDoc}) => {

    if (menuDoc) {
        return (
            <header className="site-header">
                <RouterLink to="./">
                    <div className="logo">Example Site</div>
                </RouterLink>
                <nav>
                    <ul>
                        {menuDoc.data.menu_links.map(menuLink => (
                            <MenuLink
                                menuLink={menuLink}
                                key={menuLink.link.id}
                            />
                        ))}
                    </ul>
                </nav>
            </header>
        )
    }

    return null

}

