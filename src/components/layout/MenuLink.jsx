import React from "react";
import {PrismicLink} from "../prismic-elements/PrismicLink";
import {RichText} from "prismic-reactjs";

export const MenuLink = ({menuLink}) => (
    <li>
        <PrismicLink link={menuLink.link}>
            {RichText.asText(menuLink.label)}
        </PrismicLink>
    </li>
)
