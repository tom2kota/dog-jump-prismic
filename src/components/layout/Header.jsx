import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {MenuLink} from "./MenuLink";

export const Header = ({menuDoc}) => (menuDoc) ? (
    <header className="site-header">
        <RouterLink to="./">
            <div className="logo">LOGO</div>
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
) : null

